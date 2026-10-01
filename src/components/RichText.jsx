/**
 * @typedef {object} TextStyle
 * @property {boolean} [bold]
 * @property {boolean} [italic]
 * @property {boolean} [underline]
 * @property {string} [color] Any CSS color, e.g. "rgb(21, 94, 171)".
 * @property {number} [fontSize] In px.
 * @property {"left" | "center" | "right"} [align] Only applies to blocks.
 *
 * @typedef {object} Span
 * @property {string} text "\n" starts a new line.
 * @property {string} [link] The URL the text links to.
 * @property {TextStyle} [style]
 *
 * @typedef {{ type: "heading" | "paragraph", spans: Span[], style?: TextStyle, spaceBefore?: number }} TextBlock
 * @typedef {{ type: "list", items: { spans: Span[] }[], columns?: number, style?: TextStyle, spaceBefore?: number }} ListBlock
 * @typedef {TextBlock | ListBlock} Block
 *
 * @typedef {object} RichTextContent
 * @property {Block[]} blocks
 */

/** @param {{ content: RichTextContent }} props */
export default function RichText({ content }) {
  return (
    <div className="rich-text">
      {content.blocks.map((block, index) => (
        <RichBlock key={index} block={block} />
      ))}
    </div>
  );
}

function RichBlock({ block }) {
  const style = { ...cssStyle(block.style), marginTop: block.spaceBefore };
  switch (block.type) {
    case "heading":
      return <h2 style={style}><Spans spans={block.spans} /></h2>;
    case "paragraph":
      return <p style={style}><Spans spans={block.spans} /></p>;
    case "list":
      return (
        <ul style={{ ...style, "--columns": block.columns }}>
          {block.items.map((item, index) => (
            <li key={index}><Spans spans={item.spans} /></li>
          ))}
        </ul>
      );
  }
}

function Spans({ spans }) {
  return spans.map(({ text, link, style }, index) =>
    link ? (
      <a key={index} href={link} style={linkStyle(style)}>{text}</a>
    ) : (
      <span key={index} style={cssStyle(style)}>{text}</span>
    )
  );
}

// Links always underline on hover; underline: false only hides the underline until then.
function linkStyle(style = {}) {
  const { underline, ...rest } = style;
  return { ...cssStyle(rest), "--link-underline": underline === false ? "transparent" : undefined };
}

function cssStyle(style = {}) {
  const { bold, italic, underline, color, fontSize, align } = style;
  return {
    fontWeight: bold === undefined ? undefined : bold ? "bold" : "normal",
    fontStyle: italic === undefined ? undefined : italic ? "italic" : "normal",
    textDecoration: underline === undefined ? undefined : underline ? "underline" : "none",
    color,
    fontSize,
    textAlign: align,
  };
}
