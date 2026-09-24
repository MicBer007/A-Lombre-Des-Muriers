import { useEffect, useRef } from "react";
import { useLightbox } from "./Lightbox";

/**
 * A content photo with rounded corners, an optional caption, and lightbox support.
 *
 * caption: a string, or an array of lines (e.g. one per language, French first).
 * width/height: the displayed size in px; the photo shrinks to fit narrower containers.
 * align: "left" | "center" | "right".
 */
export default function Photo({
  src,
  alt,
  caption,
  width,
  height,
  radius = 10,
  shadow = false,
  border = false,
  align = "left",
  lightbox = true,
  className = "",
  style,
}) {
  const lines = caption == null ? [] : [caption].flat();
  const altText = alt ?? lines.join(" — ");
  const imageRef = useRef(null);
  const { register, open } = useLightbox();

  useEffect(() => {
    if (!lightbox) return;
    return register({ element: imageRef.current, src, alt: altText, caption: lines });
  }, [lightbox, register, src, altText, caption]);

  const frameClass = ["photo-frame", shadow && "photo-frame--shadow", border && "photo-frame--border"]
    .filter(Boolean)
    .join(" ");
  const image = <img ref={imageRef} loading="lazy" src={src} alt={altText} width={width} height={height} />;

  return (
    <figure
      className={`photo photo--${align} ${className}`}
      style={{ "--photo-width": width ? `${width}px` : undefined, "--photo-radius": `${radius}px`, ...style }}
    >
      <div className={frameClass}>
        {lightbox ? (
          <button type="button" onClick={() => open(imageRef.current)} aria-label={`Agrandir la photo${altText ? ` : ${altText}` : ""}`}>
            {image}
          </button>
        ) : (
          image
        )}
      </div>
      {lines.length > 0 && (
        <figcaption className="photo-caption">
          {lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </figcaption>
      )}
    </figure>
  );
}

/** Photos side by side on one row. */
export function PhotoRow({ children, gap = 10 }) {
  return (
    <div className="photo-row" style={{ gap }}>
      {children}
    </div>
  );
}
