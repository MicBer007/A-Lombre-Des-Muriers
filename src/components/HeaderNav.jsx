import { AccountButton } from "./AccountModal";
import { Link } from "react-router-dom";
import { NAVIGATION } from "./navigation";

export default function HeaderNav() {
  return (
    <header className="site-header">
      <div className="site-brand">
        <Link to="/" className="site-logo">
          <img src="/assets/gite-profile-2026.webp" width="91" height="84" alt="Le gîte à l'ombre des mûriers" />
        </Link>
        <div className="site-title">
          <Link to="/">A l'ombre des Muriers</Link>
          <p>Gîte situé dans le Gard à quelques kilomètres d'Anduze</p>
        </div>
      </div>
      <nav className="site-nav">
        <ul>
          {NAVIGATION.map((item) => (
            <li key={item.label}>
              {item.to ? (
                <Link className={item.children ? "expandable" : undefined} to={item.to} aria-haspopup={item.children ? "true" : undefined}>
                  <span>{item.label}</span>
                </Link>
              ) : (
                <button type="button" className="expandable" aria-haspopup="true">
                  <span>{item.label}</span>
                </button>
              )}
              {item.children && (
                <ul>
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <Link to={child.to}><span>{child.label}</span></Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="nav-account"><AccountButton /></li>
        </ul>
      </nav>
    </header>
  );
}
