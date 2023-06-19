export type ItemProps = {
  id: string;
  title: string;
  body: string;
};

async function postLog() {
  // ログを送信する処理
  return;
}

export const ArticleListItem = ({ id, title, body }: ItemProps) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
      <a
        style={{
          color: "blue",
          cursor: "pointer",
          textDecoration: "underline",
        }}
        onClick={async (event) => {
          const href = `/articles/${id}`;
          event.preventDefault();
          await postLog();
          window.location.assign(href);
        }}
      >
        もっと見る
      </a>
    </li>
  );
};
