import { useAccountModal } from "./AccountModal";
import { useAdminSession } from "./AdminSession";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION } from "./navigation";

export default function MobileNav() {
  const location = useLocation();

  const openAccount = useAccountModal();
  const { session } = useAdminSession();
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const toggleMenu = () => setIsOpen((o) => !o);

  const closeMenu = () => setIsOpen(false);

  const toggleExpand = (label) =>
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));

  const menuLink = (item) => (
    <Link to={item.to} className={isActive(item.to) ? "active" : undefined} onClick={closeMenu}>
      {item.label}
    </Link>
  );

  return (
    <div className="mobile-nav">
      <header className="mobile-header">
        <div className="mobile-brand">
          <img src="/assets/gite-profile-2026.webp" alt="Le gîte à l'ombre des mûriers" />
          <span>A l'ombre des Muriers</span>
        </div>
        <button
          type="button"
          className={`mobile-burger${isOpen ? " open" : ""}`}
          aria-label="Basculer le menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`mobile-menu ${isOpen ? "on" : "off"}`} aria-hidden={!isOpen}>
        <ul>
          {NAVIGATION.map((item) =>
            item.children ? (
              <li key={item.label} className={expanded[item.label] ? "expanded" : undefined}>
                <div className="mobile-menu-row">
                  {item.to ? (
                    menuLink(item)
                  ) : (
                    <span className={item.children.some((child) => isActive(child.to)) ? "active" : undefined} onClick={() => toggleExpand(item.label)}>
                      {item.label}
                    </span>
                  )}
                  <button type="button" className="mobile-menu-toggle" onClick={() => toggleExpand(item.label)}>
                    <span className={expanded[item.label] ? "arrow-up" : "arrow-down"}></span>
                  </button>
                </div>
                <ul>
                  {item.children.map((child) => (
                    <li key={child.to}>{menuLink(child)}</li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>{menuLink(item)}</li>
            )
          )}
          <li>
            <button type="button" onClick={() => { closeMenu(); openAccount(); }}>
              {session ? "Mon compte" : "Se connecter"}
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay to close menu when tapping outside */}
      {isOpen && <div className="mobile-menu-overlay" onClick={closeMenu} />}
    </div>
  );
}
