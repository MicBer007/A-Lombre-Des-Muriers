import Sidebar from "../../components/Sidebar";
import Photo from "../../components/Photo";

export default function SalleDeBain() {
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
                            <div style={{ display: "flex", flexDirection: "column", gap: 40, padding: "40px 20px" }}>
                              <Photo src="/assets/i284571214498194679.jpg" width={680} height={510} caption="La douche et le lavabo avec accès direct à la chambre." />
                              <Photo src="/assets/i284571214498194708.jpg" width={680} height={907} caption="La douche" />
                              <Photo src="/assets/i284571214498271061.jpg" width={680} height={907} />
                              <Photo src="/assets/i284571214498194760.jpg" width={680} height={455} caption="Salle de bain équipée d'un lave linge." />
                              <Photo src="/assets/i284571214498194767.jpg" width={680} height={510} caption="Lave linge Thomson" />
                              <h2 className="textheading3 mobile-oversized">Toilette séparée</h2>
                              <Photo src="/assets/toilettes-2026.jpeg" width={680} height={907} caption="Toilette séparée" />
                              <Photo src="/assets/toilettes-decoration-2026.jpeg" width={680} height={510} caption="Toilette séparée — la décoration" />
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Etendoir &agrave; linge avec pinces &agrave; linge
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Fer &agrave; repasser et petite table &agrave; repasser (&agrave; poser sur table).
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                S&egrave;che cheveux
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Savon- shampooing&nbsp;
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Ensemble serviettes &eacute;ponges (si location de plus de 5 jours)
                              </p>
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
