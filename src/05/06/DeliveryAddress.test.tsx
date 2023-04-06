import { render, screen } from "@testing-library/react";
import { DeliveryAddress } from "./DeliveryAddress";

describe("お届け先", () => {
  test("タイトル", () => {
    render(<DeliveryAddress />);
    expect(screen.getByText("お届け先")).toBeInTheDocument();
  });
  test("タイトルが変更できる", () => {
    render(<DeliveryAddress title="新しいお届け先" />);
    expect(screen.getByText("新しいお届け先")).toBeInTheDocument();
  });
  test("郵便番号", () => {
    render(<DeliveryAddress />);
    expect(
      screen.getByRole("textbox", { name: "郵便番号" })
    ).toBeInTheDocument();
  });
  test("都道府県", () => {
    render(<DeliveryAddress />);
    expect(
      screen.getByRole("textbox", { name: "都道府県" })
    ).toBeInTheDocument();
  });
  test("市区町村", () => {
    render(<DeliveryAddress />);
    expect(
      screen.getByRole("textbox", { name: "市区町村" })
    ).toBeInTheDocument();
  });
  test("番地番号", () => {
    render(<DeliveryAddress />);
    expect(
      screen.getByRole("textbox", { name: "番地番号" })
    ).toBeInTheDocument();
  });
});
