import { getMyProfile } from "../fetchers";

export async function getGreet() {
  // テストしたいのはここのデータ取得と
  const data = await getMyProfile();
  // 取得したデータをここで連結する処理
  if (!data.name) {
    return `Hello, anonymous user!`;
  }
  return `Hello, ${data.name}!`;
}
