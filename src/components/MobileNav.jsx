export default function MobileNav() {
  const menuItemStyle = {
    backgroundColor: "rgba(223, 223, 223, 1)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    lineHeight: 3,
    fontFamily: "Roboto",
  };

  const expandCollapseContainerStyle = {
    backgroundColor: "rgba(223, 223, 223, 1)",
  };

  const arrowDownStyle = {
    color: "rgba(0, 0, 0, 1)",
    height: 8,
    width: 8,
    marginTop: -4,
  };

  const arrowUpStyle = {
    color: "rgba(0, 0, 0, 1)",
    height: 8,
    width: 8,
    marginTop: 4,
  };

  return (
    <div>
      <div data-mobile-pin="1" id="wsb-mobile-header" className="mm mm-mobile-preview">
        <header
          id="MobileHeader_container"
          className="MobileHeader_container__1XW3y"
          style={{ backgroundColor: "rgba(223, 223, 223, 1)" }}
          data-testid="mobile-header"
        >
          <div className="MobileHeader_dummyMenuIconContainer__3mfi4"></div>
        </header>
        <div
          className="MobileHeader_menuIconContainer__lc-Zq off"
          id="MobileHeader_burgerMenuIcon"
          data-active-bgcolor="rgba(0,0,0,1)"
          data-inactive-bgcolor="rgba(0,0,0,1)"
          aria-label="Basculer le menu"
          role="button"
          tabIndex="0"
          aria-controls="mm"
          aria-expanded="false"
        >
          <span style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}></span>
          <span style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}></span>
          <span style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}></span>
        </div>
        <div
          id="mm"
          className="MobileHeaderMenu_mobileMenu__21p7v"
          style={{ backgroundColor: "rgba(223, 223, 223, 1)" }}
          aria-hidden="true"
          inert=""
        >
          <ul>
            <li>
              <div className="MobileHeaderMenu_expandCollapseItem__2WnRW">
                <a
                  href="/"
                  style={menuItemStyle}
                  title="Accueil"
                >
                  Accueil
                </a>
                <div
                  className="MobileHeaderMenu_expandCollapseContainer__1rweD"
                  style={expandCollapseContainerStyle}
                  role="button"
                  tabIndex="0"
                >
                  <span
                    className="MobileHeaderMenu_arrowDown__1Dv_Z"
                    style={arrowDownStyle}
                  ></span>
                  <span
                    className="MobileHeaderMenu_arrowUp__2THXC"
                    style={arrowUpStyle}
                  ></span>
                </div>
              </div>
              <ul>
                <li>
                  <a
                    href="/terrasse/"
                    style={menuItemStyle}
                    title="Terrasse"
                  >
                    Terrasse
                  </a>
                </li>
                <li>
                  <a
                    href="/jardin/"
                    style={menuItemStyle}
                    title="Jardin"
                  >
                    Jardin
                  </a>
                </li>
                <li>
                  <a
                    href="/parking/"
                    style={menuItemStyle}
                    title="Emplacement parking"
                  >
                    Emplacement parking
                  </a>
                </li>
                <li>
                  <a
                    href="/photos-region/"
                    style={menuItemStyle}
                    title="Photos de la région"
                  >
                    Photos de la région
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div className="MobileHeaderMenu_expandCollapseItem__2WnRW">
                <a
                  href="/interieur/"
                  style={menuItemStyle}
                  title="Intérieur du gîte"
                >
                  Intérieur du gîte
                </a>
                <div
                  className="MobileHeaderMenu_expandCollapseContainer__1rweD"
                  style={expandCollapseContainerStyle}
                  role="button"
                  tabIndex="0"
                >
                  <span
                    className="MobileHeaderMenu_arrowDown__1Dv_Z"
                    style={arrowDownStyle}
                  ></span>
                  <span
                    className="MobileHeaderMenu_arrowUp__2THXC"
                    style={arrowUpStyle}
                  ></span>
                </div>
              </div>
              <ul>
                <li>
                  <a
                    href="/interieur/piece-a-vivre/"
                    style={menuItemStyle}
                    title="Pièce à vivre"
                  >
                    Pièce à vivre
                  </a>
                </li>
                <li>
                  <a
                    href="/interieur/chambre/"
                    style={menuItemStyle}
                    title="Chambre"
                  >
                    Chambre
                  </a>
                </li>
                <li>
                  <a
                    href="/interieur/salle-de-bain/"
                    style={menuItemStyle}
                    title="Salle de bain"
                  >
                    Salle de bain
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div className="MobileHeaderMenu_expandCollapseItem__2WnRW">
                <a
                  href="/informations/"
                  style={menuItemStyle}
                  title="Informations utiles"
                >
                  Informations utiles
                </a>
                <div
                  className="MobileHeaderMenu_expandCollapseContainer__1rweD"
                  style={expandCollapseContainerStyle}
                  role="button"
                  tabIndex="0"
                >
                  <span
                    className="MobileHeaderMenu_arrowDown__1Dv_Z"
                    style={arrowDownStyle}
                  ></span>
                  <span
                    className="MobileHeaderMenu_arrowUp__2THXC"
                    style={arrowUpStyle}
                  ></span>
                </div>
              </div>
              <ul>
                <li>
                  <a
                    href="/informations/calendrier/"
                    style={menuItemStyle}
                    title="Calendrier"
                  >
                    Calendrier
                  </a>
                </li>
                <li>
                  <a
                    href="/informations/tarifs/"
                    style={menuItemStyle}
                    title="Tarifs"
                  >
                    Tarifs
                  </a>
                </li>
                <li>
                  <a
                    href="/informations/contrat/"
                    style={menuItemStyle}
                    title="Contrat"
                  >
                    Contrat
                  </a>
                </li>
                <li>
                  <a
                    href="/informations/commentaires/"
                    style={menuItemStyle}
                    title="Commentaires"
                  >
                    Commentaires
                  </a>
                </li>
                <li>
                  <a
                    href="/informations/producteurs/"
                    style={menuItemStyle}
                    title="Producteurs "
                  >
                    Producteurs
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/a-visiter/"
                style={menuItemStyle}
                title="A visiter"
              >
                A visiter
              </a>
            </li>
            <li>
              <div className="MobileHeaderMenu_expandCollapseItem__2WnRW">
                <a
                  href="/traductions/"
                  style={menuItemStyle}
                  title="Traductions"
                >
                  Traductions
                </a>
                <div
                  className="MobileHeaderMenu_expandCollapseContainer__1rweD"
                  style={expandCollapseContainerStyle}
                  role="button"
                  tabIndex="0"
                >
                  <span
                    className="MobileHeaderMenu_arrowDown__1Dv_Z"
                    style={arrowDownStyle}
                  ></span>
                  <span
                    className="MobileHeaderMenu_arrowUp__2THXC"
                    style={arrowUpStyle}
                  ></span>
                </div>
              </div>
              <ul>
                <li>
                  <a
                    href="/traductions/english/"
                    style={menuItemStyle}
                    title="In English"
                  >
                    In English
                  </a>
                </li>
                <li>
                  <a
                    href="/traductions/deutsch/"
                    style={menuItemStyle}
                    title="Auf Deutsch"
                  >
                    Auf Deutsch
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/contact/"
                style={menuItemStyle}
                title="Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          id="mm-overlay"
          className="MobileHeaderMenu_mobileMenu_overlay__3WPnz"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}
