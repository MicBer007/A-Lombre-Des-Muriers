import Sidebar from "../../components/Sidebar";

export default function Calendrier() {
  return (
    <div className="Preview_row__3Fkye row Preview_noSideMargin__2I-_n" style={{ width: "100%" }}>
      <div data-kind="SECTION" className="Preview_componentWrapper__2i4QI" style={{ width: "100%" }}>
        <div id="PageSection" className="Preview_block__16Zmu">
          <div className="StripPreview_backgroundComponent__3YmQM Background_backgroundComponent__3_1Ea hasChildren" style={{ backgroundColor: "transparent" }}>
            <div className="Preview_column__1KeVx col" style={{ width: 1200, margin: "0 auto" }}>
              <div className="Preview_row__3Fkye row" style={{ width: 1200 }}>
                <div className="Preview_componentWrapper__2i4QI" style={{ width: 1130, marginLeft: 35 }}>
                  <div className="Preview_block__16Zmu">
                    <div className="BackgroundPreview_backgroundComponent__3Dr5e BackgroundPreview_bgHeight__3dD2e hasChildren" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
                      <div className="Preview_column__1KeVx col">
                        <div className="Preview_row__3Fkye row" style={{ width: 1130 }}>
                          {/* Content column */}
                          <div className="Preview_column__1KeVx col" style={{ width: 870, float: "left" }}>
                            <div style={{ padding: "40px 20px 84px" }}>
                              <div className="Mobile_imageComponent__QXWk1" style={{ overflow: "hidden" }}>
                                <img
                                  loading="lazy"
                                  role="presentation"
                                  style={{ display: "block", margin: 0, width: "100%", height: "auto" }}
                                  src="/assets/calendrier-2026-reservations.png"
                                />
                              </div>
                            </div>
                            <div style={{ clear: "both" }}></div>
                          </div>
                          {/* Sidebar */}
                          <div className="Preview_column__1KeVx col" style={{ width: 220, float: "left", marginLeft: 20 }}>
                            <Sidebar />
                          </div>
                          <div style={{ clear: "both" }}></div>
                        </div>
                        <div style={{ clear: "both" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
