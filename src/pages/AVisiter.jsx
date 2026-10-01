import Columns from "../components/Columns";
import Photo from "../components/Photo";
import RichText from "../components/RichText";
import Page from "../components/Page";

export default function AVisiter() {

  return (
    <Page>
      {/* La bambouseraie */}
      <RichText
        content={{
          blocks: [
            { type: "paragraph", style: { fontSize: 30 }, spans: [{ text: "La bambouseraie" }] },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Informations",
                  link: "http://www.cevennes-tourisme.fr/generargues/la-bambouseraie-en-cevennes/tabid/2678/offreid/2aef83ec-5316-45ca-8bd9-b9fbec57bc9f",
                  style: { italic: true, fontSize: 18 },
                },
                { text: ", Heures d'ouverture, Tarif, Réservation…" },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18, italic: true },
              spans: [
                {
                  text: "Preparing to visit",
                  link: "https://www.bambouseraie.fr/en/preparing-to-visit/",
                  style: { color: "rgb(156, 27, 49)" },
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18, italic: true },
              spans: [
                {
                  text: "Informationen In Deutsch",
                  link: "http://www.cevennes-tourisme.fr/generargues/la-bambouseraie-en-cevennes/tabid/2678/offreid/2aef83ec-5316-45ca-8bd9-b9fbec57bc9f",
                  style: { color: "rgb(101, 179, 69)" },
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Vidéo Youtube",
                  link: "https://www.youtube.com/watch?v=Yabgo-bq-Qs",
                  style: { italic: true, fontSize: 18 },
                },
                { text: " de la Bambouseraie" },
              ],
            },
          ],
        }}
      />

      {/* Bambouseraie images - 3 columns */}
      <Columns count={3}>
        <Photo src="/assets/i284571214498218018.jpg" width={214} height={160} />
        <Photo src="/assets/i284571214498218061.jpg" width={214} height={160} />
        <Photo src="/assets/i284571214498218095.jpg" width={213} height={160} />
      </Columns>

      {/* Le village médiéval de Vézénobres */}
      <RichText
        content={{
          blocks: [
            { type: "paragraph", style: { fontSize: 30 }, spans: [{ text: "Le village médiéval de Vézénobres" }] },
            {
              type: "paragraph",
              spans: [
                { text: "Visitez " },
                {
                  text: "le château de Vézénobres",
                  link: "http://www.cevennes-tourisme.fr/vezenobres/chateaux-de-vezenobres/tabid/2678/offreid/1b7d204c-1c8b-4b3a-bbef-d48ec15b05b7",
                  style: { italic: true, fontSize: 18 },
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Vézénobres: " },
                {
                  text: "Village de caractère",
                  link: "http://www.cevennes-tourisme.fr/accueil/decouvrir/notre-territoire/les-villes-phares/vezenobres",
                  style: { italic: true, fontSize: 18 },
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Une " },
                {
                  text: "Balade ludique",
                  link: "http://www.cevennes-tourisme.fr/vezenobres/balades-ludiques-en-famille-a-vezenobres/tabid/2678/offreid/6d268b13-8180-4eb8-8824-7e30abe6d69b",
                  style: { italic: true, fontSize: 18 },
                },
                { text: " en famille à Vézénobres" },
              ],
            },
          ],
        }}
      />

      {/* Vezenobres images - 3 columns */}
      <Columns count={3}>
        <Photo src="/assets/i284571214498218401.jpg" width={214} height={160} />
        <Photo src="/assets/i284571214498218608.jpg" width={214} height={300} />
        <Photo src="/assets/i284571214498218711.jpg" width={213} height={142} />
      </Columns>

      {/* Les grottes */}
      <RichText
        content={{
          blocks: [
            { type: "paragraph", style: { fontSize: 30 }, spans: [{ text: "Les grottes" }] },
            {
              type: "paragraph",
              spans: [
                { text: "Les " },
                {
                  text: "grottes de Trabuc",
                  link: "http://www.cevennes-tourisme.fr/mialet/grotte-de-trabuc/tabid/2678/offreid/288c4d9e-5f58-488e-9ef3-b351a14b5407",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: " Grotte vivante, où l'eau laisse inlassablement son empreinte sur la pierre, ruisselant de draperies en cascades,...",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Grand site de " },
                {
                  text: "L'Aven d'Orgnac",
                  link: "http://www.cevennes-tourisme.fr/orgnac-l-aven/grand-site-de-l-aven-d-orgnac-grotte-cite-de-la-prehistoire/tabid/2678/offreid/0873a3b7-bcb8-44bb-86f2-46470e683817",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: " deux pas des Gorges de l'Ardèche, explorez l'œuvre de la Nature et voyagez jusqu'à nos origines.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "L'Abîme de Bramabiau",
                  link: "http://www.cevennes-tourisme.fr/st-sauveur-camprieu/l-abime-de-bramabiau/tabid/2678/offreid/a09a9268-6800-4512-aa97-4f31d02e7450",
                  style: { italic: true, fontSize: 18 },
                },
                { text: " À la limite des Causses et des Cévennes, dans le massif de l'Aigoual." },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "La " },
                {
                  text: "Grotte des Demoiselles",
                  link: "http://www.cevennes-tourisme.fr/st-bauzille-de-putois/grotte-des-demoiselles/tabid/2678/offreid/f9a7cd1e-e2db-4e88-9dd2-3730778e6a4a",
                  style: { italic: true, fontSize: 18 },
                },
                { text: " Visite guidée, avec accès en funiculaire à l'une des grottes prestigieuses" },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Aven Marzal",
                  link: "http://www.cevennes-tourisme.fr/st-remeze/aven-marzal/tabid/2678/offreid/f52e7ef4-bc37-4d21-9f85-cbca54bdf1f6",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: " Le site de l'Aven-Grotte de MARZAL se situe à quelques kilomètres des célèbres gorges de l'Ardèche, qui se caractérisent par une profondeur de plus de 200 mètres, sur 35 km",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "La " },
                {
                  text: "Grotte de la Cocalière",
                  link: "http://www.cevennes-tourisme.fr/courry/la-grotte-de-la-cocaliere/tabid/2678/offreid/287163ce-ea24-45b1-b8e0-2f20fcce465a",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: " Guidée et commentée tout au long d'un parcours sécurisé d'une durée d'une heure environ,",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "La " },
                {
                  text: "Grotte Chauvet",
                  link: "http://www.cevennes-tourisme.fr/vallon-pont-d-arc/la-grotte-chauvet-2-ardeche/tabid/2678/offreid/421f8930-ae5f-44e4-b165-dee74b06c6d2",
                  style: { italic: true, fontSize: 18 },
                },
                { text: " Découvrez le 1er grand chef d'œuvre de l'Humanité daté d'il y a 36 000 ans." },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "La " },
                {
                  text: "Grotte de la Salamandre",
                  link: "http://www.cevennes-tourisme.fr/mejannes-le-clap/grotte-de-la-salamandre/tabid/2678/offreid/5e055ed0-a7e9-41f7-b913-693490a6d5a8",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: " Bienvenue au Royaume des Géants de Cristal. Ouverte au public pour la première fois en 2013.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "La " },
                {
                  text: "Grotte De Clamouse",
                  link: "http://www.cevennes-tourisme.fr/st-jean-de-fos/grotte-de-clamouse/tabid/2678/offreid/7abfb288-c2c7-4e66-a724-961d1a6f5bb1",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: " La Clamouse est une grotte au cœur d'une vallée légendaire ! 'Site classé dans un site classé ' la nature et l'homme s'unissent pour vous offrir une campagne préservé entre plaine et montagne.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "La " },
                {
                  text: "Grotte de St Marcel",
                  link: "http://www.cevennes-tourisme.fr/st-marcel-d-ardeche/grotte-de-st-marcel/tabid/2678/offreid/6c6abf83-eebf-44e2-91ab-ef889186ca81",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: " Classée au Patrimoine National pour son intérêt géologique et archéologique, la grotte de Saint Marcel est – avec ses 60\u00a0km de réseaux – l'une des plus vastes cavités de France",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "La " },
                {
                  text: "Grotte de Dargilan",
                  link: "http://www.cevennes-tourisme.fr/meyrueis/grotte-de-dargilan/tabid/2678/offreid/3a7ec8f3-90ff-4654-99ed-a19f921edde6",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: " Située sur le site grandiose des Gorges de la Jonte, l'accueil de la grotte de Dargilan offre une vue panoramique sensationnelle.",
                },
              ],
            },
          ],
        }}
      />

      {/* Grottes images - 3 columns */}
      <Columns count={3}>
        <Photo src="/assets/i284571214498218735.jpg" width={214} height={160} />
        <Photo src="/assets/i284571214498218771.jpg" width={214} height={160} />
        <Photo src="/assets/i284571214498224819.jpg" width={213} height={149} />
      </Columns>

      {/* La ville d'Anduze */}
      <RichText
        content={{
          blocks: [
            { type: "paragraph", style: { fontSize: 30 }, spans: [{ text: "La ville d'Anduze" }] },
            {
              type: "paragraph",
              style: { fontSize: 18, italic: true },
              spans: [
                {
                  text: "Anduze",
                  link: "http://www.cevennes-tourisme.fr/accueil/decouvrir/notre-territoire/les-villes-phares/anduze",
                },
              ],
            },
          ],
        }}
      />

      {/* Anduze images - 3 columns */}
      <Columns count={3}>
        <Photo src="/assets/i284571214498218819.jpg" width={214} height={160} />
        <Photo src="/assets/i284571214498219440.jpg" width={214} height={285} />
        <Photo src="/assets/i284571214498219077.jpg" width={213} height={153} />
      </Columns>

      {/* À Sauve, la mer de Rochers */}
      <RichText
        content={{
          blocks: [
            { type: "paragraph", style: { fontSize: 30 }, spans: [{ text: "À Sauve, la mer de Rochers" }] },
            {
              type: "paragraph",
              style: { fontSize: 30, color: "rgb(156, 27, 49)" },
              spans: [{ text: "Sea of Rocks outing in Sauve" }],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Surplombant la cité médiévale de Sauve, ce chaos rocheux présente un paysage féerique où se mêlent végétation et rochers aux formes étonnantes. Suivre le balisage Jaune.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { color: "rgb(156, 27, 49)" },
              spans: [
                {
                  text: "Overlooking the medieval town of Sauve, this blockfield presents a magical landscape which combines plants and rocks with astonishing shapes. Follow the yellow markers.",
                },
              ],
            },
          ],
        }}
      />

      {/* Sauve images - 3 columns */}
      <Columns count={3}>
        <Photo src="/assets/i284571214498219550.jpg" width={214} height={160} />
        <Photo src="/assets/i284571214498219891.jpg" width={214} height={160} caption="Pour des promenades inoubliables" />
        <Photo src="/assets/i284571214498220075.jpg" width={213} height={160} />
      </Columns>

      {/* Parc Parfum d'Aventure et Forest Parc */}
      <RichText
        content={{
          blocks: [
            {
              type: "paragraph",
              style: { fontSize: 30 },
              spans: [{ text: 'À Générargues "le Parc Parfum d\'Aventure" et à Bagard "Forest Parc"' }],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Au " },
                {
                  text: "parc Parfum d'Aventure",
                  link: "http://www.cevennes-tourisme.fr/generargues/parc-parfum-d-aventure/tabid/2678/offreid/5f8a0cd5-1e7c-461e-824e-dc8254c7c4fb",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: ", il y a 15 niveaux de parcours dans les arbres: tyroliennes, pont glissant, funambule, toile d'araignée, grand saut, escal'arbre, piste noire pour les plus sportifs...",
                },
              ],
            },
          ],
        }}
      />

      {/* Parc images - 3 columns */}
      <Columns count={3}>
        <Photo src="/assets/i284571214498225402.jpg" width={214} height={159} />
        <Photo src="/assets/i284571214498225636.jpg" width={214} height={96} />
        <Photo src="/assets/i284571214498226068.jpg" width={213} height={193} />
      </Columns>

      <RichText
        content={{
          blocks: [
            {
              type: "paragraph",
              spans: [
                {
                  text: "Forest Parc",
                  link: "http://www.cevennes-tourisme.fr/bagard/forest-parc/tabid/2678/offreid/cc0d237f-2adb-4c1e-842d-b3cd0cc0c747",
                  style: { italic: true, fontSize: 18 },
                },
                { text: " est à moins d'un km du gîte." },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Parcours aventure sur 3 hectares de forêt, 10 parcours, 120 jeux dans les arbres et Laser Game en forêt sur une zone naturelle de 3000 m².",
                },
              ],
            },
          ],
        }}
      />

      {/* Large forest parc image */}
      <Photo src="/assets/i284571214498260808.jpg" width={680} height={507} />

      {/* Le musée du désert */}
      <RichText
        content={{
          blocks: [
            {
              type: "paragraph",
              spans: [
                { text: "Le musée du désert, ", style: { fontSize: 30 } },
                { text: "Berceau du Protestantisme", style: { italic: true, fontSize: 24 } },
              ],
            },
          ],
        }}
      />

      {/* Musee du desert images - 3 columns */}
      <Columns count={3}>
        <Photo src="/assets/i284571214498226986.jpg" width={214} height={321} />
        <Photo src="/assets/i284571214498226895.jpg" width={214} height={174} />
        <Photo src="/assets/i284571214498227038.jpg" width={213} height={321} />
      </Columns>

      <RichText
        content={{
          blocks: [
            {
              type: "paragraph",
              style: { fontSize: 18, italic: true },
              spans: [
                { text: "Le site du Musée", link: "http://www.museedudesert.com/article5684.html" },
                { text: " · " },
                {
                  text: "In English",
                  link: "http://www.museedudesert.com/article5759.html",
                  style: { color: "rgb(0, 0, 0)" },
                },
                { text: " · " },
                {
                  text: "In Deutsch",
                  link: "http://www.museedudesert.com/article5872.html",
                  style: { color: "rgb(101, 179, 69)" },
                },
              ],
            },
          ],
        }}
      />

      {/* Second musee images - 3 columns */}
      <Columns count={3}>
        <Photo src="/assets/i284571214498227582.jpg" width={214} height={319} />
        <Photo src="/assets/i284571214498227632.jpg" width={214} height={319} />
        <Photo src="/assets/i284571214498227921.jpg" width={213} height={319} />
      </Columns>

      {/* Le train à vapeur des Cévennes */}
      <RichText
        content={{
          blocks: [
            { type: "heading", spans: [{ text: "Le train à vapeur des Cévennes" }] },
            {
              type: "paragraph",
              spans: [
                {
                  text: "https://www.trainavapeur.com/horaires-tarifs/",
                  link: "https://www.trainavapeur.com/horaires-tarifs/",
                  style: { underline: false, color: "rgb(71, 71, 71)" },
                },
              ],
            },
          ],
        }}
      />

      {/* Train large image */}
      <Photo src="/assets/i284571214504326517.jpg" width={680} height={240} />

      {/* Train images and text - 3 columns */}
      <Columns count={3}>
        <Photo src="/assets/i284571214498228054.jpg" width={214} height={322} />
        <Photo src="/assets/i284571214498230883.jpg" width={214} height={143} />
        <RichText
          content={{
            blocks: [
              {
                type: "paragraph",
                spans: [
                  { text: "Entre Anduze et " },
                  {
                    text: "Saint Jean du Gard",
                    link: "https://www.youtube.com/watch?v=zxXBjFXmdd8",
                    style: { italic: true, fontSize: 18 },
                  },
                  { text: ", le " },
                  {
                    text: "train à vapeur des Cévennes",
                    link: "https://www.youtube.com/watch?v=NbjXLGFrKAQ",
                    style: { italic: true, fontSize: 18 },
                  },
                  {
                    text: " vous fera découvrir la vallée des gardons et ses admirables panoramas. À toute vapeur, de viaducs en tunnels, vous pourrez retrouver les chemins de fer d'autrefois. Dans les gares, le chauffeur et le mécanicien vous feront visiter la locomotive qu'ils entretiennent avec soin, et vous trouverez des expositions qui vous raconteront son histoire.",
                  },
                ],
              },
              {
                type: "paragraph",
                style: { fontSize: 18, italic: true },
                spans: [
                  {
                    text: "Vidéo du train vapeur",
                    link: "https://www.youtube.com/watch?time_continue=32&v=O4p95pPQYC4&feature=emb_logo",
                  },
                ],
              },
              {
                type: "paragraph",
                spans: [
                  { text: "Fonctionne d'avril à fin octobre. Horaires sur le " },
                  { text: "site Web", link: "http://www.trainavapeur.com/", style: { italic: true, fontSize: 18 } },
                  { text: ". Circule tous les jours en haute saison : du 10 juillet au 31 août." },
                ],
              },
            ],
          }}
        />
      </Columns>

      {/* Le vélo-rail */}
      <RichText
        content={{
          blocks: [
            {
              type: "paragraph",
              style: { fontSize: 30 },
              spans: [{ text: "Le vélo-rail sur la ligne touristique du Train à Vapeur" }],
            },
          ],
        }}
      />

      <Photo src="/assets/i284571214498541579.jpg" width={680} height={450} />

      <RichText
        content={{
          blocks: [
            {
              type: "paragraph",
              style: { fontSize: 18, italic: true },
              spans: [
                { text: "Vidéo", link: "https://www.youtube.com/watch?v=fFjUhAkMR6M" },
                { text: " · " },
                {
                  text: "In English",
                  link: "https://www.veloraildescevennes.fr/en/velorail-in-the-cevennes/",
                  style: { color: "rgb(156, 27, 49)" },
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: 'Le "Vélorail des Cévennes" propose une balade originale entre Thoiras et Générargues, en empruntant la célèbre ligne touristique du Train à Vapeur des Cévennes.',
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Le public peut pédaler sur un tronçon de 6,2 km de voie ferrée, entre les gares de Thoiras et Générargues. Le vélo-rail fonctionne sur la voie de chemin de fer, en pleine nature, extirpé de la circulation routière.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "À l'avant, deux places sont réservées à ceux qui pédalent. À l'arrière, trois places permettent d'embarquer les amis ou les enfants, même les plus jeunes (à partir de 1 an) puisque les sièges peuvent être équipés de porte-bébés. « C'est une nouvelle activité, familiale qui plus est, idéale pour découvrir nos paysages sous un jour complètement différent » Un parcours sur une ligne touristique exceptionnelle, au cœur de la vallée des Gardons. 3 viaducs et 2 tunnels Au rythme d'un pédalage tranquille, le public emprunte en effet 6,2 km de la célèbre voie ferrée reliant Saint-Jean-du-Gard à Anduze. « Au départ de la gare de Thoiras et à destination de celle de Générargues, que personne ne connaît puisque le Train à Vapeur des Cévennes ne s'y arrête pas, nous proposons un aller-retour sur le plus beau tronçon de la ligne, qui emprunte trois viaducs et deux tunnels taillés dans la roche calcaire. La vue est imprenable ! À voir, le Mescladou, où se rejoignent les Gardons de Saint-Jean et de Mialet… Ce sont des paysages qui ne sont pas visibles depuis les routes et que l'on apprécie vraiment grâce à la \"lenteur\" du vélo-rail ». Un parcours plat, adapté à tous et qui s'effectue en un peu moins de deux heures.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "En pratique : " },
                {
                  text: "Horaires, Tarifs et réservation en ligne",
                  link: "https://www.veloraildescevennes.fr/horaires-et-tarifs-du-velorail-des-cevennes/",
                  style: { fontSize: 18 },
                },
                { text: ' paiement sur place. Restaurant "' },
                {
                  text: "L'entre deux gares",
                  link: "https://www.google.com/maps/uv?hl=fr&pb=!1s0x12b46debbc4a0bcd%3A0xfc26e366724e32f9!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMajvNgiG1ML1tAdWPqNx4BgkbR0-1V1x8GriYD%3Dw444-h320-k-no!5sl%27entre%20deux%20gares%20-%20Recherche%20Google!15sCAQ&imagekey=!1e10!2sAF1QipMajvNgiG1ML1tAdWPqNx4BgkbR0-1V1x8GriYD&sa=X&ved=2ahUKEwiA3rey--_hAhXc6OAKHQ0MD4YQoiowCnoECA8QBg",
                  style: { fontSize: 18 },
                },
                { text: '" ouvert à Thoiras et tables de pique-nique à disposition,' },
              ],
            },
            { type: "paragraph", style: { fontSize: 30 }, spans: [{ text: "Le Gardon" }] },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Dans le sud-est de la France s'écoule le Gardon : une rivière de près de 130 kilomètres, parfois appelée le Gard. Ce cours d'eau a façonné d'étroites gorges, sur plusieurs millions d'années dont les falaises calcaires dépassent parfois 100 mètres de hauteur.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Pour découvrir ces paysages, plusieurs tronçons du Gardon peuvent être parcourus en canoë ou en kayak. Selon l'itinéraire choisi, on passe sous le pont Saint-Nicolas, on longe des restes d'anciens moulins, on aperçoit d'anciens châteaux. Mais le clou du spectacle : l'arrivée sous les arches du pont du Gard. Avec ses 48,77 mètres, c'est le plus haut pont-aqueduc du monde romain.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Il a été construit il y a près de 2000 ans pour enjamber la vallée et approvisionner Nîmes en eau. Par ailleurs, le Gardon et ses environs abritent un écosystème d'exception. On y trouve deux espèces de rapaces rares : des vautours percnoptères et des aigles de Bonelli. Pour préserver ces sites d'exception, ils sont partiellement reconnus comme Réserve naturelle régionale, zone Natura 2000, ou encore Réserve de biosphère de l'UNESCO.",
                },
              ],
            },
          ],
        }}
      />

      {/* Gardon images - 2 columns */}
      <Columns count={2}>
        <Photo src="/assets/i284571214498231115.jpg" width={323} height={242} />
        <Photo src="/assets/i284571214498231774.jpg" width={323} height={215} />
      </Columns>

      <Photo src="/assets/i284571214498233261.jpg" width={680} height={451} />

      {/* Visites virtuelles */}
      <RichText
        content={{
          blocks: [
            {
              type: "heading",
              spans: [{ text: "Pour des visites virtuelles des villages, cliquez sur les noms soulignés" }],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Il y a encore tellement de choses à voir ou à faire qu'il me faudrait encore des pages et des pages…",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Quatre des Plus beaux villages de France s'offrent à vous dans le Gard. Et pour ne rien gâcher, tous quatre sont presque voisins, au Nord Est du département. Aux confins de l'Ardèche, ",
                },
                {
                  text: "Aiguèze",
                  link: "http://on-visite.com/wa_files/v360-aigueze-2.html",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: ", forteresse du XIe siècle, veille d'un côté sur la rivière, de l'autre sur les vignobles des Côtes-du-Rhône. Le village médiéval de ",
                },
                {
                  text: "Montclus",
                  link: "http://on-visite.com/wa_files/v360-montclus-fr-20.html",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: ", signalé par le donjon carré qui seul subsiste de l'ancien château, se repose quant à lui sur la Cèze, non loin des arches rondes du joli Pont du Moulin. Quelques kilomètres en aval, c'est ",
                },
                {
                  text: "La Roque-sur-Cèze",
                  link: "http://on-visite.com/wa_files/v360-la-roque-fr-20.html",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: ", tout de pierres vêtu des maisons aux ruelles, qui s'élève près des vignes au-dessus de la rivière et des sauvages mais fascinantes cascades du Sautadet. Enfin ",
                },
                {
                  text: "Lussan",
                  link: "http://on-visite.com/wa_files/v360-lussan-pbvf-20.html",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: ", village blotti sur un piton rocheux, offre l'attrait d'une cité médiévale entourée de remparts sur un plateau dominant la garrigue...",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Tout aussi beaux, trois " },
                {
                  text: "Villages de caractère ",
                  style: { italic: true, color: "rgb(21, 94, 171)", fontSize: 18 },
                },
                { text: "ont vu ce label récompenser leurs efforts pour valoriser leur riche patrimoine. " },
                {
                  text: "Barjac",
                  link: "http://on-visite.com/wa_files/v360-barjac-2.html",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: ' est le plus "septentrional", entre Cèze et Ardèche et en limite des Cévennes. La cité Renaissance qui accueille deux célèbres foires à la brocante et connaît une belle vitalité associative, se distingue pour son engagement dans le développement durable. À peine plus au sud, ',
                },
                {
                  text: "Lussan",
                  link: "http://on-visite.com/wa_files/v360-lussan-pbvf-20.html",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: " déploie ses ruelles en arrondi au départ d'une coquette place et vers de charmantes maisons. Un peu plus bas encore sur la carte, ",
                },
                {
                  text: "Vézénobres",
                  link: "http://on-visite.com/wa_files/v360-vezenobres-fr-b-20.html",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: " est lui aussi perché. La cité médiévale a préservé son charme d'antan, qui doit beaucoup aux belles demeures romanes reliées par des ruelles pentues nommées ici « endrounes ». Son conservatoire de la figue, et les fêtes qui vont avec en août et octobre, ajoutent à ses attraits.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Nîmes, Uzès et Beaucaire bénéficient toutes trois du label national " },
                {
                  text: "Ville d'art et d'histoire ",
                  style: { italic: true, color: "rgb(21, 94, 171)", fontSize: 18 },
                },
                { text: "qui salue un engagement fort pour l'animation du patrimoine au sens large. " },
                { text: "Nîmes", style: { italic: true, color: "rgb(21, 94, 171)", fontSize: 18 } },
                {
                  text: ", la capitale gardoise, conjugue un des plus beaux passés romains de France (Arènes, Maison Carrée, Temple de Diane, Tour Magne, mosaïques d'Achille et Penthée…), avec des splendeurs XVIIe et XVIIIe (Jardins de la Fontaine, hôtels particuliers…) et des sites contemporains emblématiques (musée Carré d'Art de Sir Norman Foster, immeuble Nemausus de Jean Nouvel, sculptures de Martial Raysse sur la Place d'Assas, abribus de Philippe Starck, interventions urbaines de Jean-Michel Wilmotte…). ",
                },
                { text: "Uzès", style: { italic: true, color: "rgb(21, 94, 171)", fontSize: 18 } },
                {
                  text: ", autrefois Premier duché de France, séduit par son secteur sauvegardé qui regorge de trésors : ruelles pavées, belles places, fontaines et hôtels particuliers Renaissance. Le Palais ducal, la Tour Fenestrelle accolée à la cathédrale Saint Théodorit ou la Tour du Roi en sont aussi des points forts, tout comme ses commerces et ses marchés. ",
                },
                { text: "Beaucaire", style: { italic: true, color: "rgb(21, 94, 171)", fontSize: 18 } },
                {
                  text: ", ville des « belles pierres » porte bien son nom. Au bord du Rhône, la cité internationalement renommée pour sa foire médiévale, séduit aujourd'hui pour son château, ses rues typiques et ses quais animés.",
                },
              ],
            },
            { type: "heading", spans: [{ text: "Pour les amateurs de GR" }] },
            {
              type: "paragraph",
              spans: [
                { text: "Les plus belles " },
                {
                  text: "randonnées",
                  link: "https://www.visugpx.com/les-plus-belles-randonnees/gard/bagard/",
                  style: { italic: true, fontSize: 18 },
                },
                { text: " autour de Bagard. · " },
                {
                  text: "In English",
                  link: "https://www.france-voyage.com/outings/bagard-commune-9557.htm",
                  style: { italic: true, color: "rgb(156, 27, 49)", fontSize: 18 },
                },
              ],
            },
            { type: "heading", spans: [{ text: "À découvrir aussi," }] },
            {
              type: "paragraph",
              spans: [
                {
                  text: "le musée de la soie",
                  link: "http://www.cevennes-tourisme.fr/st-hippolyte-du-fort/musee-de-la-soie/tabid/2678/offreid/40b75b4b-1ab0-4614-9a9f-5cea6e6ac4eb",
                  style: { italic: true, fontSize: 18 },
                },
                { text: " à ST Hippolyte du Fort (" },
                { text: "Vidéo", link: "https://www.youtube.com/watch?v=40ib_X4LIbM", style: { italic: true } },
                { text: ")" },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Le " },
                {
                  text: "grand cirque de Navacelles",
                  link: "https://tourismecevennesnavacelles.com/cirque-de-navacelles.html",
                  style: { italic: true, fontSize: 18 },
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Pour les sportifs sur la commune d'Anduze " },
                {
                  text: "Bambou Canyon",
                  link: "http://www.cevennes-tourisme.fr/anduze/bambou-canyon/tabid/2678/offreid/a8b827e7-7a00-4792-a18f-09f9c7ee1066",
                  style: { italic: true, fontSize: 18 },
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Loisir Sportif à Aujac " },
                {
                  text: "Les ânes des collinettes",
                  link: "http://www.cevennes-tourisme.fr/aujac/les-anes-des-collinettes/tabid/2678/offreid/bc9121be-1329-4ada-8655-822473b9c100",
                  style: { italic: true, fontSize: 18 },
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Cévennes " },
                {
                  text: "G'Randos d'ânes",
                  link: "http://www.cevennes-tourisme.fr/st-etienne-vallee-francaise/cevennes-g-randos-d-anes/tabid/2678/offreid/9f88b657-7054-4b8c-a81e-a36e3b060320",
                  style: { italic: true, fontSize: 18 },
                },
                { text: " à Saint Etienne Vallée Française" },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Trott'in Gard",
                  link: "https://www.trottingard.com/a-propos",
                  style: { italic: true, fontSize: 18 },
                },
                { text: " Balades Accompagnées en trottinettes électriques tout terrain" },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Musée du Scribe",
                  link: "http://www.cevennes-tourisme.fr/st-christol-les-ales/musee-du-scribe/tabid/2678/offreid/3ff8723e-70a3-47cb-8a34-707cf943b863",
                  style: { italic: true, fontSize: 18 },
                },
                { text: " à Saint Christol - Les - Alès. " },
                { text: "(", style: { color: "rgb(156, 27, 49)", fontSize: 18 } },
                {
                  text: "in English",
                  link: "http://www.museeduscribe.com/index.php?page=home&lg=en",
                  style: { italic: true, color: "rgb(156, 27, 49)", fontSize: 18 },
                },
                { text: ")", style: { color: "rgb(156, 27, 49)", fontSize: 18 } },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Monuments et Patrimoine culturel à ST JEAN DU GARD " },
                {
                  text: "Maison du chef Camisard Abraham Mazel",
                  link: "http://www.cevennes-tourisme.fr/st-jean-du-gard/maison-du-chef-camisard-abraham-mazel/tabid/2678/offreid/c5d41773-b99b-45b3-80a2-da6c182220c8",
                  style: { italic: true, fontSize: 18 },
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "Lieux de Culte : à BOISSET à 3 km du gîte " },
                {
                  text: "Temple de Boisset",
                  link: "https://www.eglise-boisset.timothee.fr/",
                  style: { italic: true, fontSize: 18 },
                },
                { text: " tous les dimanches, à 10h30. " },
                {
                  text: "Rue Maryse Bastié",
                  link: "https://www.google.com/maps/dir/617+Route+de+Béthanie,+Bagard/Avenue+Maryse+Bastié,+30140+Boisset-et-Gaujac/@44.0544739,4.0235,14z/data=!4m13!4m12!1m5!1m1!1s0x12b46afee3da55e3:0xc8801fd13dfa99d3!2m2!1d4.032159!2d44.0605118!1m5!1m1!1s0x12b46b14c3f22435:0x518a0f76e04f45ec!2m2!1d4.0091602!2d44.048083",
                  style: { color: "rgb(0, 0, 0)" },
                },
                { text: ". 30140 Boisset-et-Gaujac" },
              ],
            },
            { type: "heading", spans: [{ text: "Les Marchés de Producteurs -- Farmers Markets" }] },
            {
              type: "paragraph",
              spans: [
                {
                  text: "À Saint Jean-du-Gard marché hebdomadaire le mardi matin et en Juillet-Aout marché nocturne le jeudi.",
                },
              ],
            },
            { type: "paragraph", spans: [{ text: "À Vézénobres le jeudi matin" }] },
            {
              type: "paragraph",
              spans: [
                { text: "À Uzès marché de producteurs locaux le mercredi matin et grand marché le samedi matin." },
              ],
            },
            { type: "paragraph", spans: [{ text: "À Saint-Quentin-la-Poterie le vendredi matin" }] },
            { type: "paragraph", spans: [{ text: "Au Vigan Marché du terroir avril à octobre le mardi matin" }] },
            {
              type: "paragraph",
              spans: [
                { text: "À Thoiras " },
                {
                  text: "Terroir Cévennes",
                  link: "https://www.boutiquespaysannes.fr/terroir-cevennes-30140-thoiras",
                  style: { italic: true, fontSize: 18 },
                },
                {
                  text: ": C'est une Boutique Paysanne, un point de vente collectif tenu et géré par des producteurs fermiers qui vendent sans intermédiaire les produits de leurs exploitations aux consommateurs.",
                },
              ],
            },
            { type: "heading", spans: [{ text: "Pour se restaurer" }] },
            {
              type: "paragraph",
              spans: [
                { text: "La table des saisons, nouvellement nommé: " },
                {
                  text: "l'atelier de Pierre",
                  link: "https://restaurantlatelierdepierre.fr/",
                  style: { italic: true },
                },
              ],
            },
          ],
        }}
      />

      {/* Restaurant images */}
      <Photo src="/assets/i284571214504979004.jpg" width={680} height={367} />

      <Photo src="/assets/i284571214504978883.jpg" width={680} height={475} />

      <Photo src="/assets/i284571214504979194.jpg" width={680} height={248} />
    </Page>
  );
}
