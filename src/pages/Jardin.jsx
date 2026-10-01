import Photo from "../components/Photo";
import RichText from "../components/RichText";
import Page from "../components/Page";

export default function Jardin() {

  return (
    <Page>
      <Photo src="/assets/i284571214522329899.jpg" width={680} height={510} />
      <Photo src="/assets/i284571214522315913.jpg" width={680} height={907} />
      <Photo src="/assets/i284571214522136776.jpg" width={680} height={513} caption={["La charrette à l'ombre des muriers", "The barrow under the Mulberry tree", "Der Karren im Schatten der Maulbeerbaum"]} />
      <Photo src="/assets/i284571214522315918.jpg" width={680} height={510} />
      <Photo src="/assets/garden-access-path-2026.jpg" width={680} height={510} caption={["Le chemin d'accès.", "Entrance", "Eingang"]} />
      <Photo src="/assets/i284571214522136710.jpg" width={680} height={506} />
      <Photo src="/assets/i284571214522136712.jpg" width={680} height={513} caption={["Jardin côté gîte", "Garden", "Gartenhaus"]} />
      <Photo src="/assets/garden-view-2026.jpeg" width={680} height={510} />
      <Photo src="/assets/i284571214522613580.jpg" width={680} height={907} />
      <Photo src="/assets/capture-decran-2025-09-29-17-59-13.png" width={680} height={664} caption={["Le terrain de pétanque 4m/10m", "Pétanque court", "Bouleplatz"]} />
      <Photo src="/assets/spa-bioclimatique-2026.jpeg" width={680} height={510} alt="Le spa sous sa couverture bioclimatique" />
      <RichText
        content={{
          blocks: [
            {
              type: "paragraph",
              spans: [
                {
                  text: "Entre le 1er mai et le 15 septembre, Spa de nage extérieur avec contre courant à partager avec la propriétaire. Une couverture bioclimatique permet d’en profiter par tous les temps.",
                },
              ],
            },
          ],
        }}
      />
    </Page>
  );
}
