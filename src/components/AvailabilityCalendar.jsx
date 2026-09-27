import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate, useLocation, useBlocker } from "react-router-dom";
import { isoDate, monthCount, loadCalendarReservations } from "../lib/calendar";
import { useAdminSession } from "./AdminSession";
import { supabase } from "../lib/supabase";

const labels = { available: "Disponible", reserved: "Réservé", past: "Date passée" };
const leaveMessage = "Vos modifications ne sont pas enregistrées. Les abandonner ?";

// Reservations include both start_date and end_date.
function statusFor(date, today, reservations) {
  if (date < today) return "past";
  return reservations.some(({ start_date, end_date }) => start_date <= date && date <= end_date) ? "reserved" : "available";
}

export default function AvailabilityCalendar({ editing = false }) {
  const { admin } = useAdminSession();
  const navigate = useNavigate();
  const location = useLocation();
  const saved = useRef(false);
  const now = new Date();
  const today = isoDate(now.getFullYear(), now.getMonth(), now.getDate());
  const [reservations, setReservations] = useState(null);
  const [failed, setFailed] = useState(false);
  const [draft, setDraft] = useState(new Map());
  const [twoClicks, setTwoClicks] = useState(false);
  const [pending, setPending] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const drag = useRef(null);
  const suppressClick = useRef(false);
  const dirty = draft.size > 0;
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const blocker = useBlocker(({ currentLocation, nextLocation }) =>
    !saved.current && (dirty || busy || !!pending) && (currentLocation.pathname !== nextLocation.pathname || currentLocation.search !== nextLocation.search));

  useEffect(() => {
    if (blocker.state !== "blocked") return;
    if (!busy && window.confirm(leaveMessage)) blocker.proceed();
    else blocker.reset();
  }, [blocker, busy]);

  useEffect(() => {
    if (!dirty && !busy && !pending) return;
    const warn = event => { event.preventDefault(); event.returnValue = ""; };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty, busy, pending]);

  useEffect(() => {
    if (editing) {
      document.documentElement.classList.add("calendar-is-editing");
      return () => document.documentElement.classList.remove("calendar-is-editing");
    }
  }, [editing]);

  useEffect(() => {
    let active = true;
    loadCalendarReservations().then(({ data, error }) => {
      if (!active) return;
      setFailed(!!error);
      if (!error) setReservations(data);
    });
    return () => { active = false; };
  }, [today]);

  function gestureFor(date) {
    return { start: date, before: new Map(draft), target: !(draft.get(date) ?? (statusFor(date, today, reservations) === "reserved")) };
  }

  function paint(gesture, last) {
    const next = new Map(gesture.before);
    const [start, end] = [gesture.start, last].sort();
    for (const day = new Date(`${start}T12:00:00Z`); day.toISOString().slice(0, 10) <= end; day.setUTCDate(day.getUTCDate() + 1)) {
      const date = day.toISOString().slice(0, 10);
      if (gesture.target === (statusFor(date, today, reservations) === "reserved")) next.delete(date);
      else next.set(date, gesture.target);
    }
    setDraft(next);
  }

  function selectDate(date) {
    if (busy) return;
    setMessage("");
    if (twoClicks && pending) { paint(pending, date); setPending(null); }
    else {
      const gesture = gestureFor(date);
      paint(gesture, date);
      if (twoClicks) setPending(gesture);
    }
  }

  function cancelGesture() {
    if (drag.current) { setDraft(drag.current.before); suppressClick.current = true; }
    else if (pending) setDraft(pending.before);
    drag.current = null; setDragging(false); setPending(null);
  }

  async function save() {
    setBusy(true); setMessage("");
    try {
      const { error } = await supabase.rpc("save_calendar_changes", {
        reserved_dates: [...draft].filter(([, reserved]) => reserved).map(([date]) => date),
        available_dates: [...draft].filter(([, reserved]) => !reserved).map(([date]) => date),
      });
      if (error) throw error;
      setDraft(new Map());
      await loadCalendarReservations({ refresh: true });
      saved.current = true;
      navigate("/informations/calendrier", { replace: true, state: { calendarSaved: true } });
    } catch {
      setMessage("Échec de l’enregistrement. Vos modifications sont conservées. Réessayez.");
    } finally { setBusy(false); }
  }

  return <section className={`availability textnormal${editing ? " availability-editing" : ""}`}>
    <h1 className="textheading3 mobile-oversized">Calendrier des disponibilités</h1>
    {!editing && location.state?.calendarSaved && <p className="calendar-success" role="status">Modifications enregistrées.</p>}
    {editing && <div className="calendar-edit-help">
      <p>Cliquez sur un jour ou faites glisser : le premier jour inverse le statut de toute la période.</p>
      <label><input type="checkbox" checked={twoClicks} disabled={busy || dragging} onChange={event => {
        cancelGesture(); setTwoClicks(event.target.checked);
      }} /> Sélectionner une période en deux touchers</label>
    </div>}
    {editing && createPortal(<div className="calendar-save-bar" aria-label="Enregistrer le calendrier" aria-busy={busy}>
      <div className="calendar-save-inner">
        <div className="calendar-save-status" aria-live="polite">
          <strong>{busy ? "Enregistrement…" : dirty ? `${draft.size} jour${draft.size > 1 ? "s" : ""} non enregistré${draft.size > 1 ? "s" : ""}` : "Aucune modification en attente"}</strong>
          {pending ? <span>Touchez le dernier jour de la période.</span> : message ? <span>{message}</span> : dirty ? <span>Enregistrez pour publier ces disponibilités.</span> : null}
        </div>
        <div className="calendar-save-actions">
          {<button type="button" className="calendar-discard" disabled={busy || dragging} onClick={() => {
            navigate("/informations/calendrier");
          }}>Annuler</button>}
          <button type="button" className="calendar-save" disabled={!dirty || busy || dragging || !!pending || failed} onClick={save}>Enregistrer</button>
        </div>
      </div>
    </div>, document.body)}
    {failed ? <p role="alert">Le calendrier est momentanément indisponible. Rechargez la page.</p>
      : !reservations ? <p>Chargement du calendrier…</p>
      : <div className={`calendar-grid${editing ? " calendar-editing" : ""}`}
        onKeyDown={event => { if (event.key === "Escape") cancelGesture(); }}
        onPointerDown={event => {
          suppressClick.current = false;
          const date = event.target.closest("button[data-date]")?.dataset.date;
          if (!editing || busy || twoClicks || event.pointerType !== "mouse" || event.button !== 0 || !date) return;
          drag.current = gestureFor(date);
          paint(drag.current, date); setDragging(true); setMessage("");
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={event => {
          if (!drag.current) return;
          const cell = document.elementFromPoint(event.clientX, event.clientY)?.closest("button[data-date]");
          if (cell && event.currentTarget.contains(cell)) paint(drag.current, cell.dataset.date);
        }}
        onPointerUp={event => {
          if (!drag.current) return;
          drag.current = null; setDragging(false); suppressClick.current = true;
          event.currentTarget.releasePointerCapture(event.pointerId);
        }}
        onPointerCancel={() => { if (drag.current) cancelGesture(); }}
        onLostPointerCapture={() => { if (drag.current) cancelGesture(); }}
        onClickCapture={event => {
          if (suppressClick.current && event.detail !== 0) {
            suppressClick.current = false; event.stopPropagation();
          }
        }}>
      {Array.from({ length: monthCount }, (_, index) => {
        const first = new Date(Date.UTC(now.getFullYear(), now.getMonth() + index, 1));
        const year = first.getUTCFullYear();
        const month = first.getUTCMonth();
        const offset = (first.getUTCDay() + 6) % 7;
        const count = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
        const title = first.toLocaleDateString("fr-FR", { month: "long", year: "numeric", timeZone: "UTC" });
        return <table key={index}>
          <caption>{title}</caption>
          <thead><tr>{["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map(day => <th scope="col" key={day}>{day}</th>)}</tr></thead>
          <tbody>{Array.from({ length: Math.ceil((offset + count) / 7) }, (_, week) => <tr key={week}>
            {Array.from({ length: 7 }, (_, weekday) => {
              const day = week * 7 + weekday - offset + 1;
              if (day < 1 || day > count) return <td key={weekday} />;
              const date = isoDate(year, month, day);
              const original = statusFor(date, today, reservations);
              const status = editing && draft.has(date) ? (draft.get(date) ? "reserved" : "available") : original;
              const changed = editing && draft.has(date);
              const label = `${day} ${title} : ${labels[status]}`;
              return <td key={weekday} className={`calendar-${status}${changed ? " calendar-changed" : ""}`} aria-label={editing ? undefined : label}>
                {editing && status !== "past"
                  ? <button type="button" data-date={date} aria-label={`${label}${changed ? " · non enregistré" : ""}`} aria-pressed={status === "reserved"} disabled={busy}
                      onClick={() => selectDate(date)}><time dateTime={date}>{day}</time></button>
                  : <time dateTime={date}>{day}</time>}
              </td>;
            })}
          </tr>)}</tbody>
        </table>;
      })}
    </div>}
    {!editing && admin && <div className="calendar-edit-entry"><Link className="calendar-edit-link" to="/informations/calendrier/modifier">Modifier le calendrier <span aria-hidden="true">↗</span></Link></div>}
  </section>;
}
