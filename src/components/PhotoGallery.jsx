import { useLightbox } from "./Lightbox";

export default function PhotoGallery({ images }) {
  const { openLightbox, LightboxModal } = useLightbox();
  return (
    <>
      <div className="photo-gallery">
        {images.map((image, index) => (
          <figure key={image.src}>
            <button type="button" onClick={() => openLightbox(images, index)} aria-label={`Agrandir : ${image.alt}`}>
              <img loading="lazy" src={image.src} alt={image.alt} />
            </button>
            <figcaption className="textnormal">{image.alt}</figcaption>
          </figure>
        ))}
      </div>
      {LightboxModal}
    </>
  );
}
