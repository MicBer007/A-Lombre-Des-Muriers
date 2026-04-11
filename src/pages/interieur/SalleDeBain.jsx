import Sidebar from "../../components/Sidebar";
import { useLightbox } from "../../components/Lightbox";

export default function SalleDeBain() {
  const { openLightbox, LightboxModal } = useLightbox();
  const images = [];

  images.push({ src: "/assets/i284571214498194679.jpg", alt: "La douche et le lavabo avec acc\u00e8s direct \u00e0 la chambre." });
  images.push({ src: "/assets/i284571214498194708.jpg", alt: "La douche" });
  images.push({ src: "/assets/i284571214498271061.jpg", alt: "" });
  images.push({ src: "/assets/i284571214498194760.jpg", alt: "Salle de bain \u00e9quip\u00e9e d'un lave linge." });
  images.push({ src: "/assets/i284571214498194767.jpg", alt: "Lave linge Thomson" });

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
                                  <img loading="lazy" src="/assets/i284571214498194679.jpg" width={680} height={510} alt="La douche et le lavabo avec acc&egrave;s direct &agrave; la chambre." title="La douche et le lavabo avec acc&egrave;s direct &agrave; la chambre." style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 0)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  La douche et le lavabo avec acc&egrave;s direct &agrave; la chambre.
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214498194708.jpg" width={680} height={907} alt="La douche" title="La douche" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 1)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  La douche
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214498271061.jpg" width={680} height={907} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 2)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214498194760.jpg" width={680} height={455} alt="Salle de bain &eacute;quip&eacute;e d'un lave linge." title="Salle de bain &eacute;quip&eacute;e d'un lave linge." style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 3)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Salle de bain &eacute;quip&eacute;e d'un lave linge.
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214498194767.jpg" width={680} height={510} alt="Lave linge Thomson" title="Lave linge Thomson" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 4)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Lave linge Thomson
                                </p>
                              </div>
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
      {LightboxModal}
    </div>
  );
}
