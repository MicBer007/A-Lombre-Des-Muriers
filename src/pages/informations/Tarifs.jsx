import Photo from "../../components/Photo";
import RichText from "../../components/RichText";
import Page from "../../components/Page";

export default function Tarifs() {

  return (
    <Page gap={22} padding="50px 20px 156px">
      <RichText
        content={{
          blocks: [
            { type: "heading", spans: [{ text: "Tarifs Pour 1 ou 2 personnes" }] },
            {
              type: "paragraph",
              spans: [
                { text: "En Haute saison + vacances scolaires : " },
                { text: "88\u00a0€ ", style: { color: "rgb(156, 27, 49)" } },
                { text: "par jour pour minimum 1 semaine. Réduction de 10% si plus d'un mois." },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "En Moyenne saison : " },
                { text: "84\u00a0€ ", style: { color: "rgb(156, 27, 49)" } },
                { text: "par jour pour minimum 6 nuits. Réduction de 10% si plus d'un mois." },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "En Basse saison : " },
                { text: "80\u00a0€ ", style: { color: "rgb(156, 27, 49)" } },
                { text: "par jour pour minimum 6 nuits. Réduction de 10% si plus d'un mois." },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "en novembre, décembre, janvier et février un supplément de 20\u00a0€ par semaine est demandé pour le chauffage.",
                },
              ],
            },
            { type: "paragraph", spans: [{ text: "Service nettoyage en fin de location : 45\u00a0€" }] },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Caution : 150\u00a0€ payable le jour de l'arrivée, et remboursée au plus tard 8 jours après la fin de location.",
                },
              ],
            },
            { type: "paragraph", spans: [{ text: "Acompte pour la réservation : 30 % de la somme totale." }] },
            { type: "paragraph", spans: [{ text: "IBAN : FR76 2823 3000 0108 7308 5606 219" }] },
            { type: "paragraph", spans: [{ text: "Code BIC/SWIFT : REVOFRP2" }] },
            {
              type: "paragraph",
              spans: [
                { text: "PLUS DE 2 PERSONNES", style: { bold: true, fontSize: 18 } },
                {
                  text: ": Par personne supplémentaire, 10\u00a0€ / jour de supplément. Avec un maximum de 2 personnes supplémentaires",
                },
              ],
            },
          ],
        }}
      />
      {/* Image */}
      <Photo src="/assets/i284571214521237393.jpg" width={680} height={195} />
      {/* English translations */}
      <RichText
        content={{
          blocks: [
            {
              type: "paragraph",
              style: { fontSize: 24, color: "rgb(156, 27, 49)" },
              spans: [{ text: "More than 2 people" }],
            },
            {
              type: "paragraph",
              style: { color: "rgb(156, 27, 49)" },
              spans: [{ text: "Per additional person, 10 € / day of supplement. With up to 2 additional people" }],
            },
            {
              type: "paragraph",
              style: { color: "rgb(156, 27, 49)" },
              spans: [
                {
                  text: "Price for two people In high season + school holidays: 88 € per day for a minimum of 1 week. 10% reduction if more than one month.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { color: "rgb(156, 27, 49)" },
              spans: [
                { text: "In Mid season, 84 € per day for minimum 5 nights. 10% reduction if more than one month." },
              ],
            },
            {
              type: "paragraph",
              style: { color: "rgb(156, 27, 49)" },
              spans: [
                {
                  text: "In low season: 80 € per day. for a minimum of 5 nights. 10% reduction if more than one month.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { color: "rgb(156, 27, 49)" },
              spans: [
                {
                  text: "In November, December, January and February a supplement of 20 € per week is requested for heating.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { color: "rgb(156, 27, 49)" },
              spans: [{ text: "Cleaning service at the end of the rental: 45 €" }],
            },
            {
              type: "paragraph",
              style: { color: "rgb(156, 27, 49)" },
              spans: [
                {
                  text: "Deposit: 150 € payable on the day of arrival, and refunded no later than 8 days after the end of the rental.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { color: "rgb(156, 27, 49)" },
              spans: [
                { text: "Deposit for booking: 30% of the total amount. (*)Reduction of 10% if more than a month" },
              ],
            },
            {
              type: "paragraph",
              spaceBefore: 60,
              style: { fontSize: 24, color: "rgb(101, 179, 69)" },
              spans: [{ text: "Mehr als 2 Personen" }],
            },
            {
              type: "paragraph",
              style: { color: "rgb(101, 179, 69)" },
              spans: [{ text: "Pro zusätzlicher Person 10 € Aufpreis pro Tag. Maximal 2 zusätzliche Personen." }],
            },
            {
              type: "paragraph",
              style: { color: "rgb(101, 179, 69)" },
              spans: [
                {
                  text: "Preise für 1 oder 2 Personen – in der Hochsaison + Schulferien: 88 € pro Tag, Mindestaufenthalt 1 Woche. 10 % Rabatt bei mehr als einem Monat.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { color: "rgb(101, 179, 69)" },
              spans: [
                {
                  text: "In der Zwischensaison: 84 € pro Tag, Mindestaufenthalt 6 Nächte. 10 % Rabatt bei mehr als einem Monat.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { color: "rgb(101, 179, 69)" },
              spans: [
                {
                  text: "In der Nebensaison: 80 € pro Tag, Mindestaufenthalt 6 Nächte. 10 % Rabatt bei mehr als einem Monat.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { color: "rgb(101, 179, 69)" },
              spans: [
                {
                  text: "Im November, Dezember, Januar und Februar wird ein Heizkostenzuschlag von 20 € pro Woche berechnet.",
                },
              ],
            },
            { type: "paragraph", style: { color: "rgb(101, 179, 69)" }, spans: [{ text: "Endreinigung: 45 €" }] },
            {
              type: "paragraph",
              style: { color: "rgb(101, 179, 69)" },
              spans: [
                {
                  text: "Kaution: 150 €, zahlbar am Anreisetag und spätestens 8 Tage nach Ende der Mietzeit zurückerstattet.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { color: "rgb(101, 179, 69)" },
              spans: [{ text: "Anzahlung bei Buchung: 30 % des Gesamtbetrags." }],
            },
            { type: "paragraph", spaceBefore: 60, spans: [{ text: "IMPORTANT:" }] },
            {
              type: "paragraph",
              style: { fontSize: 18, bold: true },
              spans: [
                { text: "Lorsque vous avez besoin de renseignements, allez sur la page " },
                { text: "CONTACT", link: "/contact", style: { underline: false, color: "rgb(0, 102, 204)" } },
              ],
            },
          ],
        }}
      />
    </Page>
  );
}
