import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

function fullImageSrc(src) {
  if (!src || !src.startsWith("/assets/") || src.startsWith("/assets/full/")) {
    return src;
  }
  return src.replace("/assets/", "/assets/full/");
}

export function useLightbox() {
  const triggerRef = useRef(null);
  const imageAreaRef = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  const [lightbox, setLightbox] = useState({ open: false, index: 0, images: [] });

  const openLightbox = useCallback((images, index) => {
    setZoomed(false);
    triggerRef.current = document.activeElement;
    setLightbox({ open: true, images, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, open: false }));
  }, []);

  const navigate = useCallback((dir) => {
    setZoomed(false);
    imageAreaRef.current?.scrollTo(0, 0);
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + dir + prev.images.length) % prev.images.length,
    }));
  }, []);

  useEffect(() => {
    if (!lightbox.open) return;
    const previousFocus = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handler = (e) => {
      if (e.key === "Tab") {
        const buttons = [...document.querySelectorAll(".photo-lightbox button")];
        const index = buttons.indexOf(document.activeElement);
        e.preventDefault();
        buttons[(index + (e.shiftKey ? -1 : 1) + buttons.length) % buttons.length]?.focus();
      }
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [lightbox.open, closeLightbox, navigate]);

  const current = lightbox.images[lightbox.index];
  const currentSrc = fullImageSrc(current?.src);

  const LightboxModal = lightbox.open
    ? createPortal(
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photos du gîte"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            cursor: "pointer",
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            style={{
              position: "absolute",
              top: 15,
              right: 25,
              color: "#fff",
              fontSize: 36,
              fontWeight: "bold",
              cursor: "pointer",
              lineHeight: 1,
              userSelect: "none",
              zIndex: 100000,
            }}
            aria-label="Fermer la photo"
            autoFocus
            onClick={closeLightbox}
          >
            &times;
          </button>

          {/* Nav arrows */}
          {lightbox.images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Photo précédente"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 10,
                  transform: "translateY(-50%)",
                  color: "#fff",
                  fontSize: 50,
                  fontWeight: "bold",
                  cursor: "pointer",
                  userSelect: "none",
                  padding: "10px",
                  zIndex: 100000,
                }}
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              >
                &lsaquo;
              </button>
              <button
                type="button"
                aria-label="Photo suivante"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 10,
                  transform: "translateY(-50%)",
                  color: "#fff",
                  fontSize: 50,
                  fontWeight: "bold",
                  cursor: "pointer",
                  userSelect: "none",
                  padding: "10px",
                  zIndex: 100000,
                }}
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
              >
                &rsaquo;
              </button>
            </>
          )}

          <button
            type="button"
            className="photo-zoom-button"
            aria-label={zoomed ? "Réduire la photo" : "Zoomer sur la photo"}
            aria-pressed={zoomed}
            onClick={(e) => {
              e.stopPropagation();
              setZoomed(!zoomed);
              imageAreaRef.current?.scrollTo(0, 0);
            }}
          >
            {zoomed ? "−" : "+"}
          </button>
          <div
            ref={imageAreaRef}
            className={`photo-image-area${zoomed ? " is-zoomed" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={currentSrc} alt={current?.alt || ""} />
          </div>

          {/* Caption */}
          {current?.alt && (
            <div
              style={{
                position: "absolute",
                bottom: 16,
                left: 0,
                right: 0,
                textAlign: "center",
                color: "#fff",
                fontSize: 14,
                fontStyle: "italic",
                padding: "0 60px",
              }}
            >
              {current.alt}
            </div>
          )}
        </div>,
        document.body
      )
    : null;

  return { openLightbox, LightboxModal };
}
