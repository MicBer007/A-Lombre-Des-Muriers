export default function Columns({ count, widths = Array(count).fill(1), gap = 10, stackOnMobile = true, children }) {
  return (
    <div
      className={`columns${stackOnMobile ? " columns--stack" : ""}`}
      style={{ "--columns-template": widths.map((w) => `minmax(0, ${w}fr)`).join(" "), gap }}
    >
      {children}
    </div>
  );
}
