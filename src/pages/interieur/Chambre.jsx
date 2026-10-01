import Photo from "../../components/Photo";
import RichText from "../../components/RichText";
import Page from "../../components/Page";

export default function Chambre() {

  return (
    <Page>
      <RichText
        content={{
          blocks: [
            {
              type: "paragraph",
              spans: [
                {
                  text: "Pour toutes réservations à partir d'une semaine ou plus, les draps seront compris dans la location.",
                },
              ],
            },
          ],
        }}
      />
      <Photo src="/assets/i284571214498194393.jpg" width={680} height={510} caption="Lit double de 160 / 200" />
      <Photo src="/assets/i284571214498194449.jpg" width={680} height={510} caption="Ou 2 lits simples de 80 / 200" />
      <Photo src="/assets/i284571214498194478.jpg" width={680} height={510} caption="Literie de qualité." />
      <Photo src="/assets/baby-bed-2026.jpg" width={680} height={510} caption="Lit de Bébé à disposition." />
      <Photo src="/assets/i284571214498194590.jpg" width={680} height={510} caption="Petite table bureau dans la chambre" />
    </Page>
  );
}
