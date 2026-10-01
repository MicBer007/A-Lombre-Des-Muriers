import Columns from "../components/Columns";
import GoogleMap from "../components/GoogleMap";
import Photo from "../components/Photo";
import RichText from "../components/RichText";
import Video from "../components/Video";
import Page from "../components/Page";

const DISTANCES = [
  ["Boisset-et-Gaujac", 4],
  ["Saint-Christol-lès-Alès", 4],
  ["Anduze", 5],
  ["Ribaute-les-Tavernes", 6],
  ["Lézan", 7],
  ["Générargues", 8],
  ["Alès", 9],
  ["Lédignan", 13],
  ["Vézénobles", 14],
  ["Saint-Jean-du-Gard", 18],
  ["Quissac", 22],
  ["Ganges", 40],
  ["Uzès", 42],
  ["Nîmes", 45],
  ["Lunel", 51],
  ["Le Vigan", 55],
  ["Florac", 71],
  ["Montpellier", 75],
];

export default function Home() {

  return (
    <Page padding="40px 35px">
      {/* Image 1: Facade sud */}
      <Photo src="/assets/i284571214498116028.jpg" width={680} height={510} caption={["La façade sud au mois de mai", "The south facade in May", "Die Südfassade im Mai"]} />

      {/* Pour me contacter heading */}
      <RichText
        content={{
          blocks: [
            { type: "heading", spans: [{ text: "Pour me contacter :" }] },
            {
              type: "paragraph",
              spans: [
                { text: "Par " },
                { text: "mail", link: "mailto:alombredesmuriers@gmail.com", style: { color: "rgb(0, 0, 0)" } },
                { text: " : alombredesmuriers@gmail.com" },
              ],
            },
            {
              type: "paragraph",
              spans: [{ text: "Par la page " }, { text: "CONTACT", link: "/contact/", style: { fontSize: 18 } }],
            },
            { type: "paragraph", spans: [{ text: "Par téléphone et WhatsApp: 0033(0)6 26 03 04 19" }] },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Je ne réponds pas aux numéros inconnus, donc,\n(Uniquement messages oraux ou écrits et je vous rappellerai).",
                },
              ],
            },
          ],
        }}
      />

      {/* Chemin d’accès au gîte */}
      <Photo src="/assets/home-access-path-2026.jpeg" width={680} height={510} caption="Chemin d’accès au gîte" />

      {/* Video */}
      <Video src="/assets/vid--442257519-85d50000-2892-445f-bb11-75d0ce180821-640x360.mp4" width={680} height={383} caption="La maison et le gîte vue du ciel" />

      {/* Image 2: Large house photo */}
      <Photo src="/assets/1fb4cef8-f3c4-454f-b1ff-d23bfc02e092.JPG" width={680} height={655} />

      {/* SPA text */}
      <RichText
        content={{
          blocks: [
            {
              type: "paragraph",
              spans: [
                {
                  text: "Et depuis ce mois d'avril 2023 un SPA de Nage avec contre courant a partager avec la propriétaire. Le Spa est accessible du 1er mai au 30 septembre. Une couverture bioclimatique permet d’en profiter par tous les temps.",
                },
              ],
            },
          ],
        }}
      />

      {/* Image 3: Spa screenshot 1 */}
      <Photo src="/assets/spa-bioclimatique-2026.jpeg" width={680} height={510} alt="Le spa sous sa couverture bioclimatique" />

      {/* Image 4: Spa screenshot 2 */}
      <Photo src="/assets/spa-couvert-2026.jpeg" width={680} height={510} alt="Le spa couvert pour en profiter par tous les temps" />

      {/* Image 5: Chaises longues */}
      <Photo src="/assets/chaises_longues.jpeg" width={680} height={907} alt="Chaises longues" />

      {/* Image 12 */}
      <Photo src="/assets/i284571214522335201.jpg" width={680} height={488} />

      {/* Image 13: Entrée du gîte */}
      <Photo src="/assets/terrace-entry-2026.jpeg" width={680} height={510} caption="Entrée du gîte et Pierrade pour plus de convivialité !" />

      {/* Image 6 */}
      <Photo src="/assets/home-facade-table-2026.jpeg" width={680} height={510} />

      {/* Heading: Pour profiter */}
      <RichText
        content={{
          blocks: [
            {
              type: "heading",
              spans: [
                {
                  text: "Pour profiter d'un dépaysement total et reposant et se retrouver à l'aise comme chez soi",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 24 },
              spans: [{ text: "Description", style: { underline: true } }, { text: " :" }],
            },
            { type: "paragraph", spans: [{ text: "Le gîte a un accès privatif pour les voyageurs." }] },
            {
              type: "paragraph",
              spans: [
                { text: "Il y a une " },
                { text: "GRANDE CHAMBRE", link: "/interieur/chambre/" },
                {
                  text: " de 15\u00a0m² avec un lit double de 1m60 / 2m séparable en 2 lits de 80\u00a0cm de large avec accès direct et de plein pied à une terrasse en partie couverte et une autre terrasse pour se prélasser au soleil.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Une table en fer forgé ainsi que des chaises de jardin et 2 chaises longues sont installées pour des moments de détente garanti.",
                },
              ],
            },
            { type: "paragraph", spans: [{ text: "Un BBQ est également à votre disposition." }] },
            {
              type: "paragraph",
              spans: [
                { text: "Dans " },
                { text: "LA PIECE A VIVRE", link: "/interieur/piece-a-vivre/", style: { fontSize: 18 } },
                { text: ", vous disposerez également d'" },
                { text: "UNE CUISINE EQUIPEE", link: "/interieur/piece-a-vivre/", style: { fontSize: 18 } },
                {
                  text: " et d'un joli salon l'ensemble de 32\u00a0m² dans l'esprit du pays avec des pierres apparentes et un poêle à bois pour les soirées d'hiver. Le salon est équipé d'une climatisation réversible.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "La pièce dispose également d'un canapé lit rapido. (tarif en sus si plus de 2 personnes )",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [{ text: "Le gîte dispose de la Fibre optique et de la WIFI mais pas de télévision." }],
            },
            {
              type: "paragraph",
              spans: [
                { text: "La " },
                { text: "SALLE DE BAIN", link: "/interieur/salle-de-bain/", style: { fontSize: 18 } },
                { text: " est uniquement pour les voyageurs avec toilettes séparées." },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "La surface totale du terrain de la propriété à 4\u00a0000\u00a0m², et le jardin côté gîte a une surface de 2\u00a0000\u00a0m² et est bien entretenu.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Je tiens au bien être de mes hôtes et je leur laisse toute autonomie, je suis pour les échanges dans le respect du bien être de chacun, donc je serai à votre écoute si vous en exprimez le besoin.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Je demanderai aux vacanciers de ne pas venir avec nos amis les animaux, ça m'évitera des crises d'asthme au contact des chiens et des chats et également pour une question d'hygiène aussi bien à l'intérieur du gîte que dans la propriété. Merci d'en tenir compte.",
                },
              ],
            },
            { type: "paragraph", spans: [{ text: "Je loue également le gîte uniquement à des non fumeurs." }] },
          ],
        }}
      />

      {/* Navigation links - 3 language columns */}
      <Columns count={3} gap={12}>
        <RichText
          content={{
            blocks: [
              { type: "paragraph", spans: [{ text: "LES LIEUX À VISITER", link: "/a-visiter/" }] },
              { type: "paragraph", spans: [{ text: "COMMENTAIRES REÇUS", link: "/informations/commentaires/" }] },
              { type: "paragraph", spans: [{ text: "TARIFS", link: "/informations/tarifs/" }] },
              { type: "paragraph", spans: [{ text: "CALENDRIER", link: "/informations/calendrier/" }] },
              { type: "paragraph", spans: [{ text: "FORMULAIRE DE CONTACT", link: "/contact/" }] },
              { type: "paragraph", spans: [{ text: "CONTRAT", link: "/informations/contrat/" }] },
              { type: "paragraph", spans: [{ text: "RESTAURATION", link: "/informations/restauration/" }] },
            ],
          }}
        />
        <RichText
          content={{
            blocks: [
              {
                type: "paragraph",
                spans: [{ text: "PLACES TO VISIT", link: "/a-visiter/", style: { color: "rgb(156, 27, 49)" } }],
              },
              {
                type: "paragraph",
                spans: [
                  {
                    text: "COMMENTS RECEIVED",
                    link: "/informations/commentaires/",
                    style: { color: "rgb(156, 27, 49)" },
                  },
                ],
              },
              {
                type: "paragraph",
                spans: [
                  {
                    text: "RATE FOR THE RENTAL",
                    link: "/informations/tarifs/",
                    style: { color: "rgb(156, 27, 49)" },
                  },
                ],
              },
              {
                type: "paragraph",
                spans: [
                  { text: "CALENDAR", link: "/informations/calendrier/", style: { color: "rgb(156, 27, 49)" } },
                ],
              },
              {
                type: "paragraph",
                spans: [{ text: "CONTACT FORM", link: "/contact/", style: { color: "rgb(156, 27, 49)" } }],
              },
              {
                type: "paragraph",
                spans: [{ text: "CONTRACT", link: "/informations/contrat/", style: { color: "rgb(156, 27, 49)" } }],
              },
              {
                type: "paragraph",
                spans: [
                  { text: "RESTAURANT", link: "/informations/restauration/", style: { color: "rgb(156, 27, 49)" } },
                ],
              },
            ],
          }}
        />
        <RichText
          content={{
            blocks: [
              {
                type: "paragraph",
                spans: [{ text: "ORTE ZU BESUCHEN", link: "/a-visiter/", style: { color: "rgb(101, 179, 69)" } }],
              },
              {
                type: "paragraph",
                spans: [
                  {
                    text: "KOMMENTARE ERHALTEN",
                    link: "/informations/commentaires/",
                    style: { color: "rgb(101, 179, 69)" },
                  },
                ],
              },
              {
                type: "paragraph",
                spans: [
                  {
                    text: "PREIS FÜR DIE MIETPREISE",
                    link: "/informations/tarifs/",
                    style: { color: "rgb(101, 179, 69)" },
                  },
                ],
              },
              {
                type: "paragraph",
                spans: [
                  { text: "KALENDER", link: "/informations/calendrier/", style: { color: "rgb(101, 179, 69)" } },
                ],
              },
              {
                type: "paragraph",
                spans: [{ text: "FORMULAR KONTAKT", link: "/contact/", style: { color: "rgb(101, 179, 69)" } }],
              },
              {
                type: "paragraph",
                spans: [{ text: "VERTRAG", link: "/informations/contrat/", style: { color: "rgb(101, 179, 69)" } }],
              },
              {
                type: "paragraph",
                spans: [
                  { text: "RESTAURANT", link: "/informations/restauration/", style: { color: "rgb(101, 179, 69)" } },
                ],
              },
            ],
          }}
        />
      </Columns>

      {/* Image 8 */}
      <Photo src="/assets/i284571214498515291.jpg" width={680} height={495} />

      {/* Pour trouver la maison */}
      <RichText
        content={{
          blocks: [
            {
              type: "paragraph",
              style: { fontSize: 24, bold: true },
              spans: [{ text: "Pour trouver la maison-To find the house-Um das Haus zu finden" }],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [{ text: "L'adresse de la maison est le 617 route de Béthanie," }],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                {
                  text: "À savoir que la numérotation est métrique donc chaque numéro représente la distance, en mètres, le séparant du début de la rue.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [{ text: "La maison est donc à 617 mètres du début de la rue." }],
            },
          ],
        }}
      />

      {/* Google Maps */}
      <GoogleMap src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d444.7182970338744!2d4.032107489728119!3d44.0605804456429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sza!4v1773379472864!5m2!1sen!2sza" />

      {/* Image 9 */}
      <Photo src="/assets/i284571214522180079.jpg" width={680} height={349} />

      {/* Distances to nearby towns */}
      <Columns count={2} gap={48}>
        {[DISTANCES.slice(0, 9), DISTANCES.slice(9)].map((half, index) => (
          <Columns key={index} count={1} gap={14}>
            {half.map(([town, km]) => (
              <Columns key={town} widths={[3, 1]} gap={12} stackOnMobile={false}>
                <RichText content={{ blocks: [{ type: "paragraph", spans: [{ text: town }] }] }} />
                <RichText content={{ blocks: [{ type: "paragraph", style: { align: "right", color: "rgb(85, 85, 85)" }, spans: [{ text: `${km} km` }] }] }} />
              </Columns>
            ))}
          </Columns>
        ))}
      </Columns>

      {/* Image 11: Plan vu du ciel */}
      <Photo src="/assets/i284571214498180473.jpg" width={680} height={461} caption={["Plan vu du ciel", "Plan from the sky", "Planen Sie vom Himmel"]} />

      {/* La situation du Gîte */}
      <RichText
        content={{
          blocks: [
            {
              type: "paragraph",
              style: { fontSize: 18, bold: true },
              spans: [{ text: "La situation du Gîte dans le Gard" }],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Le logement est situé au cœur d'une région touristique des basses Cévennes. Dans un rayon de 20\u00a0km vous pourrez voir des hectares de coteaux de vignes, des vallées encaissées plantées de châtaigniers, ou des collines de garrigues de chênes verts, de cade et de thym. Vous pourrez ",
                },
                { text: "visiter", link: "/a-visiter/", style: { fontSize: 18 } },
                {
                  text: " bon nombre de sites à proximité d'Anduze: les étonnants bambous géants de Générargues, les poteries, le Musée du Désert, haut lieu du protestantisme. Vous pourrez emprunter le Petit Train des Cévennes ou le vélo rail qui vous guidera à travers de merveilleux paysages jusqu'à Saint Jean du Gard et son musée des traditions cévenoles. Au-delà vous serez parfaitement ancrés pour rayonner sur d'autres sites gardois.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { color: "rgb(101, 179, 69)" },
              spans: [
                {
                  text: "Pour visualiser l'intérieur de la maison et quelques exemples de ce que vous pourrez découvrir, choisissez la rubrique désirée dans la barre des menus en haut de l'écran.",
                },
              ],
            },
            { type: "heading", spans: [{ text: "Règlement Intérieur" }] },
            {
              type: "paragraph",
              style: { color: "rgb(226, 30, 40)" },
              spans: [{ text: "- Les soirées et évènements ne sont pas autorisés." }],
            },
            {
              type: "paragraph",
              style: { color: "rgb(226, 30, 40)" },
              spans: [{ text: "- Non fumeurs uniquement." }],
            },
            {
              type: "paragraph",
              style: { color: "rgb(226, 30, 40)" },
              spans: [{ text: "- Nos amis les animaux ne sont pas admis ni dans le gîte, ni dans la propriété." }],
            },
            {
              type: "paragraph",
              style: { color: "rgb(101, 179, 69)" },
              spans: [{ text: "* Adapté aux enfants sous la responsabilité des parents" }],
            },
            {
              type: "paragraph",
              style: { color: "rgb(101, 179, 69)" },
              spans: [{ text: "* Occupants maximum 4" }],
            },
            {
              type: "paragraph",
              style: { color: "rgb(21, 94, 171)" },
              spans: [{ text: "* Nombre de jours de location minimum 5 nuits." }],
            },
            {
              type: "paragraph",
              spans: [
                { text: "* À partir de 30 jours, réduction de ", style: { color: "rgb(21, 94, 171)" } },
                { text: "- 10%", style: { color: "rgb(226, 30, 40)" } },
              ],
            },
          ],
        }}
      />

      {/* Image 14: Sous la neige */}
      <Photo src="/assets/i284571214498528937.jpg" width={680} height={510} caption={["Sous la neige… Spectacle féerique !", "Under the snow… Fairy show !", "Unter dem Schnee… Märchenshow"]} />

      {/* Image 15: Les Muriers en Hiver */}
      <Photo src="/assets/i284571214498540023.jpg" width={680} height={510} caption={["Les Muriers en Hiver", "Mulberries in Winter", "Maulbeeren im Winter."]} />

      {/* Image 16: Coucher de soleil */}
      <Photo src="/assets/i284571214502644149.jpg" width={680} height={510} caption={["Un magnifique coucher de soleil vu du parking", "A beautiful sunset view of the parking", "Ein wunderschöner Sonnenuntergang über dem Parkplatz"]} />
    </Page>
  );
}
