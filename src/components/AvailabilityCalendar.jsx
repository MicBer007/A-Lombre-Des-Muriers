import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const labels = { available: "Disponible", reserved: "Réservé", past: "Date passée" };
const monthCount = 16;

const isoDate = date => date.toISOString().slice(0, 10);

// Reservations are inclusive of both start_date and end_date.
function statusFor(date, today, reservations) {
  if (date < today) return "past";
  if (reservations.some(({ start_date, end_date }) => start_date <= date && date <= end_date)) return "reserved";
  return "available";
}

export default function AvailabilityCalendar() {
  const now = new Date();
  const [year, month] = [now.getFullYear(), now.getMonth()];
  const today = isoDate(new Date(Date.UTC(year, month, now.getDate())));
  const rangeEnd = isoDate(new Date(Date.UTC(year, month + monthCount, 1)));
  const [reservations, setReservations] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    supabase.from("calendar_reservations").select("start_date, end_date")
      .gte("end_date", today).lt("start_date", rangeEnd)
      .then(({ data, error }) => error ? setFailed(true) : setReservations(data));
  }, [today, rangeEnd]);

  return <section className="availability textnormal">
    <h1 className="textheading3 mobile-oversized">Calendrier des disponibilités</h1>
    {failed ? <p>Le calendrier est momentanément indisponible.</p>
      : !reservations ? <p>Chargement du calendrier…</p>
      : <div className="calendar-grid">
      {Array.from({ length: monthCount }, (_, index) => {
        const first = new Date(Date.UTC(year, month + index, 1));
        const firstYear = first.getUTCFullYear();
        const firstMonth = first.getUTCMonth();
        const offset = (first.getUTCDay() + 6) % 7;
        const count = new Date(Date.UTC(firstYear, firstMonth + 1, 0)).getUTCDate();
        const title = first.toLocaleDateString("fr-FR", { month: "long", year: "numeric", timeZone: "UTC" });
        return <table key={index}>
          <caption>{title}</caption>
          <thead><tr>{["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map(day => <th scope="col" key={day}>{day}</th>)}</tr></thead>
          <tbody>{Array.from({ length: Math.ceil((offset + count) / 7) }, (_, week) => <tr key={week}>
            {Array.from({ length: 7 }, (_, weekday) => {
              const day = week * 7 + weekday - offset + 1;
              if (day < 1 || day > count) return <td key={weekday} />;
              const date = `${firstYear}-${String(firstMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const status = statusFor(date, today, reservations);
              return <td key={weekday} className={`calendar-${status}`} aria-label={`${day} ${title} : ${labels[status]}`}><time dateTime={date}>{day}</time></td>;
            })}
          </tr>)}</tbody>
        </table>;
      })}
    </div>}
  </section>;
}
