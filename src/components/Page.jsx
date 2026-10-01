export default function Page({ gap = 40, padding = "40px 20px", children }) {
  return (
    <div className="page">
      <div className="page-content" style={{ "--page-gap": `${gap}px`, padding }}>
        {children}
      </div>
    </div>
  );
}
