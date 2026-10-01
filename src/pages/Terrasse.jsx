import Photo from "../components/Photo";
import Page from "../components/Page";

export default function Terrasse() {

  return (
    <Page>
      <Photo src="/assets/terrace-breakfast-2026.jpeg" width={680} height={510} caption={["terrasse pour des petits déjeuners au soleil et en soirée à l'ombre", "outside patio", "Außenterrasse."]} />
      <Photo src="/assets/covered-terrace-2026-a.jpeg" width={680} height={510} caption={["Terrasse couverte", "Covered patio", "Überdachte Terrasse"]} />
      <Photo src="/assets/terrace-shaded-entry-2026.jpeg" width={680} height={510} caption="L'après midi." />
      <Photo src="/assets/i284571214522315927.jpg" width={680} height={510} caption="Le matin" />
      <Photo src="/assets/i284571214522214522.jpg" width={680} height={510} caption={["La terrasse ouverte pour des petits déjeuners au soleil et en soirée à l'ombre", "outside patio", "Außenterrasse."]} />
      <Photo src="/assets/i284571214522136847.jpg" width={680} height={712} caption="Pierrade à disposition" />
      <Photo src="/assets/terrace-view-2026.jpeg" width={680} height={907} />
      <Photo src="/assets/terrace-covered-side-2026.jpeg" width={680} height={510} />
      <Photo src="/assets/photo_de_la_terrasse.jpeg" width={680} height={510} alt="Photo de la terrasse" />
    </Page>
  );
}
