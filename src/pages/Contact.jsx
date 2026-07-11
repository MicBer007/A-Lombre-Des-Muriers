import Sidebar from "../components/Sidebar";
import { useLightbox } from "../components/Lightbox";

export default function Contact() {
  const { openLightbox, LightboxModal } = useLightbox();
  const images = [];
  images.push({ src: "/assets/i284571214498199093.jpg", alt: "" });

  return (
    <div className="Preview_row__3Fkye row Preview_noSideMargin__2I-_n" style={{ width: "100%" }}>
      <div data-kind="SECTION" className="Preview_componentWrapper__2i4QI" style={{ width: "100%" }}>
        <div id="PageSection" className="Preview_block__16Zmu">
          <div className="StripPreview_backgroundComponent__3YmQM Background_backgroundComponent__3_1Ea hasChildren" style={{ backgroundColor: "transparent" }}>
            <div className="Preview_column__1KeVx col" style={{ width: 1200, margin: "0 auto" }}>
              <div className="Preview_row__3Fkye row" style={{ width: 1200 }}>
                <div className="Preview_componentWrapper__2i4QI" style={{ width: 1130, marginLeft: 35 }}>
                  <div className="Preview_block__16Zmu">
                    <div className="BackgroundPreview_backgroundComponent__3Dr5e BackgroundPreview_bgHeight__3dD2e hasChildren" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
                      <div className="Preview_column__1KeVx col">
                        <div className="Preview_row__3Fkye row" style={{ width: 1130 }}>
                          {/* Content column */}
                          <div className="Preview_column__1KeVx col" style={{ width: 870, float: "left" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "70px 20px 30px" }}>
                              {/* EMAIL FORM HIDDEN - no working email provider */}
                              <h3
                                className="textheading3 mobile-oversized"
                                style={{ textAlign: "left", lineHeight: 1.17 }}
                              >
                                Pour me contacter :
                              </h3>
                              <p
                                className="textnormal"
                                style={{ textAlign: "left", lineHeight: 1.17 }}
                              >
                                Par mail : alombredesmuriers@gmail.com
                              </p>
                              <p
                                className="textnormal"
                                style={{ textAlign: "left", lineHeight: 1.17 }}
                              >
                                Par téléphone et WhatsApp : 0033 (0) 6 26 03 04 19
                              </p>
                              <p
                                className="textnormal"
                                style={{ textAlign: "left", lineHeight: 1.17 }}
                              >
                                Je ne réponds pas aux numéros inconnus, donc uniquement messages oraux ou écrits et je vous rappellerai.
                              </p>
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d444.7182970338744!2d4.032107489728119!3d44.0605804456429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sza!4v1773379472864!5m2!1sen!2sza"
                                width="100%"
                                height="376"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                              <div
                                className="Mobile_imageComponent__QXWk1 Mobile_cropMode__cLuJp"
                                style={{ borderRadius: 10, overflow: "hidden" }}
                              >
                                <img
                                    loading="lazy"
                                    role="presentation"
                                    style={{ display: "block", cursor: "pointer" }}
                                    src="/assets/i284571214498199093.jpg"
                                    height="461"
                                    width="680"
                                    onClick={() => openLightbox(images, 0)}
                                  />
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
