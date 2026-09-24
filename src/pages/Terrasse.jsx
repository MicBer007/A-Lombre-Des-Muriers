import Sidebar from "../components/Sidebar";
import Photo from "../components/Photo";

export default function Terrasse() {

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
                              <Photo src="/assets/terrace-breakfast-2026.jpeg" width={680} height={510} caption={["terrasse pour des petits déjeuners au soleil et en soirée à l'ombre", "outside patio", "Außenterrasse."]} />
                              <Photo src="/assets/covered-terrace-2026-a.jpeg" width={680} height={510} caption={["Terrasse couverte", "Covered patio", "Überdachte Terrasse"]} />
                              <Photo src="/assets/terrace-shaded-entry-2026.jpeg" width={680} height={510} caption="L'après midi." />
                              <Photo src="/assets/i284571214522315927.jpg" width={680} height={510} caption="Le matin" />
                              <Photo src="/assets/i284571214522214522.jpg" width={680} height={510} caption={["La terrasse ouverte pour des petits déjeuners au soleil et en soirée à l'ombre", "outside patio", "Außenterrasse."]} />
                              <Photo src="/assets/i284571214522136847.jpg" width={680} height={712} caption="Pierrade à disposition" />
                              <Photo src="/assets/terrace-view-2026.jpeg" width={680} height={907} />
                              <Photo src="/assets/terrace-covered-side-2026.jpeg" width={680} height={510} />
                              <Photo src="/assets/photo_de_la_terrasse.jpeg" width={680} height={510} alt="Photo de la terrasse" />
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
