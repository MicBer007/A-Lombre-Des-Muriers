import Figure from "./Figure";

export default function Video({ src, height, ...figureProps }) {
  return (
    <Figure {...figureProps}>
      {/* #t=0.001 makes iOS show the first frame before playback starts. */}
      <video
        src={`${src}#t=0.001`}
        width={figureProps.width}
        height={height}
        preload="metadata"
        autoPlay
        muted
        loop
        controls
        playsInline
        controlsList="nodownload"
      />
    </Figure>
  );
}
