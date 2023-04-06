import { render, screen } from "@testing-library/react";
import { Articles } from "./Articles";

xtest("読み込み中の場合「..loading」が表示される", () => {
  render(<Articles items={[]} isLoading={true} />);
  expect(screen.getByText("...loading")).toBeInTheDocument();
});

xtest("一覧要素が空の場合「投稿記事がありません」が表示される", () => {
  render(<Articles items={[]} isLoading={false} />);
  expect(screen.getByText("投稿記事がありません")).toBeInTheDocument();
});

test("一覧要素がある場合、一覧が表示される", () => {
  const items = [
    { id: 1, title: "Testing Next.js" },
    { id: 2, title: "Storybook play function" },
    { id: 3, title: "Visual Regression Testing " },
  ];
  render(<Articles items={items} isLoading={false} />);
  expect(screen.getByRole("list")).toBeInTheDocument();
});
