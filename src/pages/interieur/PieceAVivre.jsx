import Photo from "../../components/Photo";
import RichText from "../../components/RichText";
import Page from "../../components/Page";

export default function PieceAVivre() {

  return (
    <Page>
      <RichText
        content={{
          blocks: [
            { type: "heading", spans: [{ text: "La pièce à vivre" }] },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Le salon est équipé d'une climatisation réversible pour votre confort en été comme en hiver.",
                },
              ],
            },
          ],
        }}
      />
      <Photo src="/assets/salon-vue-ensemble-2026.jpeg" width={680} height={510} caption="La pièce à vivre" />
      <Photo src="/assets/salon-climatise-2026.jpeg" width={680} height={510} caption="Le salon avec climatisation réversible" />
      <Photo src="/assets/salon-fauteuils-2026.jpeg" width={680} height={907} caption="Le coin salon" />
      <Photo src="/assets/climatisation-salon-2026.jpeg" width={680} height={832} caption="Climatisation réversible dans le salon" />
      <Photo src="/assets/poele-bois-2026.jpeg" width={680} height={907} caption="Le poêle à bois" />
      <Photo src="/assets/living-room-2026.jpeg" width={680} height={510} caption="Canapé lit rapido" />
      <Photo src="/assets/i284571214522769720.jpg" width={680} height={510} caption="Le canapé lit rapido ouvert" />
      <Photo src="/assets/i284571214522769663.jpg" width={680} height={510} caption="Le canapé lit rapido ouvert. Couchage 160/190 cm" />
      <Photo src="/assets/cuisine-coin-repas-2026.jpeg" width={680} height={510} caption="La cuisine et le coin repas" />
      <Photo src="/assets/cuisine-salon-2026.jpeg" width={680} height={510} caption="La cuisine ouverte sur le salon" />
      <RichText content={{ blocks: [{ type: "heading", spans: [{ text: "Les appareils de la cuisine" }] }] }} />
      <Photo src="/assets/nespresso-2026.jpeg" width={680} height={907} caption="Machine à café Nespresso" />
      <Photo src="/assets/cuisine-coin-repas-2026.jpeg" width={680} height={510} caption="Micro-ondes, à gauche du plan de travail" />
      <Photo src="/assets/sodastream-2026.jpeg" width={680} height={907} caption="Sodastream" />
      <Photo src="/assets/airfryer-2026.jpeg" width={680} height={907} caption="Airfryer" />
      <Photo src="/assets/four-vapeur-2026.jpeg" width={680} height={488} caption="Four vapeur" />

      {/* Kitchen items heading */}
      <RichText
        content={{
          blocks: [
            { type: "heading", spans: [{ text: "À disposition dans la cuisine" }] },
            {
              type: "list",
              columns: 2,
              items: [
                { spans: [{ text: "Four vapeur" }] },
                { spans: [{ text: "Micro-ondes" }] },
                { spans: [{ text: "Airfryer" }] },
                { spans: [{ text: "Frigo-congélateur" }] },
                { spans: [{ text: "Plaque à induction" }] },
                { spans: [{ text: "Machine à café Nespresso" }] },
                { spans: [{ text: "Bouilloire" }] },
                { spans: [{ text: "Grille-pain" }] },
                { spans: [{ text: "Robot Kenwood" }] },
                { spans: [{ text: "Sodastream" }] },
                { spans: [{ text: "Mixsoupe" }] },
                { spans: [{ text: "Presse-agrumes" }] },
                { spans: [{ text: "Vaisselle pour 4 personnes" }] },
                { spans: [{ text: "Plats pour le four" }] },
                { spans: [{ text: "Moule à tarte" }] },
                { spans: [{ text: "Sel, poivre, sucre" }] },
                { spans: [{ text: "Capsules de café, thé, tisanes" }] },
                { spans: [{ text: "Détergent vaisselle" }] },
                { spans: [{ text: "Savon pour les mains" }] },
                { spans: [{ text: "Essuie-main et torchon vaisselle" }] },
                { spans: [{ text: "Sacs poubelle" }] },
              ],
            },
          ],
        }}
      />

      <Photo src="/assets/covered-terrace-2026-b.jpeg" width={680} height={907} caption={["Terrasse couverte", "Covered patio", "Überdachte Terrasse"]} />
    </Page>
  );
}
