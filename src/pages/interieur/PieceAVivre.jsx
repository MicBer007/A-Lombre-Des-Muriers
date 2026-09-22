import PhotoGallery from "../../components/PhotoGallery";
import Sidebar from "../../components/Sidebar";
import { useLightbox } from "../../components/Lightbox";

export default function PieceAVivre() {
  const { openLightbox, LightboxModal } = useLightbox();
  const images = [
    {
        "src": "/assets/salon-vue-ensemble-2026.jpeg",
        "alt": "La pièce à vivre"
    },
    {
        "src": "/assets/salon-climatise-2026.jpeg",
        "alt": "Le salon avec climatisation réversible"
    },
    {
        "src": "/assets/salon-fauteuils-2026.jpeg",
        "alt": "Le coin salon"
    },
    {
        "src": "/assets/climatisation-salon-2026.jpeg",
        "alt": "Climatisation réversible dans le salon"
    },
    {
        "src": "/assets/poele-bois-2026.jpeg",
        "alt": "Le poêle à bois"
    },
    {
        "src": "/assets/living-room-2026.jpeg",
        "alt": "Canapé lit rapido"
    },
    {
        "src": "/assets/i284571214522769720.jpg",
        "alt": "Le canapé lit rapido ouvert"
    },
    {
        "src": "/assets/i284571214522769663.jpg",
        "alt": "Le canapé lit rapido ouvert. Couchage 160/190 cm"
    },
    {
        "src": "/assets/cuisine-coin-repas-2026.jpeg",
        "alt": "La cuisine et le coin repas"
    },
    {
        "src": "/assets/cuisine-salon-2026.jpeg",
        "alt": "La cuisine ouverte sur le salon"
    }
];
  const appliances = [
    {
        "src": "/assets/nespresso-2026.jpeg",
        "alt": "Machine à café Nespresso"
    },
    {
        "src": "/assets/cuisine-coin-repas-2026.jpeg",
        "alt": "Micro-ondes, à gauche du plan de travail"
    },
    {
        "src": "/assets/sodastream-2026.jpeg",
        "alt": "Sodastream"
    },
    {
        "src": "/assets/airfryer-2026.jpeg",
        "alt": "Airfryer"
    },
    {
        "src": "/assets/four-vapeur-2026.jpeg",
        "alt": "Four vapeur"
    }
];

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

                              <h1 className="textheading3 mobile-oversized">La pièce à vivre</h1>
                              <p className="textnormal">Le salon est équipé d'une climatisation réversible pour votre confort en été comme en hiver.</p>
                              <PhotoGallery images={images} />
                              <h2 className="textheading3 mobile-oversized">Les appareils de la cuisine</h2>
                              <PhotoGallery images={appliances} />

                              {/* Kitchen items heading */}
                              <h3 className="textheading3 mobile-oversized" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                A disposition dans la cuisine
                              </h3>

                              <ul className="kitchen-equipment textnormal">
                                <li>Four vapeur</li>
                                <li>Micro-ondes</li>
                                <li>Airfryer</li>
                                <li>Frigo-congélateur</li>
                                <li>Plaque à induction</li>
                                <li>Machine à café Nespresso</li>
                                <li>Bouilloire</li>
                                <li>Grille-pain</li>
                                <li>Robot Kenwood</li>
                                <li>Sodastream</li>
                                <li>Mixsoupe</li>
                                <li>Presse-agrumes</li>
                                <li>Vaisselle pour 4 personnes</li>
                                <li>Plats pour le four</li>
                                <li>Moule à tarte</li>
                                <li>Sel, poivre, sucre</li>
                                <li>Capsules de café, thé, tisanes</li>
                                <li>Détergent vaisselle</li>
                                <li>Savon pour les mains</li>
                                <li>Essuie-main et torchon vaisselle</li>
                                <li>Sacs poubelle</li>
                              </ul>

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
                                      onClick={() => openLightbox([{ src: "/assets/covered-terrace-2026-b.jpeg", alt: "Terrasse couverte" }], 0)}
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
