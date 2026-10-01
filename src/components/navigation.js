/**
 * The site navigation, shared by the desktop and mobile menus.
 * An item without `to` only opens its sub-menu.
 *
 * @typedef {{ label: string, to?: string, children?: NavItem[] }} NavItem
 * @type {NavItem[]}
 */
export const NAVIGATION = [
  {
    label: "Accueil",
    to: "/",
    children: [
      { label: "Terrasse", to: "/terrasse" },
      { label: "Jardin", to: "/jardin" },
      { label: "Emplacement parking", to: "/parking" },
      { label: "Photos de la région", to: "/photos-region" },
    ],
  },
  {
    label: "Intérieur du gîte",
    children: [
      { label: "Pièce à vivre", to: "/interieur/piece-a-vivre" },
      { label: "Chambre", to: "/interieur/chambre" },
      { label: "Salle de bain", to: "/interieur/salle-de-bain" },
    ],
  },
  {
    label: "Informations utiles",
    children: [
      { label: "Calendrier", to: "/informations/calendrier" },
      { label: "Tarifs", to: "/informations/tarifs" },
      { label: "Contrat", to: "/informations/contrat" },
      { label: "Commentaires", to: "/informations/commentaires" },
      { label: "Restauration", to: "/informations/restauration" },
    ],
  },
  { label: "À visiter", to: "/a-visiter" },
  {
    label: "Traductions",
    children: [
      { label: "In English", to: "/traductions/english" },
      { label: "Auf Deutsch", to: "/traductions/deutsch" },
    ],
  },
  { label: "Contact", to: "/contact" },
];
