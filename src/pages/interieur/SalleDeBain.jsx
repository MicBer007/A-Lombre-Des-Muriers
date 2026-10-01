import Photo from "../../components/Photo";
import RichText from "../../components/RichText";
import Page from "../../components/Page";

export default function SalleDeBain() {
  return (
    <Page>
      <Photo src="/assets/i284571214498194679.jpg" width={680} height={510} caption="La douche et le lavabo avec accès direct à la chambre." />
      <Photo src="/assets/i284571214498194708.jpg" width={680} height={907} caption="La douche" />
      <Photo src="/assets/i284571214498271061.jpg" width={680} height={907} />
      <Photo src="/assets/i284571214498194760.jpg" width={680} height={455} caption="Salle de bain équipée d'un lave linge." />
      <Photo src="/assets/i284571214498194767.jpg" width={680} height={510} caption="Lave linge Thomson" />
      <RichText content={{ blocks: [{ type: "heading", spans: [{ text: "Toilette séparée" }] }] }} />
      <Photo src="/assets/toilettes-2026.jpeg" width={680} height={907} caption="Toilette séparée" />
      <Photo src="/assets/toilettes-decoration-2026.jpeg" width={680} height={510} caption="Toilette séparée — la décoration" />
      <RichText
        content={{
          blocks: [
            { type: "paragraph", spans: [{ text: "Étendoir à linge avec pinces à linge" }] },
            {
              type: "paragraph",
              spans: [{ text: "Fer à repasser et petite table à repasser (à poser sur table)." }],
            },
            { type: "paragraph", spans: [{ text: "Sèche cheveux" }] },
            { type: "paragraph", spans: [{ text: "Savon- shampooing" }] },
            {
              type: "paragraph",
              spans: [{ text: "Ensemble serviettes éponges (si location de plus de 5 jours)" }],
            },
          ],
        }}
      />
    </Page>
  );
}
