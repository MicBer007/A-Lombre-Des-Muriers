import Photo from "../components/Photo";
import Page from "../components/Page";

export default function Parking() {

  return (
    <Page>
      <Photo src="/assets/i284571214522136891.jpg" width={680} height={509} caption={["Pour votre confort le parking est maintenant couvert et un petit abri est là pour votre vélo.", "For your comfort the car park is now covered and a small shelter is there for your bike.", "Für Ihren Komfort ist der Parkplatz jetzt überdacht und ein kleiner Unterstand für Ihr Fahrrad ist vorhanden."]} />
      <Photo src="/assets/i284571214522136892.jpg" width={680} height={511} caption={["Emplacement parking et terrain de pétanque", "parking space and pétanque court", "Parkplatz und Bouleplatz"]} />
    </Page>
  );
}
