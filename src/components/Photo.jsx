import { useEffect, useRef } from "react";
import Figure from "./Figure";
import { useLightbox } from "./Lightbox";

/**
 * A content photo with rounded corners, an optional caption, and lightbox support.
 *
 * caption: a string, or an array of lines (e.g. one per language, French first).
 * width/height: the displayed size in px; the photo shrinks to fit narrower containers.
 * align: "left" | "center" | "right".
 */
export default function Photo({ src, alt, height, lightbox = true, ...figureProps }) {
  const { caption, width } = figureProps;
  const lines = caption == null ? [] : [caption].flat();
  const altText = alt ?? lines.join(" — ");
  const imageRef = useRef(null);
  const { register, open } = useLightbox();

  useEffect(() => {
    if (!lightbox) return;
    return register({ element: imageRef.current, src, alt: altText, caption: lines });
  }, [lightbox, register, src, altText, caption]);

  const image = <img ref={imageRef} loading="lazy" src={src} alt={altText} width={width} height={height} />;

  return (
    <Figure {...figureProps}>
      {lightbox ? (
        <button type="button" tabIndex={-1} onClick={() => open(imageRef.current)} aria-label={`Agrandir la photo${altText ? ` : ${altText}` : ""}`}>
          {image}
        </button>
      ) : (
        image
      )}
    </Figure>
  );
}

