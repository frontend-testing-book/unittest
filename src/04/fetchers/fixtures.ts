import type { Article, Articles, HttpError } from "./type";

export const httpError: HttpError = {
  err: { message: "internal server error" },
};

export const getMyArticlesData: Articles = {
  articles: [
    {
      id: "howto-testing-with-typescript",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["testing"],
      title: "TypeScript を使ったテストの書き方",
      body: "テストを書く時、TypeScript を使うことで、テストの保守性が向上します…",
    },
    {
      id: "nextjs-link-component",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["nextjs"],
      title: "Next.js の Link コンポーネント",
      body: "Next.js の画面遷移には、Link コンポーネントを使用します…",
    },
    {
      id: "react-component-testing-with-jest",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["testing", "react"],
      title: "Jest ではじめる React のコンポーネントテスト",
      body: "Jest は単体テストとして、UIコンポーネントのテストが可能です…",
    },
  ],
};

export const postMyArticleData: Article = {
  id: "xxxxxxx-123456",
  createdAt: "2022-07-19T22:38:41.005Z",
  tags: ["testing", "react"],
  title: "Jest ではじめる React のコンポーネントテスト",
  body: "Jest は単体テストとして、UIコンポーネントのテストが可能です。",
};
