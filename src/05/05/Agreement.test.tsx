import { render, screen } from "@testing-library/react";
import { Agreement } from "./Agreement";

test("fieldset のアクセシブルネームは、legend を引用している", () => {
  render(<Agreement />);
  expect(
    screen.getByRole("group", { name: "利用規約の同意" })
  ).toBeInTheDocument();
});

test("チェックボックスはチェックが入っていない", () => {
  render(<Agreement />);
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});

test("利用規約へのリンクがある", () => {
  render(<Agreement />);
  expect(screen.getByRole("link")).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveTextContent("利用規約");
  expect(screen.getByRole("link")).toHaveAttribute("href", "/terms");
  expect(screen.getByRole("link", { name: "利用規約" })).toHaveAttribute(
    "href",
    "/terms"
  );
});

test("Snapshot: 利用規約の同意が表示される", () => {
  const { container } = render(<Agreement />);
  expect(container).toMatchSnapshot();
});
