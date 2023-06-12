import { checkLength } from ".";
import * as Fetchers from "../fetchers";
import { postMyArticle } from "../fetchers";
import { httpError, postMyArticleData } from "../fetchers/fixtures";
import { ArticleInput } from "../fetchers/type";

jest.mock("../fetchers");

function mockPostMyArticle(input: ArticleInput, status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }
  try {
    checkLength(input.title);
    checkLength(input.body);
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockResolvedValue({ ...postMyArticleData, ...input });
  } catch (err) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }
}

function inputFactory(input?: Partial<ArticleInput>) {
  return {
    tags: ["testing"],
    title: "TypeScript を使ったテストの書き方",
    body: "テストを書く時、TypeScript を使うことで、テストの保守性が向上します。",
    ...input,
  };
}

test("バリデーションに成功した場合、成功レスポンスが返る", async () => {
  // バリデーションに通過する入力値を用意
  const input = inputFactory();
  // 入力値を含んだ成功レスポンスが返るよう、モックを施す
  const mock = mockPostMyArticle(input);
  // テスト対象の関数に、input を与えて実行
  const data = await postMyArticle(input);
  // 取得したデータに、入力内容が含まれているかを検証
  expect(data).toMatchObject(expect.objectContaining(input));
  // モック関数が呼び出されたかを検証
  expect(mock).toHaveBeenCalled();
});

test("バリデーションに失敗した場合、reject される", async () => {
  expect.assertions(2);
  // バリデーションに通過しない入力値を用意
  const input = inputFactory({ title: "", body: "" });
  // 入力値を含んだ成功レスポンスが返るよう、モックを施す
  const mock = mockPostMyArticle(input);
  // バリデーションに通過せず reject されるかを検証
  await postMyArticle(input).catch((err) => {
    // エラーオブジェクトをもって reject されたことを検証
    expect(err).toMatchObject({ err: { message: expect.anything() } });
    // モック関数が呼び出されたことを検証
    expect(mock).toHaveBeenCalled();
  });
});

test("データ取得に失敗した場合、reject される", async () => {
  expect.assertions(2);
  // バリデーションに通過する入力値を用意
  const input = inputFactory();
  // 失敗レスポンスが返るようモックを施す
  const mock = mockPostMyArticle(input, 500);
  // reject されるかを検証
  await postMyArticle(input).catch((err) => {
    // エラーオブジェクトをもって reject されたことを検証
    expect(err).toMatchObject({ err: { message: expect.anything() } });
    // モック関数が呼び出されたことを検証
    expect(mock).toHaveBeenCalled();
  });
});
