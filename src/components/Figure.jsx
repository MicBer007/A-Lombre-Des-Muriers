export default function Figure({
  caption,
  width,
  radius = 10,
  shadow = false,
  border = false,
  align = "left",
  className = "",
  style,
  children,
}) {
  const lines = caption == null ? [] : [caption].flat();
  const frameClass = ["photo-frame", shadow && "photo-frame--shadow", border && "photo-frame--border"]
    .filter(Boolean)
    .join(" ");

  return (
    <figure
      className={`photo photo--${align} ${className}`}
      style={{ "--photo-width": width ? `${width}px` : undefined, "--photo-radius": `${radius}px`, ...style }}
    >
      <div className={frameClass}>{children}</div>
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
