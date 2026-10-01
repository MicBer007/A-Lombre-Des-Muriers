import RichText from "../../components/RichText";
import Page from "../../components/Page";

export default function Contrat() {
  return (
    <Page gap={22} padding="50px 20px 84px">
      <RichText
        content={{
          blocks: [
            { type: "heading", spans: [{ text: "Contrat" }] },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                {
                  text: "Entre les soussignés, M., Mme, Mlle (nom, prénom) .........................................................................................................Né(e). le .....................................................................à......................................... demeurant: .................................................................................30140 Bagard Tel: ..........................................désigné(s) ci-après le bailleur",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                {
                  text: "et M., Mme, Mlle (nom, prénom) ............................................................................................................................... Né(e).le.......................................................à......................................demeurant: .......................................................................................................... Tél:........................................ désigné(s) ci-après le locataire",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "Adresse du logement meublé donné en location : 617 Route de Béthanie 30140 Bagard" },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "Type du logement donné en location", style: { underline: true } },
                {
                  text: ": Gîte dans une Maison Salon - salle à manger - Cuisine, 1 chambre à coucher , 1 salle de douche , WC séparé",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [{ text: "État des lieux", style: { underline: true } }, { text: " Se fera à l'arrivée" }],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "Sanitaires", style: { underline: true } },
                { text: ": 1 Lavabo - 1 Lave-linge - 1 Douche - WC séparé." },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "Électroménager", style: { underline: true } },
                {
                  text: ": Réfrigérateur avec partie Congélateur - Nespresso - Plaque cuisson à induction - Four - AirFryer - Sodastream - Aspirateur - Micro onde - Grille-Pain - Fer à repasser - Sèche cheveux.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "Mobilier", style: { underline: true } },
                { text: "---- Dans la chambre : Lit 2 personnes de 160/200 cm ou 2 lits de 1 personne 80/200 " },
                { text: "*", style: { color: "rgb(226, 30, 40)" } },
                { text: "(" },
                { text: "soulignez votre choix", style: { italic: true, fontSize: 16 } },
                { text: ")- Penderie - Guéridon - Bureau - 2 tables de nuits - 2 chaises cannées." },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "Salle à manger salon", style: { underline: true } },
                {
                  text: "---- 4 chaises de salle à manger - Table à 6 pieds - - Un Clic clac - Un canapé 2 places- 1 Armoire louis Philippe - Fauteuil 1 place en bois - Poële à bois - Livres BD - Jeux de société.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "Linge", style: { underline: true } },
                {
                  text: ": Drap(s) Couette serviettes de toilette torchons à vaisselle. Vaisselle Prévue pour 4 personnes l'Inventaire se trouve dans le gîte.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "Réseaux", style: { underline: true } },
                { text: ": Eau froide - Eau chaude - Chauffage par le sol géothermie - WIFI" },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                {
                  text: "Pour L'extérieur: 2 Chaises longues - 1 transat Lafuma - 4 Chaises et une table - 4 petit fauteuils d'extérieur.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                {
                  text: "La présente location étant consentie et acceptée en meublé, un inventaire contradictoire des meubles sera établi lors de la remise des clés au locataire et lors de la restitution de celles-ci. L'inventaire sera annexé au présent contrat. Le preneur sera responsable de toute détérioration ou perte pouvant survenir à ce mobilier.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "Durée de la location", style: { underline: true } },
                {
                  text: " La présente location est consentie et acceptée pour une durée de : ............... nuits qui commencent à courir le : ...................................",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                {
                  text: "Pour la prise de possession des lieux et les formalités d'usage (état des lieux, inventaire, remise des clés, paiement des sommes prévues à cette date), Loyer / charges",
                },
              ],
            },
            {
              type: "paragraph",
              spans: [
                {
                  text: "La présente location est consentie et acceptée moyennant .....................de paiement, charges comprises , Un acompte de 30% sera versé pour la réservation soit :......................... Compte : IBAN:FR76 .................. 219 · BIC: REVOFR2........... avec en Communication: ",
                  style: { fontSize: 18 },
                },
                { text: "le nom de la personne", style: { italic: true } },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "La garantie", style: { underline: true } },
                {
                  text: ": le locataire versera, le jour de l'entrée dans les lieux, la somme de (en toutes lettres): .cent cinquante € (150 € ) Cette somme, non productive d'intérêts, sera restituée dès la preuve faite par le locataire que : - aucun meuble, objet ou linge n'est absent, dégradé ni sali, ou bien, si tel est le cas, sa remise en état ou son remplacement par l'identique est convenu avec le bailleur qui l'a accepté ; - les lieux n'ont subi aucune dégradation et sont remis en état propre (placards, poubelles et réfrigérateurs vides de déchets, sanitaires, appareils électroménagers, vaisselle, etc ...). Si ce cautionnement s'avérait insuffisant, le locataire s'engage d'ores et déjà à en parfaire la somme. La restitution de tout ou partie du dépôt de garantie aura lieu dans les huit jours suivant l'établissement de l'état des lieux de sortie et de la remise des clés en fin de séjour et sera fonction de l'état du logement. Par versement bancaire N° de compte IBAN:...................................................BIC ..........................Ou par restitution du cheque: ...............................................",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "Pour la désinfection Covid", style: { underline: true } },
                {
                  text: " du gîte et en plus du nettoyage complet, il sera demandé 55\u00a0€ en supplément pour la location.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "Échéancier de paiement", style: { underline: true } },
                {
                  text: ": Le jour de l'arrivée, il est versé par le locataire le solde de la somme totale à payer en liquide pour la location donc ................. euros venant en déduction des arrhes.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "Élection de domicile", style: { underline: true } },
                {
                  text: ": Pour l'exécution des présentes et de leur suite, le bailleur fait élection de domicile en sa demeure et le locataire dans les lieux loués.",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                {
                  text: "Fait à.........................., le......................, en....... originaux dont un remis au(x) locataire(s).",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                {
                  text: 'signature plus la mention manuscrite:"Lu et approuvé, bon pour accord"). Le(s) locataire(s).\nLe(s) bailleur(s)',
                },
              ],
            },
            {
              type: "paragraph",
              spaceBefore: 104,
              spans: [
                { text: "OBLIGATIONS DU BAILLEUR", style: { underline: true } },
                {
                  text: " Le bailleur est obligé : a) de délivrer le logement en bon état d'usage et de réparation, ainsi que les équipements mentionnés au présent contrat en bon état de fonctionnement. b) d'assurer au locataire une jouissance paisible et la garantie des vices ou défauts de nature à y faire obstacle. d) de maintenir les locaux en état de servir à l'usage prévu par le contrat en effectuant les réparations autres que locatives.",
                  style: { fontSize: 18 },
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "OBLIGATIONS DU LOCATAIRE", style: { underline: true } },
                {
                  text: " Le locataire est obligé : a) d'user paisiblement des locaux loués en respectant leur destination contractuelle. b) de répondre des dégradations ou des pertes survenues pendant la durée du contrat dans les locaux dont il a la jouissance exclusive, à moins qu'il ne prouve qu'elles ont eu lieu par cas de force majeure, par la faute du bailleur ou par le fait d'un tiers qu'il n'a pas introduit dans le logement. c) de prendre à sa charge l'entretien courant du logement et des équipements, les menues réparations et l'ensemble des réparations incombant au locataire telles que définies par le décret n°87-712 du 26 août 1987, sauf si elles sont occasionnées par vétusté, malfaçon, vice de construction, cas fortuit ou force majeure. d) de ne pas transformer les locaux et équipements loués. e) de s'assurer convenablement contre les risques locatifs, l'incendie,les dégâts des eaux ; et à en justifier lors de la remise des clés",
                },
              ],
            },
            {
              type: "paragraph",
              style: { fontSize: 18 },
              spans: [
                { text: "CLAUSE RÉSOLUTOIRE", style: { underline: true } },
                {
                  text: " Il est expressément convenu qu'à défaut de paiement du dépôt de garantie, la présente location sera résiliée de plein droit.",
                },
              ],
            },
          ],
        }}
      />
    </Page>
  );
}
