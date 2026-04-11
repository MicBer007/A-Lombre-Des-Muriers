import { Link, useLocation } from "react-router-dom";

export default function HeaderNav() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  return (
    <div
      data-id="EF4D0BDF-F200-4C15-B5C5-F17F1B079508"
      data-kind="SECTION"
      style={{ width: "100%", minHeight: 197, left: "auto", marginTop: 0, marginLeft: 0 }}
      className="Preview_componentWrapper__2i4QI"
    >
      <div
        id="Header"
        data-in-template="true"
        data-id="EF4D0BDF-F200-4C15-B5C5-F17F1B079508"
        data-kind="Block"
        data-specific-kind="SECTION"
        data-pin="0"
        data-stretch="true"
        className="Preview_block__16Zmu"
      >
        <div
          className="StripPreview_backgroundComponent__3YmQM Background_backgroundComponent__3_1Ea hasChildren"
          style={{
            backgroundColor: "transparent",
            borderWidth: "1px 1px 1px 1px",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            minHeight: 197,
            paddingBottom: 0,
          }}
          data-width="100"
          data-height="197"
        >
          <div
            className="Preview_column__1KeVx col"
            style={{ minHeight: "100%", width: 1200, margin: "0 auto" }}
          >
            <div className="Preview_row__3Fkye row" style={{ minHeight: 197, width: 1200 }}>
              <div
                data-id="D3DA77C2-B7ED-4AF4-BA0A-26DC8AC83C3F"
                data-kind="BACKGROUND"
                style={{ width: 1130, minHeight: 197, marginTop: 0, marginLeft: 35 }}
                className="Preview_componentWrapper__2i4QI"
              >
                <div
                  data-in-template="true"
                  data-id="D3DA77C2-B7ED-4AF4-BA0A-26DC8AC83C3F"
                  data-kind="Block"
                  data-specific-kind="BACKGROUND"
                  className="Preview_block__16Zmu"
                >
                  <div
                    className="BackgroundPreview_backgroundComponent__3Dr5e BackgroundPreview_bgHeight__3dD2e hasChildren"
                    style={{
                      backgroundColor: "rgba(246, 246, 246, 1)",
                      borderColor: "rgba(0, 0, 0, 1)",
                      borderStyle: "none",
                      borderWidth: "0px 0px 0px 0px",
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0,
                      minHeight: 197,
                      paddingBottom: 0,
                    }}
                    data-width="980"
                    data-height="197"
                  >
                    <div className="Preview_column__1KeVx col" style={{ minHeight: "100%" }}>
                      <div className="Preview_row__3Fkye row" style={{ minHeight: 119, width: 1130 }}>
                        <div
                          className="Preview_column__1KeVx col"
                          style={{ minHeight: 119, width: 111, float: "left" }}
                        >
                          <div
                            data-id="A094A3DA-6572-41D9-9DB4-483B452BDF91"
                            data-kind="IMAGE"
                            style={{ width: 91, minHeight: 84, marginTop: 34, marginLeft: 20 }}
                            className="Preview_componentWrapper__2i4QI"
                          >
                            <div
                              data-in-template="true"
                              data-id="A094A3DA-6572-41D9-9DB4-483B452BDF91"
                              data-kind="Component"
                              data-specific-kind="IMAGE"
                              className="Preview_component__SbiKo"
                            >
                              <div
                                className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp"
                                style={{
                                  borderColor: "rgba(0, 0, 0, 1)",
                                  borderStyle: "none",
                                  borderWidth: "0px 0px 0px 0px",
                                  overflow: "hidden",
                                }}
                                data-width="91"
                                data-height="84"
                              >
                                <Link
                                  to="/"
                                  target="_self"
                                  alt=""
                                  data-stop-propagation="true"
                                >
                                  <img
                                    loading="lazy"
                                    role="presentation"
                                    data-scalestrategy="crop"
                                    style={{ marginTop: 0, marginLeft: 0, display: "block", margin: 0 }}
                                    src="/assets/i284571214503930606.jpg"
                                    srcSet={`/assets/i284571214503930606.jpg /assets/i284571214503930606.jpg 2x, /assets/i284571214503930606.jpg 3x`}
                                    height="84"
                                    width="91"
                                    data-width="91"
                                    data-height="84"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div style={{ clear: "both" }}></div>
                        </div>
                        <div
                          className="Preview_column__1KeVx col"
                          style={{ minHeight: 119, width: 869, float: "left" }}
                        >
                          <div className="Preview_row__3Fkye row" style={{ minHeight: 93, width: 869 }}>
                            <div
                              data-id="C9388B55-D78B-4821-819F-819FC9F5B164"
                              data-kind="TEXT"
                              style={{
                                width: 853,
                                minHeight: 67,
                                marginTop: 26,
                                marginLeft: 16,
                              }}
                              className="Preview_componentWrapper__2i4QI"
                            >
                              <div
                                data-in-template="true"
                                data-id="C9388B55-D78B-4821-819F-819FC9F5B164"
                                data-kind="Component"
                                data-specific-kind="TEXT"
                                className="Preview_component__SbiKo text-align-center"
                              >
                                <div
                                  data-mve-font-change="0"
                                  className="styles_contentContainer__lrPIa textnormal styles_text__3jGMu"
                                >
                                  <p>
                                    <Link
                                      className="textnormal mobile-oversized"
                                      to="/"
                                      style={{
                                        textAlign: "left",
                                        paddingTop: 6,
                                        paddingBottom: 6,
                                        color: "rgb(71, 71, 71)",
                                        fontFamily: "Roboto",
                                        fontSize: 47,
                                        letterSpacing: 0,
                                        fontWeight: "normal",
                                        fontStyle: "normal",
                                        textDecoration: "none solid rgb(71, 71, 71)",
                                        textShadow: "none",
                                        textTransform: "none",
                                        direction: "ltr",
                                      }}
                                    >
                                      A l'ombre des Muriers
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="Preview_row__3Fkye row" style={{ minHeight: 26, width: 869 }}>
                            <div
                              data-id="21121485-0228-4165-A833-9CE4592EB724"
                              data-kind="TEXT"
                              style={{ width: 853, minHeight: 26, marginTop: 0, marginLeft: 16 }}
                              className="Preview_componentWrapper__2i4QI"
                            >
                              <div
                                data-in-template="true"
                                data-id="21121485-0228-4165-A833-9CE4592EB724"
                                data-kind="Component"
                                data-specific-kind="TEXT"
                                className="Preview_component__SbiKo text-align-center"
                              >
                                <div
                                  data-mve-font-change="0"
                                  className="styles_contentContainer__lrPIa textnormal styles_text__3jGMu"
                                >
                                  <p
                                    className="textnormal mobile-oversized"
                                    style={{
                                      textAlign: "left",
                                      paddingTop: 2,
                                      paddingBottom: 2,
                                      color: "rgb(71, 71, 71)",
                                      fontSize: 22,
                                      lineHeight: 1,
                                    }}
                                  >
                                    Gîte situé dans le Gard à quelques Kilometres d'Anduze
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div style={{ clear: "both" }}></div>
                        </div>
                        <div style={{ clear: "both" }}></div>
                      </div>
                      <div className="Preview_row__3Fkye row" style={{ minHeight: 78, width: 1130 }}>
                        <div
                          data-id="645DCD7A-E1DC-4DD8-ABF9-EF8E21C6A04B"
                          data-kind="BACKGROUND"
                          style={{ width: 1130, minHeight: 51, marginTop: 27, marginLeft: 0 }}
                          className="Preview_componentWrapper__2i4QI"
                        >
                          <div
                            data-in-template="true"
                            data-id="645DCD7A-E1DC-4DD8-ABF9-EF8E21C6A04B"
                            data-kind="Block"
                            data-specific-kind="BACKGROUND"
                            className="Preview_mobileHide__9T929 Preview_block__16Zmu"
                          >
                            <div
                              className="BackgroundPreview_backgroundComponent__3Dr5e BackgroundPreview_bgHeight__3dD2e hasChildren"
                              style={{
                                backgroundColor: "rgba(223, 223, 223, 1)",
                                borderColor: "rgba(0, 0, 0, 1)",
                                borderStyle: "none",
                                borderWidth: "0px 0px 0px 0px",
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 0,
                                minHeight: 51,
                                paddingBottom: 0,
                              }}
                              data-width="980"
                              data-height="51"
                            >
                              <div className="Preview_column__1KeVx col" style={{ minHeight: "100%" }}>
                                <div
                                  className="Preview_row__3Fkye row"
                                  style={{ minHeight: 51, width: 1130 }}
                                >
                                  <div
                                    data-id="08853971-B27F-4C3E-80AE-02F36415F418"
                                    data-kind="MENU"
                                    style={{
                                      width: 1130,
                                      minHeight: 51,
                                      marginTop: 0,
                                      marginLeft: 0,
                                    }}
                                    className="Preview_componentWrapper__2i4QI"
                                  >
                                    <div
                                      data-in-template="true"
                                      data-id="08853971-B27F-4C3E-80AE-02F36415F418"
                                      data-kind="Component"
                                      data-specific-kind="MENU"
                                      className="Preview_mobileHide__9T929 Preview_component__SbiKo"
                                    >
                                      <style>{`
                                        .menu ul.menu1 > li > a.dropdown-only:hover span { text-decoration: none !important; cursor: default; }
                                        .menu ul.menu1 > li > a.level-0:not(.expandable):hover span { text-decoration: underline; }
                                      `}</style>
                                      <div
                                        className="menu moreEnabled menuself menuhorizontal dropdown menuhorizontalleft menuverticalmiddle White"
                                        style={{ width: 1130, height: 51 }}
                                      >
                                        <ul className="menu1">
                                          <li className={isActive("/") ? "selected" : undefined}>
                                            <Link
                                              className={`expandable level-0${isActive("/") ? " selected" : ""}`}
                                              to="/"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              <span>Accueil</span>
                                            </Link>
                                            <ul className="menu1">
                                              <li className={`menuhidden${isActive("/terrasse") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/terrasse") ? " selected" : ""}`}
                                                  to="/terrasse"
                                                >
                                                  <span>Terrasse</span>
                                                </Link>
                                                <div className="divider"></div>
                                              </li>
                                              <li className={`menuhidden${isActive("/jardin") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/jardin") ? " selected" : ""}`}
                                                  to="/jardin"
                                                >
                                                  <span>Jardin</span>
                                                </Link>
                                                <div className="divider"></div>
                                              </li>
                                              <li className={`menuhidden${isActive("/parking") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/parking") ? " selected" : ""}`}
                                                  to="/parking"
                                                >
                                                  <span>Emplacement parking</span>
                                                </Link>
                                                <div className="divider"></div>
                                              </li>
                                              <li className={`menuhidden${isActive("/photos-region") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/photos-region") ? " selected" : ""}`}
                                                  to="/photos-region"
                                                >
                                                  <span>Photos de la région</span>
                                                </Link>
                                              </li>
                                            </ul>
                                            <div className="divider"></div>
                                          </li>
                                          <li className={isActive("/interieur") ? "selected" : undefined}>
                                            <a
                                              className="expandable level-0 dropdown-only"
                                              href="javascript:void(0)"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              <span>Intérieur du gîte</span>
                                            </a>
                                            <ul className="menu1">
                                              <li className={`menuhidden${isActive("/interieur/piece-a-vivre") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/interieur/piece-a-vivre") ? " selected" : ""}`}
                                                  to="/interieur/piece-a-vivre"
                                                >
                                                  <span>Pièce à vivre</span>
                                                </Link>
                                                <div className="divider"></div>
                                              </li>
                                              <li className={`menuhidden${isActive("/interieur/chambre") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/interieur/chambre") ? " selected" : ""}`}
                                                  to="/interieur/chambre"
                                                >
                                                  <span>Chambre</span>
                                                </Link>
                                                <div className="divider"></div>
                                              </li>
                                              <li className={`menuhidden${isActive("/interieur/salle-de-bain") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/interieur/salle-de-bain") ? " selected" : ""}`}
                                                  to="/interieur/salle-de-bain"
                                                >
                                                  <span>Salle de bain</span>
                                                </Link>
                                              </li>
                                            </ul>
                                            <div className="divider"></div>
                                          </li>
                                          <li className={isActive("/informations") ? "selected" : undefined}>
                                            <a
                                              className="expandable level-0 dropdown-only"
                                              href="javascript:void(0)"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              <span>Informations utiles</span>
                                            </a>
                                            <ul className="menu1">
                                              <li className={`menuhidden${isActive("/informations/calendrier") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/informations/calendrier") ? " selected" : ""}`}
                                                  to="/informations/calendrier"
                                                >
                                                  <span>Calendrier</span>
                                                </Link>
                                                <div className="divider"></div>
                                              </li>
                                              <li className={`menuhidden${isActive("/informations/tarifs") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/informations/tarifs") ? " selected" : ""}`}
                                                  to="/informations/tarifs"
                                                >
                                                  <span>Tarifs</span>
                                                </Link>
                                                <div className="divider"></div>
                                              </li>
                                              <li className={`menuhidden${isActive("/informations/contrat") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/informations/contrat") ? " selected" : ""}`}
                                                  to="/informations/contrat"
                                                >
                                                  <span>Contrat</span>
                                                </Link>
                                                <div className="divider"></div>
                                              </li>
                                              <li className={`menuhidden${isActive("/informations/commentaires") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/informations/commentaires") ? " selected" : ""}`}
                                                  to="/informations/commentaires"
                                                >
                                                  <span>Commentaires</span>
                                                </Link>
                                                <div className="divider"></div>
                                              </li>
                                              <li className={`menuhidden${isActive("/informations/producteurs") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/informations/producteurs") ? " selected" : ""}`}
                                                  to="/informations/producteurs"
                                                >
                                                  <span>Producteurs</span>
                                                </Link>
                                              </li>
                                            </ul>
                                            <div className="divider"></div>
                                          </li>
                                          <li className={isActive("/a-visiter") ? "selected" : undefined}>
                                            <Link
                                              className={`level-0${isActive("/a-visiter") ? " selected" : ""}`}
                                              to="/a-visiter"
                                            >
                                              <span>A visiter</span>
                                            </Link>
                                            <div className="divider"></div>
                                          </li>
                                          <li className={isActive("/traductions") ? "selected" : undefined}>
                                            <a
                                              className="expandable level-0 dropdown-only"
                                              href="javascript:void(0)"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              <span>Traductions</span>
                                            </a>
                                            <ul className="menu1">
                                              <li className={`menuhidden${isActive("/traductions/english") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/traductions/english") ? " selected" : ""}`}
                                                  to="/traductions/english"
                                                >
                                                  <span>In English</span>
                                                </Link>
                                                <div className="divider"></div>
                                              </li>
                                              <li className={`menuhidden${isActive("/traductions/deutsch") ? " selected" : ""}`}>
                                                <Link
                                                  className={`level-1${isActive("/traductions/deutsch") ? " selected" : ""}`}
                                                  to="/traductions/deutsch"
                                                >
                                                  <span>Auf Deutsch</span>
                                                </Link>
                                              </li>
                                            </ul>
                                            <div className="divider"></div>
                                          </li>
                                          <li className={isActive("/contact") ? "selected" : undefined}>
                                            <Link
                                              className={`level-0${isActive("/contact") ? " selected" : ""}`}
                                              to="/contact"
                                            >
                                              <span>Contact</span>
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{ clear: "both" }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ clear: "both" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
