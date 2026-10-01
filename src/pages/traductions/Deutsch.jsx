import RichText from "../../components/RichText";
import Page from "../../components/Page";

export default function Deutsch() {
  return (
    <Page gap={22} padding="50px 20px 100px">
      <RichText
        content={{
          blocks: [
            {
              type: "heading",
              spans: [{ text: "Dem Alltag entfliehen, zur Ruhe kommen und sich wie zu Hause fühlen" }],
            },
            { type: "paragraph", style: { fontSize: 18 }, spans: [{ text: "Beschreibung:" }] },
            { type: "paragraph", spans: [{ text: "Das Ferienhaus hat einen eigenen Eingang für die Gäste." }] },
            {
              type: "paragraph",
              spans: [
                { text: "Es gibt ein " },
                { text: "großes Schlafzimmer", link: "/interieur/chambre/" },
                {
                  text: " (15\u00a0m²) mit einem Doppelbett (160\u00a0×\u00a0200\u00a0cm), das sich in zwei 80\u00a0cm breite Einzelbetten teilen lässt. Vom Zimmer aus gelangen Sie ebenerdig direkt auf eine teilweise überdachte Terrasse und auf eine zweite Terrasse zum Sonnenbaden.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Ein schmiedeeiserner Tisch, Gartenstühle und zwei Sonnenliegen stehen für entspannte Stunden bereit.",
                },
              ],
            },
            { type: "paragraph", spans: [{ text: "Ein Grill steht Ihnen ebenfalls zur Verfügung." }] },
            {
              type: "paragraph",
              spans: [
                { text: "Im " },
                { text: "Wohnbereich", link: "/interieur/piece-a-vivre/" },
                { text: " finden Sie eine " },
                { text: "ausgestattete Küche", link: "/interieur/piece-a-vivre/" },
                {
                  text: " und ein schönes Wohnzimmer – zusammen 32\u00a0m² im landestypischen Stil, mit Natursteinwänden und einem Holzofen für die Winterabende. Das Wohnzimmer hat eine Klimaanlage, die kühlen und heizen kann.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Im Wohnbereich gibt es außerdem ein Schlafsofa (Aufpreis bei mehr als zwei Personen)." },
              ],
            },
            {
              type: "paragraph",
              spans: [{ text: "Das Ferienhaus hat Glasfaser-Internet und WLAN, aber keinen Fernseher." }],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Das " },
                { text: "Badezimmer", link: "/interieur/salle-de-bain/" },
                {
                  text: " ist ausschließlich für die Gäste da und wurde komplett renoviert. Es hat eine fast bodengleiche Dusche mit nur 3\u00a0cm hoher Kante, ein Waschbecken, eine Waschmaschine, einen großen Ganzkörperspiegel und einen kleinen Spiegel über dem Waschbecken. Die Toilette ist separat.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Das Grundstück ist insgesamt 4.000\u00a0m² groß; der gepflegte Garten auf der Seite des Ferienhauses umfasst 2.000\u00a0m².",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Das Wohlbefinden meiner Gäste liegt mir am Herzen. Ich lasse Ihnen alle Freiheit und bin offen für einen Austausch, bei dem das Wohlbefinden jedes Einzelnen gewahrt bleibt. Wenn Sie etwas brauchen, bin ich gern für Sie da.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Auf Anfrage gebe ich gegen Aufpreis gern Nähkurse und zeige Ihnen auch, wie man Stoffe mit aufbügelbaren Applikationen aus geblümtem Liberty-Stoff verziert.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Im Sommer biete ich außerdem gern Kurse an, in denen Sie Holzpuzzles mit der Laubsäge selbst aussägen.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Bitte bringen Sie keine Haustiere mit: Der Kontakt mit Hunden und Katzen löst bei mir Asthmaanfälle aus, und auch aus hygienischen Gründen sind Tiere weder im Ferienhaus noch auf dem Grundstück erlaubt. Vielen Dank für Ihr Verständnis.",
                },
              ],
            },
            { type: "paragraph", spans: [{ text: "Ich vermiete das Ferienhaus außerdem nur an Nichtraucher." }] },
            { type: "paragraph", spans: [{ text: "Sehenswürdigkeiten", link: "/a-visiter/" }] },
            { type: "paragraph", spans: [{ text: "Gästebewertungen", link: "/informations/commentaires/" }] },
            { type: "paragraph", spans: [{ text: "Mietpreise", link: "/informations/tarifs/" }] },
            { type: "paragraph", spans: [{ text: "Belegungskalender", link: "/informations/calendrier/" }] },
            { type: "paragraph", spans: [{ text: "Kontaktformular", link: "/contact/" }] },
            { type: "paragraph", spans: [{ text: "Mietvertrag", link: "/informations/contrat/" }] },
            { type: "heading", spaceBefore: 89, spans: [{ text: "In der Küche vorhanden" }] },
            {
              type: "list",
              columns: 2,
              items: [
                { spans: [{ text: "Dampfbackofen" }] },
                { spans: [{ text: "Mikrowelle" }] },
                { spans: [{ text: "Heißluftfritteuse (Airfryer)" }] },
                { spans: [{ text: "Kühl-Gefrier-Kombination" }] },
                { spans: [{ text: "Induktionskochfeld" }] },
                { spans: [{ text: "Nespresso-Kaffeemaschine" }] },
                { spans: [{ text: "Wasserkocher" }] },
                { spans: [{ text: "Toaster" }] },
                { spans: [{ text: "Kenwood-Küchenmaschine" }] },
                { spans: [{ text: "Sodastream" }] },
                { spans: [{ text: "Stabmixer" }] },
                { spans: [{ text: "Zitruspresse" }] },
                { spans: [{ text: "Geschirr für 4 Personen" }] },
                { spans: [{ text: "Auflaufformen" }] },
                { spans: [{ text: "Tarteform" }] },
                { spans: [{ text: "Salz, Pfeffer, Zucker" }] },
                { spans: [{ text: "Kaffeekapseln, Tee, Kräutertee" }] },
                { spans: [{ text: "Spülmittel" }] },
                { spans: [{ text: "Handseife" }] },
                { spans: [{ text: "Hand- und Geschirrtücher" }] },
                { spans: [{ text: "Müllbeutel" }] },
              ],
            },
          ],
        }}
      />
    </Page>
  );
}
