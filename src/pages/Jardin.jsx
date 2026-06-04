import Sidebar from "../components/Sidebar";
import { useLightbox } from "../components/Lightbox";

export default function Jardin() {
  const { openLightbox, LightboxModal } = useLightbox();
  const images = [];
  images.push({ src: "/assets/i284571214522329899.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522315913.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522136776.jpg", alt: "La charrette à l'ombre des muriers---The barrow under the Mulberry tree---Der Karren im Schatten der Maulbeerbaum" });
  images.push({ src: "/assets/i284571214522315918.jpg", alt: "" });
  images.push({ src: "/assets/garden-access-path-2026.avif", alt: "Le chemin d'accès.----- Entrance ------ Eingang" });
  images.push({ src: "/assets/i284571214522136710.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522136712.jpg", alt: "Jardin côté gîte ---Garden ---- Gartenhaus" });
  images.push({ src: "/assets/garden-view-2026.jpeg", alt: "" });
  images.push({ src: "/assets/i284571214522613580.jpg", alt: "" });
  images.push({ src: "/assets/capture-decran-2025-09-29-17-59-13.png", alt: "Le terrain de pétanque 4m/10m --- Pétanque court --- Bouleplatz" });
  images.push({ src: "/assets/capture-decran-2023-04-08-18-59-01.png", alt: "" });

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
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522329899.jpg" width={680} height={510} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 0)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522315913.jpg" width={680} height={907} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 1)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522136776.jpg" width={680} height={513} alt="La charrette à l'ombre des muriers---The barrow under the Mulberry tree---Der Karren im Schatten der Maulbeerbaum" title="La charrette à l'ombre des muriers---The barrow under the Mulberry tree---Der Karren im Schatten der Maulbeerbaum" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 2)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  La charrette à l'ombre des muriers---The barrow under the Mulberry tree---Der Karren im Schatten der Maulbeerbaum
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522315918.jpg" width={680} height={510} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 3)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/garden-access-path-2026.avif" width={680} height={510} alt="Le chemin d'accès.----- Entrance ------ Eingang" title="Le chemin d'accès.----- Entrance ------ Eingang" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 4)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Le chemin d'accès.----- Entrance ------ Eingang
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522136710.jpg" width={680} height={506} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 5)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522136712.jpg" width={680} height={513} alt="Jardin côté gîte ---Garden ---- Gartenhaus" title="Jardin côté gîte ---Garden ---- Gartenhaus" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 6)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Jardin côté gîte ---Garden ---- Gartenhaus
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/garden-view-2026.jpeg" width={680} height={510} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 7)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522613580.jpg" width={680} height={907} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 8)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/capture-decran-2025-09-29-17-59-13.png" width={680} height={879} alt="Le terrain de pétanque 4m/10m --- Pétanque court --- Bouleplatz" title="Le terrain de pétanque 4m/10m --- Pétanque court --- Bouleplatz" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 9)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Le terrain de pétanque 4m/10m --- Pétanque court --- Bouleplatz
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/capture-decran-2023-04-08-18-59-01.png" width={680} height={429} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 10)} />
                                </div>
                              </div>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Entre le 1er mai et le 15 septembre, Spa de nage extérieur avec contre courant à partager avec la propriétaire&nbsp;
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
      {LightboxModal}
    </div>
  );
}
