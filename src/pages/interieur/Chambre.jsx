import Sidebar from "../../components/Sidebar";
import Photo from "../../components/Photo";

export default function Chambre() {

  return (
    <div className="Preview_row__3Fkye row Preview_noSideMargin__2I-_n" style={{ width: "100%" }}>
      <div data-kind="SECTION" className="Preview_componentWrapper__2i4QI" style={{ width: "100%" }}>
        <div id="PageSection" className="Preview_block__16Zmu">
          <div className="StripPreview_backgroundComponent__3YmQM Background_backgroundComponent__3_1Ea hasChildren" style={{ backgroundColor: "transparent" }}>
            <div className="Preview_column__1KeVx col" style={{ width: 1200, margin: "0 auto" }}>
              <div className="Preview_row__3Fkye row" style={{ width: 1200 }}>
                <div className="Preview_componentWrapper__2i4QI" style={{ width: 1130, marginLeft: 35 }}>
                  <div className="Preview_block__16Zmu">
                    <div className="BackgroundPreview_backgroundComponent__3Dr5e BackgroundPreview_bgHeight__3dD2e hasChildren" style={{ backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: 0 }}>
                      <div className="Preview_column__1KeVx col">
                        <div className="Preview_row__3Fkye row" style={{ width: 1130 }}>
                          <div className="Preview_column__1KeVx col" style={{ width: 870, float: "left" }}>
                            <div className="page-content" style={{ "--page-gap": "40px", padding: "40px 20px" }}>
                              <p className="textnormal" style={{ textAlign: "left" }}>
                                Pour toutes r&eacute;servations &agrave; partir d'une semaine ou plus, les draps seront compris dans la location.
                              </p>
                              <Photo src="/assets/i284571214498194393.jpg" width={680} height={510} caption="Lit double de 160 / 200" />
                              <Photo src="/assets/i284571214498194449.jpg" width={680} height={510} caption="Ou 2 lits simples de 80 / 200" />
                              <Photo src="/assets/i284571214498194478.jpg" width={680} height={510} caption="Literie de qualité." />
                              <Photo src="/assets/baby-bed-2026.jpg" width={680} height={510} caption="Lit de Bébé à disposition." />
                              <Photo src="/assets/i284571214498194590.jpg" width={680} height={510} caption="Petite table bureau dans la chambre" />
                            </div>
                            <div style={{ clear: "both" }}></div>
                          </div>
                          <div className="Preview_column__1KeVx col" style={{ width: 220, float: "left" }}>
                            <Sidebar />
                          </div>
                          <div style={{ clear: "both" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
