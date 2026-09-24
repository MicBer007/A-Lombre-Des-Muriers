import Sidebar from "../components/Sidebar";
import Photo from "../components/Photo";

export default function Parking() {

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
                              <Photo src="/assets/i284571214522136891.jpg" width={680} height={509} caption={["Pour votre confort le parking est maintenant couvert et un petit abri est là pour votre vélo.", "For your comfort the car park is now covered and a small shelter is there for your bike.", "Für Ihren Komfort ist der Parkplatz jetzt überdacht und ein kleiner Unterstand für Ihr Fahrrad ist vorhanden."]} />
                              <Photo src="/assets/i284571214522136892.jpg" width={680} height={511} caption={["Emplacement parking et terrain de pétanque", "parking space and pétanque court", "Parkplatz und Bouleplatz"]} />
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
