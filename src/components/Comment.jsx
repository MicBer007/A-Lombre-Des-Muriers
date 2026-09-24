/**
 * A guest comment card. Anne's replies pass `reply` to sit indented under the comment they answer.
 *
 * date: display text, e.g. "13 fév 2022".
 */
export default function Comment({ author, date, reply = false, children }) {
  return (
    <article className={reply ? "comment comment--reply" : "comment"}>
      <header className="comment-header">
        <span className="comment-author">{author}</span>
        <span className="comment-date">{date}</span>
      </header>
      {children && <p className="comment-text">{children}</p>}
    </article>
  );
}

/** Groups comments so they sit close together within a page. */
export function CommentList({ children }) {
  return <div className="comment-list">{children}</div>;
}
