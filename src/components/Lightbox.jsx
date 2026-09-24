import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

function fullImageSrc(src) {
  if (!src || !src.startsWith("/assets/") || src.startsWith("/assets/full/")) {
    return src;
  }
  return src.replace("/assets/", "/assets/full/");
}

const CLICK_SCALE = 2.5;
const MAX_SCALE = 5;

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const midpoint = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

// Click to zoom on a point (mouse), pinch to zoom (touch), drag to pan while zoomed.
function ZoomableImage({ src, alt }) {
  const areaRef = useRef(null);
  const pointers = useRef(new Map());
  const gesture = useRef(null);
  const viewRef = useRef({ scale: 1, x: 0, y: 0 });
  const [view, setViewState] = useState(viewRef.current);
  const [interacting, setInteracting] = useState(false);

  // Keep the zoomed image covering the viewing area.
  const setView = ({ scale, x, y }) => {
    const { width, height } = areaRef.current.getBoundingClientRect();
    const next = {
      scale,
      x: Math.min(0, Math.max(width - width * scale, x)),
      y: Math.min(0, Math.max(height - height * scale, y)),
    };
    viewRef.current = next;
    setViewState(next);
  };

  const pointerPosition = (e) => {
    const rect = areaRef.current.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const startGesture = () => {
    const [a, b] = pointers.current.values();
    gesture.current = { view: viewRef.current, a, b, moved: false };
  };

  const onPointerDown = (e) => {
    areaRef.current.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, pointerPosition(e));
    startGesture();
    setInteracting(true);
  };

  const onPointerMove = (e) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, pointerPosition(e));
    const start = gesture.current;
    const [a, b] = pointers.current.values();
    if (b && start.b) {
      const scale = Math.min(MAX_SCALE, Math.max(1, (start.view.scale * distance(a, b)) / distance(start.a, start.b)));
      const from = midpoint(start.a, start.b);
      const to = midpoint(a, b);
      const ratio = scale / start.view.scale;
      setView({ scale, x: to.x - (from.x - start.view.x) * ratio, y: to.y - (from.y - start.view.y) * ratio });
      start.moved = true;
    } else if (!b) {
      if (distance(a, start.a) > 5) start.moved = true;
      if (start.moved) setView({ ...start.view, x: start.view.x + a.x - start.a.x, y: start.view.y + a.y - start.a.y });
    }
  };

  const onPointerUp = (e) => {
    if (!pointers.current.delete(e.pointerId)) return;
    if (pointers.current.size > 0) return startGesture();
    setInteracting(false);
    if (e.pointerType !== "mouse" || gesture.current.moved) return;
    if (viewRef.current.scale > 1) return setView({ scale: 1, x: 0, y: 0 });
    const { width, height } = areaRef.current.getBoundingClientRect();
    const point = pointerPosition(e);
    setView({ scale: CLICK_SCALE, x: width / 2 - point.x * CLICK_SCALE, y: height / 2 - point.y * CLICK_SCALE });
  };

  return (
    <div
      ref={areaRef}
      className="photo-image-area"
      style={{ cursor: view.scale > 1 ? "zoom-out" : "zoom-in" }}
      onClick={(e) => e.stopPropagation()}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        style={{
          transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
          transition: interacting ? "none" : "transform 0.2s ease",
        }}
      />
    </div>
  );
}

const LightboxContext = createContext(null);

// Photos register themselves here; opening one browses every registered photo in page order.
export function LightboxProvider({ children }) {
  const photosRef = useRef(new Set());
  const triggerRef = useRef(null);
  const [lightbox, setLightbox] = useState({ open: false, index: 0, images: [] });

  const register = useCallback((photo) => {
    photosRef.current.add(photo);
    return () => photosRef.current.delete(photo);
  }, []);

  const open = useCallback((element) => {
    const images = [...photosRef.current].sort((a, b) =>
      a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    );
    triggerRef.current = document.activeElement;
    setLightbox({ open: true, images, index: images.findIndex((photo) => photo.element === element) });
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
  const caption = current?.caption.length ? current.caption : [current?.alt].filter(Boolean);

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

          <ZoomableImage key={currentSrc} src={currentSrc} alt={current?.alt || ""} />

          {/* Caption */}
          {caption.length > 0 && (
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
              {caption.map((line) => <div key={line}>{line}</div>)}
            </div>
          )}
        </div>,
        document.body
      )
    : null;

  return (
    <LightboxContext.Provider value={{ register, open }}>
      {children}
      {LightboxModal}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  return useContext(LightboxContext);
}
