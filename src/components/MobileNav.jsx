import { Link, useLocation } from "react-router-dom";

export default function MobileNav() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const menuItemStyle = {
    backgroundColor: "rgba(223, 223, 223, 1)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    lineHeight: 3,
    fontFamily: "Roboto",
  };

  const activeMenuItemStyle = {
    ...menuItemStyle,
    fontWeight: "bold",
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

  const hasActiveChild = (paths) => paths.some((p) => isActive(p));

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
            <li className={hasActiveChild(["/", "/terrasse", "/jardin", "/parking", "/photos-region"]) && !isActive("/") ? "expanded" : undefined}>
              <div className="MobileHeaderMenu_expandCollapseItem__2WnRW">
                <Link
                  to="/"
                  style={isActive("/") ? activeMenuItemStyle : menuItemStyle}
                  title="Accueil"
                  className={isActive("/") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                >
                  Accueil
                </Link>
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
                  <Link
                    to="/terrasse"
                    style={isActive("/terrasse") ? activeMenuItemStyle : menuItemStyle}
                    title="Terrasse"
                    className={isActive("/terrasse") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Terrasse
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jardin"
                    style={isActive("/jardin") ? activeMenuItemStyle : menuItemStyle}
                    title="Jardin"
                    className={isActive("/jardin") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Jardin
                  </Link>
                </li>
                <li>
                  <Link
                    to="/parking"
                    style={isActive("/parking") ? activeMenuItemStyle : menuItemStyle}
                    title="Emplacement parking"
                    className={isActive("/parking") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Emplacement parking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/photos-region"
                    style={isActive("/photos-region") ? activeMenuItemStyle : menuItemStyle}
                    title="Photos de la région"
                    className={isActive("/photos-region") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Photos de la région
                  </Link>
                </li>
              </ul>
            </li>
            <li className={hasActiveChild(["/interieur/piece-a-vivre", "/interieur/chambre", "/interieur/salle-de-bain"]) ? "expanded" : undefined}>
              <div className="MobileHeaderMenu_expandCollapseItem__2WnRW">
                <Link
                  to="/interieur"
                  style={isActive("/interieur") ? activeMenuItemStyle : menuItemStyle}
                  title="Intérieur du gîte"
                  className={isActive("/interieur") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                >
                  Intérieur du gîte
                </Link>
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
                  <Link
                    to="/interieur/piece-a-vivre"
                    style={isActive("/interieur/piece-a-vivre") ? activeMenuItemStyle : menuItemStyle}
                    title="Pièce à vivre"
                    className={isActive("/interieur/piece-a-vivre") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Pièce à vivre
                  </Link>
                </li>
                <li>
                  <Link
                    to="/interieur/chambre"
                    style={isActive("/interieur/chambre") ? activeMenuItemStyle : menuItemStyle}
                    title="Chambre"
                    className={isActive("/interieur/chambre") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Chambre
                  </Link>
                </li>
                <li>
                  <Link
                    to="/interieur/salle-de-bain"
                    style={isActive("/interieur/salle-de-bain") ? activeMenuItemStyle : menuItemStyle}
                    title="Salle de bain"
                    className={isActive("/interieur/salle-de-bain") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Salle de bain
                  </Link>
                </li>
              </ul>
            </li>
            <li className={hasActiveChild(["/informations/calendrier", "/informations/tarifs", "/informations/contrat", "/informations/commentaires", "/informations/producteurs"]) ? "expanded" : undefined}>
              <div className="MobileHeaderMenu_expandCollapseItem__2WnRW">
                <Link
                  to="/informations"
                  style={isActive("/informations") ? activeMenuItemStyle : menuItemStyle}
                  title="Informations utiles"
                  className={isActive("/informations") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                >
                  Informations utiles
                </Link>
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
                  <Link
                    to="/informations/calendrier"
                    style={isActive("/informations/calendrier") ? activeMenuItemStyle : menuItemStyle}
                    title="Calendrier"
                    className={isActive("/informations/calendrier") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Calendrier
                  </Link>
                </li>
                <li>
                  <Link
                    to="/informations/tarifs"
                    style={isActive("/informations/tarifs") ? activeMenuItemStyle : menuItemStyle}
                    title="Tarifs"
                    className={isActive("/informations/tarifs") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/informations/contrat"
                    style={isActive("/informations/contrat") ? activeMenuItemStyle : menuItemStyle}
                    title="Contrat"
                    className={isActive("/informations/contrat") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Contrat
                  </Link>
                </li>
                <li>
                  <Link
                    to="/informations/commentaires"
                    style={isActive("/informations/commentaires") ? activeMenuItemStyle : menuItemStyle}
                    title="Commentaires"
                    className={isActive("/informations/commentaires") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Commentaires
                  </Link>
                </li>
                <li>
                  <Link
                    to="/informations/producteurs"
                    style={isActive("/informations/producteurs") ? activeMenuItemStyle : menuItemStyle}
                    title="Producteurs "
                    className={isActive("/informations/producteurs") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Producteurs
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/a-visiter"
                style={isActive("/a-visiter") ? activeMenuItemStyle : menuItemStyle}
                title="A visiter"
                className={isActive("/a-visiter") ? "MobileHeaderMenu_current__2Nelz" : undefined}
              >
                A visiter
              </Link>
            </li>
            <li className={hasActiveChild(["/traductions/english", "/traductions/deutsch"]) ? "expanded" : undefined}>
              <div className="MobileHeaderMenu_expandCollapseItem__2WnRW">
                <Link
                  to="/traductions"
                  style={isActive("/traductions") ? activeMenuItemStyle : menuItemStyle}
                  title="Traductions"
                  className={isActive("/traductions") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                >
                  Traductions
                </Link>
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
                  <Link
                    to="/traductions/english"
                    style={isActive("/traductions/english") ? activeMenuItemStyle : menuItemStyle}
                    title="In English"
                    className={isActive("/traductions/english") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    In English
                  </Link>
                </li>
                <li>
                  <Link
                    to="/traductions/deutsch"
                    style={isActive("/traductions/deutsch") ? activeMenuItemStyle : menuItemStyle}
                    title="Auf Deutsch"
                    className={isActive("/traductions/deutsch") ? "MobileHeaderMenu_current__2Nelz" : undefined}
                  >
                    Auf Deutsch
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/contact"
                style={isActive("/contact") ? activeMenuItemStyle : menuItemStyle}
                title="Contact"
                className={isActive("/contact") ? "MobileHeaderMenu_current__2Nelz" : undefined}
              >
                Contact
              </Link>
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
