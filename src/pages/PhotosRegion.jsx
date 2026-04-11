import Sidebar from "../components/Sidebar";
import { useLightbox } from "../components/Lightbox";

export default function PhotosRegion() {
  const { openLightbox, LightboxModal } = useLightbox();
  const images = [];

  images.push({ src: "/assets/i284571214522136966.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522137042.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522137066.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522137096.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522140600.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522140641.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522140653.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522140656.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522140662.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522140672.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522137063.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522137024.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522140591.jpg", alt: "Le gardon" });
  images.push({ src: "/assets/i284571214522140613.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522140626.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522140584.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522137069.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522137073.jpg", alt: "L'int\u00e9rieur peint de la cath\u00e9drale d'Uz\u00e8s" });
  images.push({ src: "/assets/i284571214522137026.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522140680.jpg", alt: "Duch\u00e9 d'Uz\u00e8s" });
  images.push({ src: "/assets/i284571214522140683.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522140688.jpg", alt: "Le ch\u00e2teau Ducal d'Uz\u00e8s" });
  images.push({ src: "/assets/i284571214522140693.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522140700.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522149870.jpg", alt: "Le pont du Gard" });
  images.push({ src: "/assets/i284571214522149876.jpg", alt: "Le pont du Gard" });

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
                                  <img loading="lazy" src="/assets/i284571214522136966.jpg" width={680} height={464} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 0)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522137042.jpg" width={680} height={464} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 1)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522137066.jpg" width={680} height={464} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 2)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522137096.jpg" width={680} height={453} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 3)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140600.jpg" width={680} height={456} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 4)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140641.jpg" width={680} height={454} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 5)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140653.jpg" width={680} height={455} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 6)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140656.jpg" width={680} height={453} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 7)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140662.jpg" width={680} height={453} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 8)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140672.jpg" width={680} height={453} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 9)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522137063.jpg" width={680} height={464} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 10)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522137024.jpg" width={680} height={996} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 11)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140591.jpg" width={680} height={453} alt="Le gardon" title="Le gardon" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 12)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Le gardon
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140613.jpg" width={680} height={452} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 13)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140626.jpg" width={680} height={452} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 14)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140584.jpg" width={680} height={1025} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 15)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522137069.jpg" width={680} height={464} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 16)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522137073.jpg" width={680} height={996} alt="L'intérieur peint de la cathédrale d'Uzès" title="L'intérieur peint de la cathédrale d'Uzès" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 17)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  L'intérieur peint de la cathédrale d'Uzès
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522137026.jpg" width={680} height={1003} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 18)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140680.jpg" width={680} height={449} alt="Duché d'Uzès" title="Duché d'Uzès" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 19)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Duché d'Uzès
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140683.jpg" width={680} height={1030} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 20)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140688.jpg" width={680} height={1035} alt="Le château Ducal d'Uzès" title="Le château Ducal d'Uzès" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 21)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Le château Ducal d'Uzès
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140693.jpg" width={680} height={455} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 22)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522140700.jpg" width={680} height={1029} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 23)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522149870.jpg" width={680} height={510} alt="Le pont du Gard" title="Le pont du Gard" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 24)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Le pont du Gard
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522149876.jpg" width={680} height={510} alt="Le pont du Gard" title="Le pont du Gard" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 25)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Le pont du Gard
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
