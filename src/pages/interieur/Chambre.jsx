import Sidebar from "../../components/Sidebar";
import { useLightbox } from "../../components/Lightbox";

export default function Chambre() {
  const { openLightbox, LightboxModal } = useLightbox();
  const images = [];

  images.push({ src: "/assets/i284571214498194393.jpg", alt: "Lit double de 160 / 200" });
  images.push({ src: "/assets/i284571214498194449.jpg", alt: "Ou 2 lits simples de 80 / 200" });
  images.push({ src: "/assets/i284571214498194478.jpg", alt: "Literie de qualit\u00e9." });
  images.push({ src: "/assets/i284571214498194569.jpg", alt: "" });
  images.push({ src: "/assets/i284571214498194590.jpg", alt: "Petite table bureau dans la chambre" });

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
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Pour toutes r&eacute;servations &agrave; partir d'une semaine ou plus, les draps seront compris dans la location.
                              </p>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214498194393.jpg" width={680} height={510} alt="Lit double de 160 / 200" title="Lit double de 160 / 200" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 0)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Lit double de 160 / 200
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214498194449.jpg" width={680} height={510} alt="Ou 2 lits simples de 80 / 200" title="Ou 2 lits simples de 80 / 200" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 1)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Ou 2 lits simples de 80 / 200
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214498194478.jpg" width={680} height={510} alt="Literie de qualit&eacute;." title="Literie de qualit&eacute;." style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 2)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Literie de qualit&eacute;.
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214498194569.jpg" width={680} height={508} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 3)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214498194590.jpg" width={680} height={510} alt="Petite table bureau dans la chambre" title="Petite table bureau dans la chambre" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 4)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Petite table bureau dans la chambre
                                </p>
                              </div>
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
      {LightboxModal}
    </div>
  );
}
