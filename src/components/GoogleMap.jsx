export default function GoogleMap({ src, height = 376, title = "Carte Google Maps" }) {
  return (
    <iframe
      className="map"
      src={src}
      title={title}
      width="100%"
      height={height}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
