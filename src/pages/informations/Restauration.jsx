import Columns from "../../components/Columns";
import Page from "../../components/Page";
import Photo from "../../components/Photo";
import RichText from "../../components/RichText";

export default function Restauration() {
  return (
    <Page>
      <RichText
        content={{
          blocks: [
            {
              type: "heading",
              style: { fontSize: 46, color: "rgb(54, 54, 54)", align: "center" },
              spans: [{ text: "Restaurants dans les environs d'Anduze" }],
            },
          ],
        }}
      />
      <Columns count={2} gap={20}>
        <Photo src="/assets/restaurant-latelier-de-pierre.webp" width={336} height={343} alt="L'Atelier de Pierre, Anduze" />
        <Photo src="/assets/restaurant-les-3-barbus.webp" width={336} height={343} alt="Restaurant Les 3 Barbus, Générargues" />
        <Photo src="/assets/restaurant-lo-a-la-bouche.webp" width={321} height={343} alt="Restaurant L'Ô à la Bouche, Anduze" />
        <Photo src="/assets/restaurant-le-cevenol.webp" width={339} height={343} alt="Le Cévenol, Anduze" />
        <Photo src="/assets/restaurant-le-mazet.webp" width={340} height={343} alt="Le Mazet, Anduze" />
        <Photo src="/assets/restaurant-la-cappella.webp" width={315} height={343} alt="Restaurant La Cappella, Générargues" />
        <Photo src="/assets/restaurant-saveurs-du-sud.webp" width={353} height={343} alt="Restaurant Saveurs du Sud, Anduze" />
        <Photo src="/assets/restaurant-dalila-food-truck.webp" width={353} height={343} alt="Dalila Food Truck, Thoiras-Corbès" />
        <Photo src="/assets/restaurant-les-5-sens.webp" width={286} height={343} alt="Restaurant Les 5 Sens, Anduze" />
        <Photo src="/assets/restaurant-gite-detape.webp" width={331} height={331} alt="Restaurant du Gîte d'Étape, Anduze" />
        <Photo src="/assets/restaurant-galerie-des-cevennes.webp" width={333} height={331} alt="Galerie des Cévennes, Anduze" />
        <Photo src="/assets/restaurant-le-glacier.webp" width={332} height={331} alt="Le Glacier, Anduze" />
      </Columns>
    </Page>
  );
}
