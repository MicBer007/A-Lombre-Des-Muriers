import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

export function useLightbox() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0, images: [] });

  const openLightbox = useCallback((images, index) => {
    setLightbox({ open: true, images, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, open: false }));
  }, []);

  const navigate = useCallback((dir) => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + dir + prev.images.length) % prev.images.length,
    }));
  }, []);

  useEffect(() => {
    if (!lightbox.open) return;
    document.body.style.overflow = "hidden";
    const handler = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox.open, closeLightbox, navigate]);

  const current = lightbox.images[lightbox.index];

  const LightboxModal = lightbox.open
    ? createPortal(
        <div
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
          <span
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
            onClick={closeLightbox}
          >
            &times;
          </span>

          {/* Nav arrows */}
          {lightbox.images.length > 1 && (
            <>
              <span
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
              </span>
              <span
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
              </span>
            </>
          )}

          <img
            src={current?.src}
            alt={current?.alt || ""}
            style={{
              width: "90vw",
              height: "90vh",
              objectFit: "contain",
              cursor: "default",
            }}
            onClick={(e) => e.stopPropagation()}
          />

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
