import { greet } from "./greet";

jest.mock("./greet");

test("挨拶を返さない（本来の実装ではない）", () => {
  expect(greet("Taro")).toBe(undefined);
});
