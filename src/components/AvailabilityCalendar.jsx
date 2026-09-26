import { useEffect, useState } from "react";
import { isoDate, monthCount, loadCalendarReservations } from "../lib/calendar";

const labels = { available: "Disponible", reserved: "Réservé", past: "Date passée" };

// Reservations are inclusive of both start_date and end_date.
function statusFor(date, today, reservations) {
  if (date < today) return "past";
  if (reservations.some(({ start_date, end_date }) => start_date <= date && date <= end_date)) return "reserved";
  return "available";
}

export default function AvailabilityCalendar() {
  const now = new Date();
  const today = isoDate(now.getFullYear(), now.getMonth(), now.getDate());
  const [reservations, setReservations] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    loadCalendarReservations()
      .then(({ data, error }) => error ? setFailed(true) : setReservations(data));
  }, [today]);

  return <section className="availability textnormal">
    <h1 className="textheading3 mobile-oversized">Calendrier des disponibilités</h1>
    {failed ? <p>Le calendrier est momentanément indisponible.</p>
      : !reservations ? <p>Chargement du calendrier…</p>
      : <div className="calendar-grid">
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
              const status = statusFor(date, today, reservations);
              return <td key={weekday} className={`calendar-${status}`} aria-label={`${day} ${title} : ${labels[status]}`}><time dateTime={date}>{day}</time></td>;
            })}
          </tr>)}</tbody>
        </table>;
      })}
    </div>}
  </section>;
}
