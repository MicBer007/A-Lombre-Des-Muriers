import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { loadCalendarReservations } from "../lib/calendar";
import MobileNav from "../components/MobileNav";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import { LightboxProvider } from "../components/Lightbox";

export default function BaseLayout() {
  useEffect(() => {
    if (document.readyState === "complete") loadCalendarReservations();
    else window.addEventListener("load", loadCalendarReservations, { once: true });
    return () => window.removeEventListener("load", loadCalendarReservations);
  }, []);

  return (
    <div className="Preview_body__2wDzb bodyBackground desktopV effects">
      <div>
        <MobileNav />
      </div>
      <div className="template" data-mobile-view="true" style={{ visibility: "visible" }}>
        <div className="Preview_row__3Fkye row Preview_noSideMargin__2I-_n" style={{ minHeight: 197, width: "100%" }} id="shared-header-nav">
          <HeaderNav />
        </div>
        {/* Page content */}
        <LightboxProvider>
          <Outlet />
        </LightboxProvider>
        <Footer />
      </div>
    </div>
  );
}
