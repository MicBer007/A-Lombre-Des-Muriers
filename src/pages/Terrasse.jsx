import Sidebar from "../components/Sidebar";
import { useLightbox } from "../components/Lightbox";

export default function Terrasse() {
  const { openLightbox, LightboxModal } = useLightbox();
  const images = [];
  images.push({ src: "/assets/terrace-breakfast-2026.jpeg", alt: "terrasse pour des petits déjeuners au soleil et en soirée à l'ombre ---- outside patio ----Außenterrasse." });
  images.push({ src: "/assets/covered-terrace-2026-a.jpeg", alt: "Terrasse couverte --- Covered patio ---- Überdachte Terrasse" });
  images.push({ src: "/assets/terrace-shaded-entry-2026.jpeg", alt: "L'après midi." });
  images.push({ src: "/assets/i284571214522315927.jpg", alt: "Le matin" });
  images.push({ src: "/assets/i284571214522214522.jpg", alt: "La terrasse ouverte pour des petits déjeuners au soleil et en soirée à l'ombre ---- outside patio ----Außenterrasse." });
  images.push({ src: "/assets/i284571214522136847.jpg", alt: "Pierrade à disposition" });
  images.push({ src: "/assets/terrace-view-2026.jpeg", alt: "" });
  images.push({ src: "/assets/terrace-covered-side-2026.jpeg", alt: "" });
  images.push({ src: "/assets/photo_de_la_terrasse.jpeg", alt: "Photo de la terrasse" });

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
                                  <img loading="lazy" src="/assets/terrace-breakfast-2026.jpeg" width={680} height={510} alt="terrasse pour des petits d&eacute;jeuners au soleil et en soir&eacute;e &agrave; l'ombre ---- outside patio ----Au&szlig;enterrasse." title="terrasse pour des petits d&eacute;jeuners au soleil et en soir&eacute;e &agrave; l'ombre ---- outside patio ----Au&szlig;enterrasse." style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 0)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  terrasse pour des petits d&eacute;jeuners au soleil et en soir&eacute;e &agrave; l'ombre ---- outside patio ----Au&szlig;enterrasse.
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/covered-terrace-2026-a.jpeg" width={680} height={510} alt="Terrasse couverte --- Covered patio ---- Überdachte Terrasse" title="Terrasse couverte --- Covered patio ---- Überdachte Terrasse" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 1)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Terrasse couverte --- Covered patio ---- Überdachte Terrasse
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/terrace-shaded-entry-2026.jpeg" width={680} height={510} alt="L'après midi." title="L'après midi." style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 2)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  L'après midi.
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522315927.jpg" width={680} height={510} alt="Le matin" title="Le matin" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 3)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Le matin
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522214522.jpg" width={680} height={510} alt="La terrasse ouverte pour des petits déjeuners au soleil et en soirée à l'ombre ---- outside patio ----Außenterrasse." title="La terrasse ouverte pour des petits déjeuners au soleil et en soirée à l'ombre ---- outside patio ----Außenterrasse." style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 4)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  La terrasse ouverte pour des petits déjeuners au soleil et en soirée à l'ombre ---- outside patio ----Außenterrasse.
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/i284571214522136847.jpg" width={680} height={712} alt="Pierrade à disposition" title="Pierrade à disposition" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 5)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Pierrade à disposition
                                </p>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/terrace-view-2026.jpeg" width={680} height={907} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 6)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/terrace-covered-side-2026.jpeg" width={680} height={510} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 7)} />
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/photo_de_la_terrasse.jpeg" width={680} height={510} alt="Photo de la terrasse" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 8)} />
                                </div>
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
