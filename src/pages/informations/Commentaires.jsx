import Sidebar from "../../components/Sidebar";
import Photo from "../../components/Photo";

export default function Commentaires() {

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
                            <div style={{ display: "flex", flexDirection: "column", gap: 60, padding: "40px 20px 84px" }}>
                              <Photo src="/assets/i284571214506718529.jpg" width={680} height={754} />
                              <Photo src="/assets/i284571214522386436.jpg" width={680} height={246} />
                              <Photo src="/assets/i284571214522386443.jpg" width={680} height={216} />
                              <Photo src="/assets/i284571214522386400.jpg" width={680} height={191} />
                              <Photo src="/assets/i284571214522386390.jpg" width={680} height={391} />
                              <Photo src="/assets/i284571214503925878.jpg" width={680} height={228} />
                              <Photo src="/assets/i284571214503926045.jpg" width={680} height={295} />
                              <Photo src="/assets/i284571214503924426.jpg" width={680} height={460} />
                              <Photo src="/assets/i284571214503925204.jpg" width={680} height={396} />
                              <Photo src="/assets/i284571214503925672.jpg" width={680} height={512} />
                              <Photo src="/assets/i284571214503925781.jpg" width={680} height={582} />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
