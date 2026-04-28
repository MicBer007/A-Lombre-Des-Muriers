import Sidebar from "../components/Sidebar";
import { useLightbox } from "../components/Lightbox";

export default function Home() {
  const { openLightbox, LightboxModal } = useLightbox();
  const images = [];
  images.push({ src: "/assets/i284571214498116028.jpg", alt: "la façade sud au mois de mai - The south facade in May - Die Südfassade im Mai" });
  images.push({ src: "/assets/1fb4cef8-f3c4-454f-b1ff-d23bfc02e092.JPG", alt: "" });
  images.push({ src: "/assets/Capture%20d%E2%80%99e%CC%81cran%202023-04-08%20a%CC%80%2018.59.01.png", alt: "" });
  images.push({ src: "/assets/Capture%20d%E2%80%99e%CC%81cran%202023-04-28%20a%CC%80%2017.06.37.png", alt: "" });
  images.push({ src: "/assets/chaises_longues.jpeg", alt: "Chaises longues" });
  images.push({ src: "/assets/i284571214522335201.jpg", alt: "" });
  images.push({ src: "/assets/i284571214516621731.jpg", alt: "Entrée du gîte et Pierrade pour plus de convivialité !" });
  images.push({ src: "/assets/i284571214498992102.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522141193.jpg", alt: "" });
  images.push({ src: "/assets/i284571214498515291.jpg", alt: "" });
  images.push({ src: "/assets/i284571214522180079.jpg", alt: "" });
  images.push({ src: "/assets/i284571214498260070.jpg", alt: "" });
  images.push({ src: "/assets/i284571214498180473.jpg", alt: "Plan vu du ciel---Plan from the sky---Planen Sie vom Himmel" });
  images.push({ src: "/assets/i284571214498528937.jpg", alt: "Sous la neige.... Spectacle féerique !---Under the snow .... Fairy show !---Unter dem Schnee ... Märchenshow" });
  images.push({ src: "/assets/i284571214498540023.jpg", alt: "Les Muriers en Hiver ---- Mulberries in Winter ---- Maulbeeren im Winter." });
  images.push({ src: "/assets/i284571214502644149.jpg", alt: "Un magnifique couché de soleil vue du parking ---- A beautiful sunset view of the parking ---- Ein wunderschöner Sonnenuntergang über dem Parkplatz" });

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
                          {/* Content column - LEFT, 720px */}
                          <div className="Preview_column__1KeVx col" style={{ width: 870, float: "left" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 40, padding: "40px 35px" }}>

                              {/* Image 1: Facade sud */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img loading="lazy" src="/assets/i284571214498116028.jpg" width={680} height={510}
                                      alt="la façade sud au mois de mai - The south facade in May - Die Südfassade im Mai"
                                      title="la façade sud au mois de mai - The south facade in May - Die Südfassade im Mai"
                                      style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 0)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  la façade sud au mois de mai - The south facade in May - Die Südfassade im Mai
                                </p>
                              </div>

                              {/* Pour me contacter heading */}
                              <h3 className="textheading3 mobile-oversized" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Pour me contacter :
                              </h3>

                              {/* Contact info: email */}
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>Par{" "}</span>
                                <a href="mailto:annechoppinet@gmail.com" className="textnormal" style={{ textDecoration: "underline solid rgb(0, 0, 0)" }}>
                                  <span className="textnormal" style={{ color: "rgb(0, 0, 0)" }}>mail</span>
                                </a>{" "}
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>: alombredesmuriers@gmail.com</span>
                              </p>

                              {/* Contact info: phone */}
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  Par téléphone &nbsp;et WhatsApp: 0033 (0) 6 26 03 04 19 ou le
                                  &nbsp;0032 (0) 474 51 80 81 ou via la page{" "}
                                </span>
                                <a href="/contact/" className="textnormal" style={{ textDecoration: "underline solid rgb(0, 0, 0)" }}>
                                  <span className="textnormal" style={{ color: "rgb(21, 94, 171)", fontSize: 18, textDecoration: "underline solid rgb(21, 94, 171)" }}>
                                    CONTACT
                                  </span>
                                </a>
                              </p>

                              {/* Video */}
                              <video
                                preload="metadata"
                                autoPlay
                                muted
                                loop
                                controls
                                playsInline
                                src="/assets/vid--442257519-85d50000-2892-445f-bb11-75d0ce180821-640x360.mp4#t=0.001"
                                width="640"
                                height="360"
                                controlsList="nodownload"
                              ></video>
                              <p className="textnormal mobile-undersized-upper" style={{ textAlign: "left", fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                La maison et le gîte vue du ciel
                              </p>

                              {/* Image 2: Large house photo */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/1fb4cef8-f3c4-454f-b1ff-d23bfc02e092.JPG" width={680} height={653} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 1)} />
                                </div>
                              </div>

                              {/* SPA text */}
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Et depuis ce mois d'avril 2023 un SPA de Nage avec
                                contre courant a partager avec la propriétaire. Le Spa
                                est accessible du 1er mai au 30 septembre.
                              </p>

                              {/* Image 3: Spa screenshot 1 */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/Capture%20d%E2%80%99e%CC%81cran%202023-04-08%20a%CC%80%2018.59.01.png" width={680} height={458} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 2)} />
                                </div>
                              </div>

                              {/* Image 4: Spa screenshot 2 */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/Capture%20d%E2%80%99e%CC%81cran%202023-04-28%20a%CC%80%2017.06.37.png" width={680} height={498} style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 3)} />
                                </div>
                              </div>

                              {/* Image 5: Chaises longues */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                  <img loading="lazy" src="/assets/chaises_longues.jpeg" width={680} height={510} alt="Chaises longues" style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 4)} />
                                </div>
                              </div>

                              {/* Image 12 */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img loading="lazy" src="/assets/i284571214522335201.jpg" width={680} height={488}
                                      style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 5)} />
                                </div>
                              </div>

                              {/* Image 13: Entrée du gîte */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img loading="lazy" src="/assets/i284571214516621731.jpg" width={680} height={510}
                                      alt="Entrée du gîte et Pierrade pour plus de convivialité !"
                                      title="Entrée du gîte et Pierrade pour plus de convivialité !"
                                      style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 6)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Entrée du gîte et Pierrade pour plus de convivialité !
                                </p>
                              </div>

                              {/* Image 6 */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img loading="lazy" src="/assets/i284571214498992102.jpg" width={680} height={496}
                                      style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 7)} />
                                </div>
                              </div>

                              {/* Image 7 */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img loading="lazy" src="/assets/i284571214522141193.jpg" width={680} height={510}
                                      style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 8)} />
                                </div>
                              </div>

                              {/* Heading: Pour profiter */}
                              <h3 className="textheading3 mobile-oversized" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Pour profiter d'un dépaysement total et reposant et se
                                retrouver à l'aise comme chez soi
                              </h3>

                              {/* Description heading */}
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal mobile-oversized" style={{ fontFamily: "Roboto", fontSize: 24 }}>
                                  <span style={{ textDecoration: "underline solid rgb(0, 0, 0)" }}>Description</span> :
                                </span>
                              </p>

                              {/* Description texts */}
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  Le gîte a un accès privatif pour les voyageurs.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  Il y a une{" "}
                                  <span style={{ textDecoration: "underline solid rgb(0, 0, 0)" }}>
                                    <span style={{ color: "rgb(21, 94, 171)", fontSize: 18 }}>
                                      <a style={{ color: "rgb(21, 94, 171)", textDecoration: "underline solid rgb(21, 94, 171)" }} href="/interieur/chambre/" className="textnormal">
                                        GRANDE CHAMBRE
                                      </a>
                                    </span>
                                  </span>{" "}
                                  de 15 m2 &nbsp;avec un lit double de 1m60 / 2m
                                  séparable en 2 lits de 80cm de large avec accès
                                  direct et de plein pied à une terrasse en partie
                                  couverte et une autre terrasse pour se prélasser au
                                  soleil.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  Une table en fer forgé ainsi que des chaises de
                                  jardin et 2 chaises longues sont installées pour des
                                  moments de détente garanti.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  Un BBQ est également à votre disposition.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  Dans{" "}
                                </span>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  <a href="/interieur/piece-a-vivre/" className="textnormal" style={{ textDecoration: "underline solid rgb(0, 0, 0)" }}>
                                    <span style={{ color: "rgb(21, 94, 171)", fontSize: 18 }}>
                                      <span style={{ color: "rgb(21, 94, 171)", textDecoration: "underline solid rgb(21, 94, 171)" }}>
                                        LA PIECE A VIVRE
                                      </span>
                                    </span>
                                  </a>
                                  , vous disposerez également d
                                  <span style={{ textDecoration: "underline solid rgb(0, 0, 0)" }}>
                                    <a href="/interieur/piece-a-vivre/" className="textnormal" style={{ textDecoration: "underline solid rgb(0, 0, 0)" }}>
                                      <span style={{ color: "rgb(21, 94, 171)", textDecoration: "underline solid rgb(21, 94, 171)" }}>
                                        '
                                        <span style={{ fontSize: 18, color: "rgb(21, 94, 171)" }}>
                                          UNE CUISINE EQUIPEE
                                        </span>
                                      </span>
                                    </a>
                                  </span>{" "}
                                  et d'un joli salon l'ensemble de 32 m2 dans l'esprit
                                  du pays avec des pierres apparentes et un poêle à
                                  bois pour les soirées d'hiver.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  La pièce dispose également d'un canapé lit rapido.
                                  (tarif en sus si plus de 2 personnes )
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  Le gîte dispose de la Fibre optique et de la WIFI
                                  mais pas de télévision.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  La{" "}
                                  <span style={{ textDecoration: "underline solid rgb(0, 0, 0)" }}>
                                    <span style={{ fontSize: 18 }}>
                                      <a href="/interieur/salle-de-bain/" className="textnormal" style={{ textDecoration: "underline solid rgb(0, 0, 0)", fontSize: 18 }}>
                                        <span style={{ color: "rgb(21, 94, 171)", textDecoration: "underline solid rgb(21, 94, 171)" }}>
                                          SALLE DE BAIN
                                        </span>
                                      </a>
                                    </span>
                                  </span>{" "}
                                  est uniquement pour les voyageurs avec toilettes
                                  séparées.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  La surface totale du terrain de la propriété à
                                  4000m2, et le jardin côté gîte a une surface de
                                  2000m2 et est bien entretenu.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  Je tiens au bien être de mes hôtes et je leur laisse
                                  toute autonomie, je suis pour les échanges dans le
                                  respect du bien être de chacun, donc je serai à
                                  votre écoute si vous en exprimez le besoin.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  Je demanderai aux vacanciers de ne pas venir avec
                                  nos amis les animaux, ça m'évitera des crises
                                  d'asthme au contact des chiens et des chats et
                                  également pour une question d'hygiène aussi bien à
                                  l'intérieur du gîte que dans la propriété. Merci
                                  d'en tenir compte.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  Je loue également le gîte uniquement à des non
                                  fumeurs. &nbsp;
                                </span>
                              </p>

                              {/* Navigation links - 3 language columns */}
                              <div className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16, lineHeight: 2.2, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0 12px" }}>
                                <a href="/a-visiter/" style={{ color: "rgb(21, 94, 171)", textDecoration: "underline" }}>LES LIEUX A VISITER</a>
                                <a href="/a-visiter/" style={{ color: "rgb(156, 27, 49)", textDecoration: "underline" }}>PLACES TO VISIT</a>
                                <a href="/a-visiter/" style={{ color: "rgb(101, 179, 69)", textDecoration: "underline" }}>ORTE ZU BESUCHEN</a>

                                <a href="/informations/commentaires/" style={{ color: "rgb(21, 94, 171)", textDecoration: "underline" }}>COMMENTAIRES REÇUS</a>
                                <a href="/informations/commentaires/" style={{ color: "rgb(156, 27, 49)", textDecoration: "underline" }}>COMMENTS RECEIVED</a>
                                <a href="/informations/commentaires/" style={{ color: "rgb(101, 179, 69)", textDecoration: "underline" }}>KOMMENTARE ERHALTEN</a>

                                <a href="/informations/tarifs/" style={{ color: "rgb(21, 94, 171)", textDecoration: "underline" }}>TARIFS</a>
                                <a href="/informations/tarifs/" style={{ color: "rgb(156, 27, 49)", textDecoration: "underline" }}>RATE FOR THE RENTAL</a>
                                <a href="/informations/tarifs/" style={{ color: "rgb(101, 179, 69)", textDecoration: "underline" }}>PREIS FÜR DIE MIETPREISE</a>

                                <a href="/informations/calendrier/" style={{ color: "rgb(21, 94, 171)", textDecoration: "underline" }}>CALENDRIER</a>
                                <a href="/informations/calendrier/" style={{ color: "rgb(156, 27, 49)", textDecoration: "underline" }}>CALENDAR</a>
                                <a href="/informations/calendrier/" style={{ color: "rgb(101, 179, 69)", textDecoration: "underline" }}>KALENDER</a>

                                <a href="/contact/" style={{ color: "rgb(21, 94, 171)", textDecoration: "underline" }}>FORMULAIRE DE CONTACT</a>
                                <a href="/contact/" style={{ color: "rgb(156, 27, 49)", textDecoration: "underline" }}>CONTACT FORM</a>
                                <a href="/contact/" style={{ color: "rgb(101, 179, 69)", textDecoration: "underline" }}>FORMULAR KONTAKT</a>

                                <a href="/informations/contrat/" style={{ color: "rgb(21, 94, 171)", textDecoration: "underline" }}>CONTRAT</a>
                                <a href="/informations/contrat/" style={{ color: "rgb(156, 27, 49)", textDecoration: "underline" }}>CONTRACT</a>
                                <a href="/informations/contrat/" style={{ color: "rgb(101, 179, 69)", textDecoration: "underline" }}>VERTRAG</a>

                                <a href="http://www.latelierdepierreetsophie.fr/" style={{ color: "rgb(21, 94, 171)", textDecoration: "underline" }}>RESTAURATION</a>
                                <a href="http://www.latelierdepierreetsophie.fr/" style={{ color: "rgb(156, 27, 49)", textDecoration: "underline" }}>RESTAURANT</a>
                                <a href="http://www.latelierdepierreetsophie.fr/" style={{ color: "rgb(101, 179, 69)", textDecoration: "underline" }}>RESTAURANT</a>
                              </div>

                              {/* Image 8 */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img loading="lazy" src="/assets/i284571214498515291.jpg" width={680} height={495}
                                      style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 9)} />
                                </div>
                              </div>

                              {/* Pour trouver la maison */}
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal mobile-oversized" style={{ fontSize: 24 }}>
                                  <span style={{ fontWeight: "bold" }}>
                                    Pour trouver la maison-To find the house-Um das
                                    Haus zu finden
                                  </span>
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontSize: 18 }}>
                                  L'adresse de la maison est le 617 route de Béthanie,
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontSize: 18 }}>
                                  A savoir que la numérotation est métrique donc
                                  chaque numéro représente la distance, en mètres, le
                                  séparant du début de la rue.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontSize: 18 }}>
                                  La maison est donc a 617 metres du début de la rue.
                                </span>
                              </p>

                              {/* Google Maps */}
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d444.7182970338744!2d4.032107489728119!3d44.0605804456429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sza!4v1773379472864!5m2!1sen!2sza"
                                width="100%"
                                height="376"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>

                              {/* Image 9 */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img loading="lazy" src="/assets/i284571214522180079.jpg" width={680} height={349}
                                      style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 10)} />
                                </div>
                              </div>

                              {/* Image 10: panoramic */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img loading="lazy" src="/assets/i284571214498260070.jpg" width={680} height={215}
                                      style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 11)} />
                                </div>
                              </div>

                              {/* Image 11: Plan vu du ciel */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img loading="lazy" src="/assets/i284571214498180473.jpg" width={680} height={461}
                                      alt="Plan vu du ciel---Plan from the sky---Planen Sie vom Himmel"
                                      title="Plan vu du ciel---Plan from the sky---Planen Sie vom Himmel"
                                      style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 12)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Plan vu du ciel---Plan from the sky---Planen Sie vom Himmel
                                </p>
                              </div>

                              {/* La situation du Gîte */}
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontSize: 18 }}>
                                  <span style={{ fontWeight: "bold" }}>
                                    La situation du Gîte dans le Gard
                                  </span>
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  Le logement est situé au coeur d'une région
                                  touristique des basses Cévennes. Dans un rayon de 20
                                  kms vous pourrez voir des hectares de coteaux de
                                  vignes, des vallées encaissées plantées de
                                  châtaigniers, ou des collines de garrigues de chênes
                                  verts, de cade et de thym. Vous pourrez{" "}
                                </span>
                                <a href="/a-visiter/" className="textnormal" style={{ textDecoration: "underline solid rgb(0, 0, 0)" }}>
                                  <span style={{ fontSize: 18, color: "rgb(21, 94, 171)", textDecoration: "underline solid rgb(21, 94, 171)" }}>
                                    visiter
                                  </span>
                                </a>{" "}
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                  bon nombre de sites à proximité d'Anduze: les
                                  étonnants bambous géants de Générargues, les
                                  poteries, le Musée du Désert, haut lieu du
                                  protestantisme. Vous pourrez emprunter le Petit
                                  Train des Cévennes ou le vélo rail qui vous guidera
                                  à travers de merveilleux paysages jusqu'à Saint Jean
                                  du Gard et son musée des traditions cévenoles.
                                  Au-delà vous serez parfaitement ancrés pour rayonner
                                  sur d'autres sites gardois.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ color: "rgb(101, 179, 69)", fontFamily: "Roboto", fontSize: 16 }}>
                                  Pour visualiser l'intérieur de la maison et quelques
                                  exemples de ce que vous pourrez découvrir,
                                  choississez la rubrique désirée dans la barre des
                                  menus en haut de l'écran.
                                </span>
                              </p>

                              {/* Règlement Intérieur */}
                              <h3 className="textheading3 mobile-oversized" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Règlement Intérieur
                              </h3>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ color: "rgb(226, 30, 40)", fontFamily: "Roboto", fontSize: 16 }}>
                                  - Les soirées et évènements ne sont pas autorisés.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ color: "rgb(226, 30, 40)", fontFamily: "Roboto", fontSize: 16 }}>
                                  - Non fumeurs uniquement.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ color: "rgb(226, 30, 40)", fontFamily: "Roboto", fontSize: 16 }}>
                                  - Nos amis les animaux ne sont pas admis ni dans le
                                  gîte, ni dans la propriété.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ color: "rgb(101, 179, 69)", fontFamily: "Roboto", fontSize: 16 }}>
                                  * &nbsp;Adapté aux enfants sous la responsabilité des parents
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ color: "rgb(101, 179, 69)", fontFamily: "Roboto", fontSize: 16 }}>
                                  * &nbsp;Occupants maximum 4
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ color: "rgb(21, 94, 171)", fontFamily: "Roboto", fontSize: 16 }}>
                                  * Nombre de jours de location minimum 5 nuits.
                                </span>
                              </p>

                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ color: "rgb(21, 94, 171)", fontFamily: "Roboto", fontSize: 16 }}>
                                  *&nbsp;A partir de 30 jours, réduction de{" "}
                                  <span style={{ color: "rgb(226, 30, 40)" }}>- 10%</span>
                                </span>
                              </p>

                              {/* Image 14: Sous la neige */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img loading="lazy" src="/assets/i284571214498528937.jpg" width={680} height={510}
                                      alt="Sous la neige.... Spectacle féerique !---Under the snow .... Fairy show !---Unter dem Schnee ... Märchenshow"
                                      title="Sous la neige.... Spectacle féerique !---Under the snow .... Fairy show !---Unter dem Schnee ... Märchenshow"
                                      style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 13)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Sous la neige.... Spectacle féerique !---Under the snow .... Fairy show !---Unter dem Schnee ... Märchenshow
                                </p>
                              </div>

                              {/* Image 15: Les Muriers en Hiver */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img loading="lazy" src="/assets/i284571214498540023.jpg" width={680} height={510}
                                      alt="Les Muriers en Hiver ---- Mulberries in Winter ---- Maulbeeren im Winter."
                                      title="Les Muriers en Hiver ---- Mulberries in Winter ---- Maulbeeren im Winter."
                                      style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 14)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Les Muriers en Hiver ---- Mulberries in Winter ---- Maulbeeren im Winter.
                                </p>
                              </div>

                              {/* Image 16: Coucher de soleil */}
                              <div className="gallery-item">
                                <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                    <img loading="lazy" src="/assets/i284571214502644149.jpg" width={680} height={510}
                                      alt="Un magnifique couché de soleil vue du parking ---- A beautiful sunset view of the parking ---- Ein wunderschöner Sonnenuntergang über dem Parkplatz"
                                      title="Un magnifique couché de soleil vue du parking ---- A beautiful sunset view of the parking ---- Ein wunderschöner Sonnenuntergang über dem Parkplatz"
                                      style={{ cursor: "pointer" }} onClick={() => openLightbox(images, 15)} />
                                </div>
                                <p className="textnormal" style={{ fontSize: "14.4px", lineHeight: 1.17, fontStyle: "italic" }}>
                                  Un magnifique couché de soleil vue du parking ---- A beautiful
                                  sunset view of the parking ---- Ein wunderschöner
                                  Sonnenuntergang über dem Parkplatz
                                </p>
                              </div>

                              {/* Commentaires section */}
                              <h3 className="textheading3 mobile-oversized" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Commentaires
                              </h3>

                              {/* Comment 1: Philippe et Albin */}
                              <div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                  <p className="textnormal" style={{ fontSize: 20, lineHeight: 1.1 }}>Philippe et Albin</p>
                                  <span className="textnormal" style={{ fontStyle: "italic", fontSize: 16 }}>13.02.2022 14:37</span>
                                </div>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Un gite très calme, bien agencé. Nous avons passé trois nuits reposante
                                  durant un week-end chargé au pole mécanique d'Alès.
                                </p>
                              </div>

                              {/* Comment 2: Saliha et Daniel */}
                              <div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                  <p className="textnormal" style={{ fontSize: 20, lineHeight: 1.1 }}>Saliha et Daniel</p>
                                  <span className="textnormal" style={{ fontStyle: "italic", fontSize: 16 }}>29.06.2020 06:22</span>
                                </div>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Le gite est très bien pensé, agencé et décoré. On s'y sent bien. Nous
                                  tenons à remercier Anne pour son accueil et son sourire et son désir de se
                                  sentir comme chez soi. C'est réussi.
                                </p>
                              </div>

                              {/* Comment 3: Salih et Daniel */}
                              <div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                  <p className="textnormal" style={{ fontSize: 20, lineHeight: 1.1 }}>Salih et Daniel</p>
                                  <span className="textnormal" style={{ fontStyle: "italic", fontSize: 16 }}>29.06.2020 05:11</span>
                                </div>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Nous reviendrons aussi pour les cigales, les oiseaux qui ont bercé chaque
                                  matin notre réveil et pour découvrir encore un peu plus cette magnifique
                                  vallée du Gardon bordée de ces très jolis villages mé
                                </p>
                              </div>

                              {/* Comment 4: Wilfried */}
                              <div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                  <p className="textnormal" style={{ fontSize: 20, lineHeight: 1.1 }}>Wilfried</p>
                                  <span className="textnormal" style={{ fontStyle: "italic", fontSize: 16 }}>23.08.2019 09:16</span>
                                </div>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  <span style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                    Super séjour. Location calme propre et tres bien entretenue.
                                  </span>
                                  <br />
                                  <span style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                    Anne est une hote charmante
                                  </span>
                                  <br />
                                  <span style={{ fontFamily: "Roboto", fontSize: 16 }}>
                                    Nous reviendrons
                                  </span>
                                </p>
                              </div>

                              {/* Comment 5: Veronique.lavoix */}
                              <div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                  <p className="textnormal" style={{ fontSize: 20, lineHeight: 1.1 }}>Veronique.lavoix</p>
                                  <span className="textnormal" style={{ fontStyle: "italic", fontSize: 16 }}>16.04.2019 16:00</span>
                                </div>
                                <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                  Nous avons séjourné une semaine à noël dans cette belle maison propre et
                                  conviviale. Nous reviendrons avec grand plaisir. Véronique et Ludovic
                                </p>
                              </div>

                            </div>
                            <div style={{ clear: "both" }}></div>
                          </div>
                          {/* Sidebar column - RIGHT, 220px */}
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
