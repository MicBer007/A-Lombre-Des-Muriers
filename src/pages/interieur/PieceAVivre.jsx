import Sidebar from "../../components/Sidebar";
import { useLightbox } from "../../components/Lightbox";

export default function PieceAVivre() {
  const { openLightbox, LightboxModal } = useLightbox();
  const images = [];

  images.push({ src: "/assets/capture-decran-2023-05-11-19-07-04.png", alt: "Canap\u00e9 3 places" });
  images.push({ src: "/assets/capture-decran-2023-05-11-19-06-26.png", alt: "Canap\u00e9 3 places et po\u00eale \u00e0 bois" });
  images.push({ src: "/assets/living-room-2026.jpeg", alt: "Canap\u00e9 lit rapido" });
  images.push({ src: "/assets/i284571214522769720.jpg", alt: "Le canap\u00e9 lit rapido ouvert" });
  images.push({ src: "/assets/i284571214522769663.jpg", alt: "Le canap\u00e9 lit rapido ouvert. Couchage 160/190cm" });
  images.push({ src: "/assets/i284571214522214587.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522214604.jpg", alt: "" });
  images.push({ src: "/assets/capture-decran-2025-10-03-16-14-19.png", alt: "le coin repas." });
  images.push({ src: "/assets/capture-decran-2025-10-03-16-15-30.png", alt: "La cuisine." });
  images.push({ src: "/assets/capture-decran-2025-10-03-16-16-35.png", alt: "" });
  images.push({ src: "/assets/capture-decran-2025-10-03-16-17-33.png", alt: "" });
  images.push({ src: "/assets/capture-decran-2025-10-03-16-16-08.png", alt: "" });
  images.push({ src: "/assets/covered-terrace-2026-a.jpeg", alt: "Terrasse couverte --- Covered patio ---- \u00dcberdachte Terrasse" });
  images.push({ src: "/assets/covered-terrace-2026-b.jpeg", alt: "Terrasse couverte --- Covered patio ---- \u00dcberdachte Terrasse" });

  return (
    <div className="Preview_row__3Fkye row Preview_noSideMargin__2I-_n" style={{ width: "100%" }}>
      <div data-kind="SECTION" className="Preview_componentWrapper__2i4QI" style={{ width: "100%" }}>
        <div id="PageSection" className="Preview_block__16Zmu">
          <div className="StripPreview_backgroundComponent__3YmQM Background_backgroundComponent__3_1Ea hasChildren" style={{ backgroundColor: "transparent" }}>
            <div className="Preview_column__1KeVx col" style={{ width: 1200, margin: "0 auto" }}>
              <div className="Preview_row__3Fkye row" style={{ width: 1200 }}>
                <div className="Preview_componentWrapper__2i4QI" style={{ width: 1130, marginLeft: 35 }}>
                  <div className="Preview_block__16Zmu">
                    <div className="BackgroundPreview_backgroundComponent__3Dr5e BackgroundPreview_bgHeight__3dD2e hasChildren" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                      <div className="Preview_column__1KeVx col">
                        <div className="Preview_row__3Fkye row" style={{ width: 1130 }}>
                          <div className="Preview_column__1KeVx col" style={{ width: 870, float: "left" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 40, padding: "40px 20px" }}>

                              {/* Image 1: Canape 3 places */}
                              <div>
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img
                                      loading="lazy"
                                      role="presentation"
                                      src="/assets/capture-decran-2023-05-11-19-07-04.png"
                                      height="510"
                                      width="680"
                                      alt="Canap&eacute; 3 places"
                                      title="Canap&eacute; 3 places"
                                      style={{ display: "block", cursor: "pointer" }}
                                      onClick={() => openLightbox(images, 0)}
                                    />
                                </div>
                                <p className="textnormal mobile-undersized-upper" style={{ textAlign: "left", fontSize: 14.4, lineHeight: 1.17, fontStyle: "italic" }}>
                                  Dresse
                                </p>
                              </div>

                              {/* Image 2: Canape 3 places et poele a bois */}
                              <div>
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img
                                      loading="lazy"
                                      role="presentation"
                                      src="/assets/capture-decran-2023-05-11-19-06-26.png"
                                      height="510"
                                      width="680"
                                      alt="Canap&eacute; 3 places et po&ecirc;le &agrave; bois"
                                      title="Canap&eacute; 3 places et po&ecirc;le &agrave; bois"
                                      style={{ display: "block", cursor: "pointer" }}
                                      onClick={() => openLightbox(images, 1)}
                                    />
                                </div>
                                <p className="textnormal mobile-undersized-upper" style={{ textAlign: "left", fontSize: 14.4, lineHeight: 1.17, fontStyle: "italic" }}>
                                  Fauteuil tr&egrave;s confortable, dresse et po&ecirc;le &agrave; bois
                                </p>
                              </div>

                              {/* Image 3: Canape lit rapido */}
                              <div>
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img
                                      loading="lazy"
                                      role="presentation"
                                      src="/assets/living-room-2026.jpeg"
                                      height="510"
                                      width="680"
                                      alt="Canap&eacute; lit rapido"
                                      title="Canap&eacute; lit rapido"
                                      style={{ display: "block", cursor: "pointer" }}
                                      onClick={() => openLightbox(images, 2)}
                                    />
                                </div>
                                <p className="textnormal mobile-undersized-upper" style={{ textAlign: "left", fontSize: 14.4, lineHeight: 1.17, fontStyle: "italic" }}>
                                  Canap&eacute; lit rapido
                                </p>
                              </div>

                              {/* Image 4: Le canape lit rapido ouvert */}
                              <div>
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img
                                      loading="lazy"
                                      role="presentation"
                                      src="/assets/i284571214522769720.jpg"
                                      height="510"
                                      width="680"
                                      alt="Le canap&eacute; lit rapido ouvert"
                                      title="Le canap&eacute; lit rapido ouvert"
                                      style={{ display: "block", cursor: "pointer" }}
                                      onClick={() => openLightbox(images, 3)}
                                    />
                                </div>
                                <p className="textnormal mobile-undersized-upper" style={{ textAlign: "left", fontSize: 14.4, lineHeight: 1.17, fontStyle: "italic" }}>
                                  Le canap&eacute; lit rapido ouvert
                                </p>
                              </div>

                              {/* Image 5: Couchage 160/190cm */}
                              <div>
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img
                                      loading="lazy"
                                      role="presentation"
                                      src="/assets/i284571214522769663.jpg"
                                      height="510"
                                      width="680"
                                      alt="Le canap&eacute; lit rapido ouvert. Couchage 160/190cm"
                                      title="Le canap&eacute; lit rapido ouvert. Couchage 160/190cm"
                                      style={{ display: "block", cursor: "pointer" }}
                                      onClick={() => openLightbox(images, 4)}
                                    />
                                </div>
                                <p className="textnormal mobile-undersized-upper" style={{ textAlign: "left", fontSize: 14.4, lineHeight: 1.17, fontStyle: "italic" }}>
                                  Le canap&eacute; lit rapido ouvert. Couchage 160/190cm
                                </p>
                              </div>

                              {/* Image 6 (no caption) */}
                              <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img
                                    loading="lazy"
                                    role="presentation"
                                    src="/assets/i284571214522214587.jpg"
                                    height="510"
                                    width="680"
                                    style={{ display: "block", cursor: "pointer" }}
                                    onClick={() => openLightbox(images, 5)}
                                  />
                              </div>

                              {/* Image 7 (no caption) */}
                              <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img
                                    loading="lazy"
                                    role="presentation"
                                    src="/assets/i284571214522214604.jpg"
                                    height="510"
                                    width="680"
                                    style={{ display: "block", cursor: "pointer" }}
                                    onClick={() => openLightbox(images, 6)}
                                  />
                              </div>

                              {/* Image 8: le coin repas */}
                              <div>
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img
                                      loading="lazy"
                                      role="presentation"
                                      src="/assets/capture-decran-2025-10-03-16-14-19.png"
                                      height="510"
                                      width="680"
                                      alt="le coin repas."
                                      title="le coin repas."
                                      style={{ display: "block", cursor: "pointer" }}
                                      onClick={() => openLightbox(images, 7)}
                                    />
                                </div>
                                <p className="textnormal mobile-undersized-upper" style={{ textAlign: "left", fontSize: 14.4, lineHeight: 1.17, fontStyle: "italic" }}>
                                  le coin repas.
                                </p>
                              </div>

                              {/* Image 9: La cuisine */}
                              <div>
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img
                                      loading="lazy"
                                      role="presentation"
                                      src="/assets/capture-decran-2025-10-03-16-15-30.png"
                                      height="510"
                                      width="680"
                                      alt="La cuisine."
                                      title="La cuisine."
                                      style={{ display: "block", cursor: "pointer" }}
                                      onClick={() => openLightbox(images, 8)}
                                    />
                                </div>
                                <p className="textnormal mobile-undersized-upper" style={{ textAlign: "left", fontSize: 14.4, lineHeight: 1.17, fontStyle: "italic" }}>
                                  La cuisine.
                                </p>
                              </div>

                              {/* Two small images side by side */}
                              <div style={{ display: "flex", gap: 18 }}>
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ overflow: "hidden" }}>
                                  <img
                                    loading="lazy"
                                    role="presentation"
                                    src="/assets/capture-decran-2025-10-03-16-16-35.png"
                                    height="377"
                                    width="290"
                                    style={{ display: "block", cursor: "pointer" }}
                                    onClick={() => openLightbox(images, 9)}
                                  />
                                </div>
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ overflow: "hidden" }}>
                                  <img
                                    loading="lazy"
                                    role="presentation"
                                    src="/assets/capture-decran-2025-10-03-16-17-33.png"
                                    height="377"
                                    width="273"
                                    style={{ display: "block", cursor: "pointer" }}
                                    onClick={() => openLightbox(images, 10)}
                                  />
                                </div>
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ overflow: "hidden" }}>
                                  <img
                                    loading="lazy"
                                    role="presentation"
                                    src="/assets/capture-decran-2025-10-03-16-16-08.png"
                                    height="377"
                                    width="275"
                                    style={{ display: "block", cursor: "pointer" }}
                                    onClick={() => openLightbox(images, 11)}
                                  />
                                </div>
                              </div>

                              {/* Kitchen items heading */}
                              <h3 className="textheading3 mobile-oversized" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                A disposition dans la cuisine
                              </h3>

                              {/* Kitchen items list */}
                              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Four &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Vaisselle pour 4 personnes
                                </p>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Micro-onde &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Plats pour le four
                                </p>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Frigo-cong&eacute;lateur &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Moule &agrave; tarte
                                </p>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Plaque &agrave; induction &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sel- poivre- sucre
                                </p>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Machine Nespresso &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Capsules caf&eacute;- Th&eacute;- Tisanes
                                </p>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Bouilloire &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D&eacute;tergent vaisselle
                                </p>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Grille-pain &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Savon pour les mains
                                </p>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Robot Kenwood &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Essuie-main &nbsp;Torchon vaisselle
                                </p>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Sodastream
                                </p>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Mixsoupe &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sacs poubelle
                                </p>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Presse Agrume
                                </p>
                              </div>

                              {/* Image 10: Sortie vers terrasse */}
                              <div>
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img
                                      loading="lazy"
                                      role="presentation"
                                      src="/assets/covered-terrace-2026-a.jpeg"
                                      height="510"
                                      width="680"
                                      alt="Terrasse couverte --- Covered patio ---- &Uuml;berdachte Terrasse"
                                      title="Terrasse couverte --- Covered patio ---- &Uuml;berdachte Terrasse"
                                      style={{ display: "block", cursor: "pointer" }}
                                      onClick={() => openLightbox(images, 12)}
                                    />
                                </div>
                                <p className="textnormal mobile-undersized-upper" style={{ textAlign: "left", fontSize: 14.4, lineHeight: 1.17, fontStyle: "italic" }}>
                                  Terrasse couverte --- Covered patio ---- &Uuml;berdachte Terrasse
                                </p>
                              </div>

                              <div>
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img
                                      loading="lazy"
                                      role="presentation"
                                      src="/assets/covered-terrace-2026-b.jpeg"
                                      height="907"
                                      width="680"
                                      alt="Terrasse couverte --- Covered patio ---- &Uuml;berdachte Terrasse"
                                      title="Terrasse couverte --- Covered patio ---- &Uuml;berdachte Terrasse"
                                      style={{ display: "block", cursor: "pointer" }}
                                      onClick={() => openLightbox(images, 13)}
                                    />
                                </div>
                                <p className="textnormal mobile-undersized-upper" style={{ textAlign: "left", fontSize: 14.4, lineHeight: 1.17, fontStyle: "italic" }}>
                                  Terrasse couverte --- Covered patio ---- &Uuml;berdachte Terrasse
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
