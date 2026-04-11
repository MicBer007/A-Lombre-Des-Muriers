import { Outlet } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

export default function BaseLayout() {
  return (
    <div className="Preview_body__2wDzb bodyBackground desktopV effects">
      <div>
        <MobileNav />
      </div>
      <div className="template" data-mobile-view="true" style={{ visibility: "visible" }}>
        <div className="Preview_row__3Fkye row Preview_noSideMargin__2I-_n" style={{ minHeight: 197, width: "100%" }} id="shared-header-nav">
          <HeaderNav />
        </div>
        {/* Page content (includes sidebar within each page's two-column layout) */}
        <Outlet />
        <div className="Preview_row__3Fkye row Preview_noSideMargin__2I-_n" style={{ width: "100%" }} id="shared-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
