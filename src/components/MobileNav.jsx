import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function MobileNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const toggleMenu = () => setIsOpen((o) => !o);

  const closeMenu = () => setIsOpen(false);

  const toggleExpand = (key) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  const menuItemStyle = {
    backgroundColor: "rgba(223, 223, 223, 1)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    lineHeight: 3,
    fontFamily: "Roboto",
  };

  const activeMenuItemStyle = { ...menuItemStyle, fontWeight: "bold" };

  const nonLinkItemStyle = { ...menuItemStyle, display: "block", padding: "0 10px 0 20px" };
  const activeNonLinkItemStyle = { ...nonLinkItemStyle, fontWeight: "bold" };

  const expandCollapseContainerStyle = {
    backgroundColor: "rgba(223, 223, 223, 1)",
  };

  const arrowDownStyle = { color: "rgba(0, 0, 0, 1)", height: 8, width: 8, marginTop: -4 };
  const arrowUpStyle = { color: "rgba(0, 0, 0, 1)", height: 8, width: 8, marginTop: 4 };

  const ExpandToggle = ({ itemKey }) => (
    <div
      className="MobileHeaderMenu_expandCollapseContainer__1rweD"
      style={expandCollapseContainerStyle}
      role="button"
      tabIndex="0"
      onClick={() => toggleExpand(itemKey)}
      onKeyDown={(e) => e.key === "Enter" && toggleExpand(itemKey)}
    >
      {expanded[itemKey] ? (
        <span className="MobileHeaderMenu_arrowUp__2THXC" style={arrowUpStyle}></span>
      ) : (
        <span className="MobileHeaderMenu_arrowDown__1Dv_Z" style={arrowDownStyle}></span>
      )}
    </div>
  );

  return (
    <div className="mm mm-mobile-nav-react">
      {/* Mobile header bar with burger icon */}
      <header
        id="MobileHeader_container"
        className="MobileHeader_container__1XW3y"
        style={{ backgroundColor: "rgba(223, 223, 223, 1)", position: "relative", zIndex: 10010, overflow: "hidden", WebkitTapHighlightColor: "transparent" }}
        data-testid="mobile-header"
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <img src="/assets/i284571214503930606.jpg" alt="Logo" style={{ height: 36, maxHeight: 36, width: "auto", display: "block" }} />
          <span style={{ fontFamily: "Roboto", fontSize: 18, fontWeight: 500, color: "rgb(71, 71, 71)" }}>
            A l'ombre des Muriers
          </span>
        </div>
        <div
          className={`MobileHeader_menuIconContainer__lc-Zq ${isOpen ? "on" : "off"}`}
          id="MobileHeader_burgerMenuIcon"
          aria-label="Basculer le menu"
          role="button"
          tabIndex="0"
          aria-expanded={isOpen}
          onClick={toggleMenu}
          onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
          style={{ cursor: "pointer", position: "relative", zIndex: 10011 }}
        >
          <span style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}></span>
          <span style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}></span>
          <span style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}></span>
        </div>
      </header>

      {/* Slide-in menu panel */}
      <div
        id="mm"
        className={`MobileHeaderMenu_mobileMenu__21p7v ${isOpen ? "on" : "off"}`}
        style={{ backgroundColor: "rgba(223, 223, 223, 1)", WebkitTapHighlightColor: "transparent" }}
        aria-hidden={!isOpen}
      >
        <ul>
          {/* Accueil */}
          <li className={expanded["accueil"] ? "expanded" : undefined}>
            <div className="MobileHeaderMenu_expandCollapseItem__2WnRW">
              <Link to="/" style={isActive("/") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>
                Accueil
              </Link>
              <ExpandToggle itemKey="accueil" />
            </div>
            <ul>
              <li><Link to="/terrasse" style={isActive("/terrasse") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Terrasse</Link></li>
              <li><Link to="/jardin" style={isActive("/jardin") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Jardin</Link></li>
              <li><Link to="/parking" style={isActive("/parking") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Emplacement parking</Link></li>
              <li><Link to="/photos-region" style={isActive("/photos-region") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Photos de la région</Link></li>
            </ul>
          </li>

          {/* Intérieur */}
          <li className={expanded["interieur"] ? "expanded" : undefined}>
            <div className="MobileHeaderMenu_expandCollapseItem__2WnRW">
              <span style={isActive("/interieur") ? { ...activeNonLinkItemStyle, cursor: "pointer" } : { ...nonLinkItemStyle, cursor: "pointer" }} onClick={() => toggleExpand("interieur")}>
                Intérieur du gîte
              </span>
              <ExpandToggle itemKey="interieur" />
            </div>
            <ul>
              <li><Link to="/interieur/piece-a-vivre" style={isActive("/interieur/piece-a-vivre") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Pièce à vivre</Link></li>
              <li><Link to="/interieur/chambre" style={isActive("/interieur/chambre") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Chambre</Link></li>
              <li><Link to="/interieur/salle-de-bain" style={isActive("/interieur/salle-de-bain") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Salle de bain</Link></li>
            </ul>
          </li>

          {/* Informations */}
          <li className={expanded["informations"] ? "expanded" : undefined}>
            <div className="MobileHeaderMenu_expandCollapseItem__2WnRW">
              <span style={isActive("/informations") ? { ...activeNonLinkItemStyle, cursor: "pointer" } : { ...nonLinkItemStyle, cursor: "pointer" }} onClick={() => toggleExpand("informations")}>
                Informations utiles
              </span>
              <ExpandToggle itemKey="informations" />
            </div>
            <ul>
              <li><Link to="/informations/calendrier" style={isActive("/informations/calendrier") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Calendrier</Link></li>
              <li><Link to="/informations/tarifs" style={isActive("/informations/tarifs") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Tarifs</Link></li>
              <li><Link to="/informations/contrat" style={isActive("/informations/contrat") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Contrat</Link></li>
              <li><Link to="/informations/commentaires" style={isActive("/informations/commentaires") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Commentaires</Link></li>
              <li><Link to="/informations/producteurs" style={isActive("/informations/producteurs") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Producteurs</Link></li>
            </ul>
          </li>

          {/* A visiter */}
          <li>
            <Link to="/a-visiter" style={isActive("/a-visiter") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>
              A visiter
            </Link>
          </li>

          {/* Traductions */}
          <li className={expanded["traductions"] ? "expanded" : undefined}>
            <div className="MobileHeaderMenu_expandCollapseItem__2WnRW">
              <span style={isActive("/traductions") ? { ...activeNonLinkItemStyle, cursor: "pointer" } : { ...nonLinkItemStyle, cursor: "pointer" }} onClick={() => toggleExpand("traductions")}>
                Traductions
              </span>
              <ExpandToggle itemKey="traductions" />
            </div>
            <ul>
              <li><Link to="/traductions/english" style={isActive("/traductions/english") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>In English</Link></li>
              <li><Link to="/traductions/deutsch" style={isActive("/traductions/deutsch") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>Auf Deutsch</Link></li>
            </ul>
          </li>

          {/* Contact */}
          <li>
            <Link to="/contact" style={isActive("/contact") ? activeMenuItemStyle : menuItemStyle} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay to close menu when tapping outside */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10004,
          }}
          onClick={closeMenu}
        />
      )}
    </div>
  );
}
