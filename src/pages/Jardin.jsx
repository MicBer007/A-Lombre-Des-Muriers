import Sidebar from "../components/Sidebar";
import Photo from "../components/Photo";

export default function Jardin() {

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
                              <Photo src="/assets/i284571214522329899.jpg" width={680} height={510} />
                              <Photo src="/assets/i284571214522315913.jpg" width={680} height={907} />
                              <Photo src="/assets/i284571214522136776.jpg" width={680} height={513} caption={["La charrette à l'ombre des muriers", "The barrow under the Mulberry tree", "Der Karren im Schatten der Maulbeerbaum"]} />
                              <Photo src="/assets/i284571214522315918.jpg" width={680} height={510} />
                              <Photo src="/assets/garden-access-path-2026.jpg" width={680} height={510} caption={["Le chemin d'accès.", "Entrance", "Eingang"]} />
                              <Photo src="/assets/i284571214522136710.jpg" width={680} height={506} />
                              <Photo src="/assets/i284571214522136712.jpg" width={680} height={513} caption={["Jardin côté gîte", "Garden", "Gartenhaus"]} />
                              <Photo src="/assets/garden-view-2026.jpeg" width={680} height={510} />
                              <Photo src="/assets/i284571214522613580.jpg" width={680} height={907} />
                              <Photo src="/assets/capture-decran-2025-09-29-17-59-13.png" width={680} height={664} caption={["Le terrain de pétanque 4m/10m", "Pétanque court", "Bouleplatz"]} />
                              <Photo src="/assets/spa-bioclimatique-2026.jpeg" width={680} height={510} alt="Le spa sous sa couverture bioclimatique" />
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Entre le 1er mai et le 15 septembre, Spa de nage extérieur avec contre courant à partager avec la propriétaire. Une couverture bioclimatique permet d’en profiter par tous les temps.
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
