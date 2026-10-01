import RichText from "../../components/RichText";
import Page from "../../components/Page";

export default function English() {
  return (
    <Page gap={22} padding="50px 20px 84px">
      <RichText
        content={{
          blocks: [
            {
              type: "heading",
              spans: [
                {
                  text: "There's no place like home, except in the beautiful sunny south of France… come and see for yourself…",
                },
              ],
            },
            { type: "paragraph", spans: [{ text: "DESCRIPTION:" }] },
            { type: "paragraph", spans: [{ text: "The gîte has a private access for visitors." }] },
            {
              type: "paragraph",
              spans: [
                { text: "There is one large " },
                { text: "bedroom", link: "/interieur/chambre/" },
                {
                  text: " (approx. 15\u00a0m²) with a king size plus (160\u00a0cm) bed, which can be transformed into two single beds. There is direct access to the partly covered patio, and a separate sun patio. There is also a wrought iron table and chairs and 2 sun loungers on the patio, for relaxing moments.",
                },
              ],
            },
            { type: "paragraph", spans: [{ text: "A BBQ is at your disposition." }] },
            {
              type: "paragraph",
              spans: [
                { text: "In the open plan " },
                { text: "living/dining room", link: "/interieur/piece-a-vivre/" },
                {
                  text: ", 32\u00a0m², there is an equipped kitchen, in Provencal style, with exposed stones, and a wood burning stove for the cooler moments. The living room has air conditioning for cooling and heating.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "The room also disposes of a clic clac (double bed settee) if there are more than two people in the group (supplement).",
                },
              ],
            },
            { type: "paragraph", spans: [{ text: "The gîte is connected to WIFI, but without TV." }] },
            {
              type: "paragraph",
              spans: [
                { text: "There is a private " },
                { text: "bathroom", link: "/interieur/salle-de-bain/" },
                { text: " with separate w.c." },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "The total outside area is 4,000\u00a0m² and the garden belonging to the gite is 2,000\u00a0m² and well maintained.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "I am extremely particular with regard to the comfort of my guests, and am always ready to listen to their needs and ideas.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "On request, and for an extra charge, I give sewing lessons, including how to decorate fabric with iron-on patches made from Liberty floral fabric.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [{ text: "In the summer, I am also happy to give courses on jigsaw puzzle making." }],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Unfortunately, no animals are accepted in the gîte, or outside, since numerous people can suffer from allergies, even after an animal has left the gîte.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                { text: "There is an open " },
                { text: "parking area", link: "/", style: { color: "rgb(0, 0, 238)" } },
                { text: " beside the house, suitable for one car." },
              ],
            },
            {
              type: "heading",
              spaceBefore: 69,
              spans: [{ text: "Geographical situation of the gîte in the Gard" }],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "The dwelling is situated in the heart of a popular region for tourism in the south of the Cevennes.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "In a radius of 20 km you can see acres of vineyards, valleys abundant with chestnut trees, or hills and paths of scrubland full of green oak, thyme and juniper.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "You can visit a great number of sites in the proximity of Anduze, see the amazing giant bamboos of Générargues, the potteries, the Desert Museum which is dedicated to the history of Protestantism in France. In the heart of a typical hamlet in the Cevennes, the alleyways lead to the birthplace and house of Camisard leader, Roland. Through artifacts and authentic documents, the DESERT MUSEUM brings to life the Huguenot past and the history of the Camisards.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "You can take the little train of Cévennes, which will take you across the wonderful countryside to St Jean du Gard, where you will find the museum of Cevennes.",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "From there, you will be well situated to visit numerous sites in the Gard. Rules of the House - Parties and functions are not permitted. - Smoking is not permitted - Animals are not accepted in the gîte or its grounds - Suitable for children, providing there is parental supervision - Maximum number of guests: 4 - Minimum 5 nights rental - For stays longer than 30 days, 10% reduction",
                },
              ],
            },
            { type: "heading", spaceBefore: 69, spans: [{ text: "Rules of the House" }] },
            { type: "paragraph", spans: [{ text: "Parties and functions are not permitted. -" }] },
            { type: "paragraph", spans: [{ text: "Smoking is not permitted -" }] },
            { type: "paragraph", spans: [{ text: "Animals are not accepted in the gîte or its grounds -" }] },
            {
              type: "paragraph",
              spans: [{ text: "Suitable for children, providing there is parental supervision -" }],
            },
            { type: "paragraph", spans: [{ text: "Maximum number of guests: 4 -" }] },
            {
              type: "paragraph",
              spans: [{ text: "Minimum 5 nights rental - For stays longer than 30 days, 10% reduction" }],
            },
          ],
        }}
      />
    </Page>
  );
}
