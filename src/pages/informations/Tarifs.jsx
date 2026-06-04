import Sidebar from "../../components/Sidebar";
import { useLightbox } from "../../components/Lightbox";
import { Link } from "react-router-dom";

export default function Tarifs() {
  const { openLightbox, LightboxModal } = useLightbox();
  const images = [];
  images.push({ src: "/assets/i284571214521237393.jpg", alt: "" });

  return (
    <div className="Preview_row__3Fkye row Preview_noSideMargin__2I-_n" style={{ width: "100%" }}>
      <div data-kind="SECTION" className="Preview_componentWrapper__2i4QI" style={{ width: "100%" }}>
        <div id="PageSection" className="Preview_block__16Zmu">
          <div className="StripPreview_backgroundComponent__3YmQM Background_backgroundComponent__3_1Ea hasChildren" style={{ backgroundColor: "transparent" }}>
            <div className="Preview_column__1KeVx col" style={{ width: 1200, margin: "0 auto" }}>
              <div className="Preview_row__3Fkye row" style={{ width: 1200 }}>
                <div className="Preview_componentWrapper__2i4QI" style={{ width: 1130, marginLeft: 35 }}>
                  <div className="Preview_block__16Zmu">
                    <div className="BackgroundPreview_backgroundComponent__3Dr5e BackgroundPreview_bgHeight__3dD2e hasChildren" style={{ backgroundColor: "rgb(255, 255, 255)", paddingBottom: 85 }}>
                      <div className="Preview_column__1KeVx col">
                        <div className="Preview_row__3Fkye row" style={{ width: 1130 }}>
                          {/* Content column */}
                          <div className="Preview_column__1KeVx col" style={{ width: 870, float: "left" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 22, padding: "50px 20px 71px" }}>
                              <h3 className="textheading3 mobile-oversized" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Tarifs Pour 1 ou 2 personnes
                              </h3>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ color: "#000000", fontFamily: "Roboto", fontSize: 16 }}>
                                  En Haute saison + vacances scolaires :{" "}
                                </span>
                                <span className="textnormal" style={{ color: "#9c1b31", fontFamily: "Roboto", fontSize: 16 }}>
                                  78€
                                </span>{" "}
                                <span className="textnormal" style={{ color: "#000000", fontFamily: "Roboto", fontSize: 16 }}>
                                  par jour pour minimum 1 semaine. Réduction de 10% si plus d'un mois.
                                </span>
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ color: "#000000", fontFamily: "Roboto", fontSize: 16 }}>
                                  En Moyenne saison :{" "}
                                </span>
                                <span className="textnormal" style={{ color: "#9c1b31", fontFamily: "Roboto", fontSize: 16 }}>
                                  72€
                                </span>{" "}
                                <span className="textnormal" style={{ color: "#000000", fontFamily: "Roboto", fontSize: 16 }}>
                                  par jour pour minimum 6 nuits. Réduction de 10% si plus d'un mois.
                                </span>
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ color: "#000000", fontFamily: "Roboto", fontSize: 16 }}>
                                  En Basse saison :{" "}
                                </span>
                                <span className="textnormal" style={{ color: "#9c1b31", fontFamily: "Roboto", fontSize: 16 }}>
                                  70€
                                </span>{" "}
                                <span className="textnormal" style={{ color: "#000000", fontFamily: "Roboto", fontSize: 16 }}>
                                  par jour pour minimum 6 nuits. Réduction de 10% si plus d'un mois.
                                </span>
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                en novembre, décembre, janvier et février un supplément de 20€ par semaine est demandé pour le chauffage.
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Service nettoyage en fin de location : 45€
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Caution : 150€ payable le jour de l'arrivée, et remboursée au plus tard 8 jours après la fin de location.
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Acompte pour la réservation : 30 % de la somme totale.
                              </p>
                              <p>
                                IBAN : FR76 2823 3000 0108 7308 5606 219 &nbsp; &nbsp;
                              </p>
                              <p>Code BIC/SWIFT : REVOFRP2</p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ fontFamily: "Roboto", fontSize: 16, fontWeight: "bold" }} className="textnormal">
                                  <span style={{ fontSize: 18, fontFamily: "Roboto", fontWeight: "bold" }} className="textnormal">
                                    PLUS DE 2 PERSONNES
                                  </span>
                                </span>
                                <span style={{ fontFamily: "Roboto", fontSize: 16 }} className="textnormal">
                                  : Par personne supplémentaire, 10€ / jour de supplément. Avec un maximum de 2 personnes supplémentaires
                                </span>
                              </p>
                              {/* Image */}
                              <div className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp" style={{ borderRadius: 10, overflow: "hidden" }}>
                                <img loading="lazy" role="presentation" style={{ display: "block", cursor: "pointer" }} src="/assets/i284571214521237393.jpg" height="195" width="680" onClick={() => openLightbox(images, 0)} />
                              </div>
                              {/* English translations */}
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ fontSize: 24, color: "rgb(156, 27, 49)", fontFamily: "Roboto" }} className="textnormal mobile-oversized">
                                  More than 2 people
                                </span>
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ color: "rgb(156, 27, 49)", fontFamily: "Roboto", fontSize: 16 }} className="textnormal">
                                  Per additional person, 10 € / day of supplement. With up to 2 additional people
                                </span>
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ color: "#9c1b31", fontFamily: "Roboto", fontSize: 16 }}>
                                  Price for two people In high season + school holidays: 78 € per day for a minimum of 1 week. 10% reduction if more than one month.
                                </span>
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ color: "#9c1b31", fontFamily: "Roboto", fontSize: 16 }}>
                                  In Mid season, 72 € per day for minimum 5 nights. 10% reduction if more than one month.
                                </span>
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ color: "#9c1b31", fontFamily: "Roboto", fontSize: 16 }}>
                                  In low season: 70 € per day. for a minimum of 5 nights. 10% reduction if more than one month.
                                </span>
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ color: "rgb(156, 27, 49)", fontFamily: "Roboto", fontSize: 16 }} className="textnormal">
                                  In November, December, January and February a supplement of 20 € per week is requested for heating.
                                </span>
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span className="textnormal" style={{ color: "#9c1b31", fontFamily: "Roboto", fontSize: 16 }}>
                                  Cleaning service at the end of the rental: 45 €
                                </span>
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ color: "rgb(156, 27, 49)", fontFamily: "Roboto", fontSize: 16 }} className="textnormal">
                                  Deposit: 150 € payable on the day of arrival, and refunded no later than 8 days after the end of the rental.
                                </span>
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ color: "rgb(156, 27, 49)", fontFamily: "Roboto", fontSize: 16 }} className="textnormal">
                                  Deposit for booking: 30% of the total amount. (*)Reduction of 10% if more than a month
                                </span>
                              </p>
                              {/* IMPORTANT section */}
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17, marginTop: 38 }}>
                                IMPORTANT:&nbsp;
                              </p>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                <span style={{ fontSize: 18, color: "rgb(0, 0, 0)", fontFamily: "Roboto" }} className="textnormal">
                                  <span style={{ fontFamily: "Roboto", fontSize: 18, fontWeight: "bold" }} className="textnormal">
                                    Lorsque vous avez besoin de renseignements, allez sur la page&nbsp;
                                    <Link
                                      to="/contact"
                                      style={{
                                        color: "#0066cc",
                                        fontFamily: "Roboto",
                                        fontSize: 18,
                                        fontWeight: "bold",
                                        textDecoration: "none",
                                      }}
                                      onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                                      onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                                      onClick={() => window.scrollTo(0, 0)}
                                    >
                                      CONTACT
                                    </Link>
                                  </span>
                                </span>
                              </p>
                              {/* Commentaires section */}
                              <h3 className="textheading3 mobile-oversized" style={{ textAlign: "left", lineHeight: 1.17, marginTop: 51 }}>
                                Commentaires
                              </h3>
                              {/* Comment 1 - Bragard */}
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                <p className="textnormal" style={{ fontSize: 20, lineHeight: 1.1 }}>Bragard</p>
                                <p className="textnormal" style={{ lineHeight: 1.17 }}>
                                  <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16, fontStyle: "italic", paddingLeft: 16 }}>
                                    29.05.2022 19:38
                                  </span>
                                </p>
                              </div>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Bonjour. Votre gîte est-il toujours disponible début juillet? La location pourrait-elle prendre cours du lundi 4 juillet au dimanche 10 juillet par exemple? Quel serait le prix pour 2 personnes?
                              </p>
                              {/* Comment 2 - CREUSOT Isabelle */}
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                <p className="textnormal" style={{ fontSize: 20, lineHeight: 1.1 }}>CREUSOT Isabelle</p>
                                <p className="textnormal" style={{ lineHeight: 1.17 }}>
                                  <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16, fontStyle: "italic", paddingLeft: 16 }}>
                                    09.03.2021 20:33
                                  </span>
                                </p>
                              </div>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Bonjour, je suis intéressée par votre location du lundi 26 avril au samedi 1er mai pour 3 adultes non-fumeurs et sans animaux. Est-ce possible et à quel tarif ? Bonne soirée.
                              </p>
                              {/* Reply from Anne */}
                              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                                <img
                                  src="data:image/svg+xml,%3csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' transform='rotate(180)' fill='rgb(0%2c 0%2c 0)'%3e%3ctitle%3ereply%3c/title%3e%3cpath d='M32 20q0 2.976-2.272 8.064-0.064 0.128-0.192 0.416t-0.224 0.544-0.256 0.384q-0.192 0.32-0.48 0.32t-0.416-0.192-0.16-0.448q0-0.16 0.032-0.48t0.064-0.416q0.096-1.216 0.096-2.208 0-1.792-0.32-3.232t-0.864-2.464-1.44-1.792-1.888-1.248-2.368-0.768-2.752-0.384-3.136-0.096h-4v4.576q0 0.448-0.32 0.8t-0.832 0.352-0.8-0.352l-9.12-9.152q-0.352-0.32-0.352-0.8t0.352-0.8l9.12-9.152q0.352-0.32 0.8-0.32t0.832 0.32 0.32 0.8v4.576h4q12.736 0 15.616 7.2 0.96 2.4 0.96 5.952z'/%3e%3c/svg%3e"
                                  alt=""
                                  style={{ height: 20, width: 20, opacity: 1 }}
                                />
                                <p className="textnormal" style={{ fontSize: 20, lineHeight: 1.1 }}>Anne</p>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16, fontStyle: "italic", marginLeft: "auto", paddingLeft: 16 }}>
                                  09.03.2021 22:05
                                </span>
                              </div>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17, paddingLeft: 26 }}>
                                Bonsoir, le gîte est libre du lundi 26 avril à partir de 16h jusqu'au 1er mai 10h.&nbsp;
                              </p>
                              {/* Comment 3 - Robbe Vincent */}
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                <p className="textnormal" style={{ fontSize: 20, lineHeight: 1.1 }}>Robbe Vincent</p>
                                <p className="textnormal" style={{ lineHeight: 1.17 }}>
                                  <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16, fontStyle: "italic", paddingLeft: 16 }}>
                                    28.01.2021 20:14
                                  </span>
                                </p>
                              </div>
                              <p className="textnormal" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                Bonjour , je suis interessé par votre location du 07/08 au 14/08 pour 2 personnes , pourrai je connaitre le tarif ? Crdlt
                              </p>
                              {/* Reply from Anne */}
                              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                                <img
                                  src="data:image/svg+xml,%3csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' transform='rotate(180)' fill='rgb(0%2c 0%2c 0)'%3e%3ctitle%3ereply%3c/title%3e%3cpath d='M32 20q0 2.976-2.272 8.064-0.064 0.128-0.192 0.416t-0.224 0.544-0.256 0.384q-0.192 0.32-0.48 0.32t-0.416-0.192-0.16-0.448q0-0.16 0.032-0.48t0.064-0.416q0.096-1.216 0.096-2.208 0-1.792-0.32-3.232t-0.864-2.464-1.44-1.792-1.888-1.248-2.368-0.768-2.752-0.384-3.136-0.096h-4v4.576q0 0.448-0.32 0.8t-0.832 0.352-0.8-0.352l-9.12-9.152q-0.352-0.32-0.352-0.8t0.352-0.8l9.12-9.152q0.352-0.32 0.8-0.32t0.832 0.32 0.32 0.8v4.576h4q12.736 0 15.616 7.2 0.96 2.4 0.96 5.952z'/%3e%3c/svg%3e"
                                  alt=""
                                  style={{ height: 20, width: 20, opacity: 1 }}
                                />
                                <p className="textnormal" style={{ fontSize: 20, lineHeight: 1.1 }}>Anne</p>
                                <span className="textnormal" style={{ fontFamily: "Roboto", fontSize: 16, fontStyle: "italic", marginLeft: "auto", paddingLeft: 16 }}>
                                  29.01.2021 09:04
                                </span>
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
            </div>
          </div>
        </div>
      </div>
      {LightboxModal}
    </div>
  );
}
