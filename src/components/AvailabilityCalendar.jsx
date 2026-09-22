const labels = {
  available: "Disponible", reserved: "Réservé", past: "Date passée",
  arrival: "Arrivée", departure: "Départ",
};

function statusFor(date) {
  if (date < "2026-09-22") return "past";
  if (date === "2026-09-26") return "arrival";
  if (date === "2026-10-10") return "departure";
  if (date > "2026-09-26" && date < "2026-10-10") return "reserved";
  return "available";
}

// Availability supplied by Anne on 22 September 2026, through December 2027.
export default function AvailabilityCalendar() {
  return <section className="availability textnormal">
    <h1 className="textheading3 mobile-oversized">Calendrier des disponibilités</h1>
    <div className="calendar-grid">
      {Array.from({ length: 16 }, (_, index) => {
        const first = new Date(Date.UTC(2026, 8 + index, 1));
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
              const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const status = statusFor(date);
              return <td key={weekday} className={`calendar-${status}`} aria-label={`${day} ${title} : ${labels[status]}`}><time dateTime={date}>{day}</time></td>;
            })}
          </tr>)}</tbody>
        </table>;
      })}
    </div>
  </section>;
}
