import type { Article, ArticleInput, Articles, Profile } from "./type";

async function handleResponse(res: Response) {
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

const host = (path: string) => `https://myapi.testing.com${path}`;

export function getMyProfile(): Promise<Profile> {
  return fetch(host("/my/profile")).then(handleResponse);
}

export function getMyArticles(): Promise<Articles> {
  return fetch(host("/my/articles")).then(handleResponse);
}

export function postMyArticle(input: ArticleInput): Promise<Article> {
  return fetch(host("/my/articles"), {
    method: "POST",
    body: JSON.stringify(input),
  }).then(handleResponse);
}
