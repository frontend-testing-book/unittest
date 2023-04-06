import { render, screen } from "@testing-library/react";
import { PastDeliveryAddress } from "./PastDeliveryAddress";

describe("過去のお届け先", () => {
  const options = [
    {
      id: "xxx",
      value: "xxx",
      children: "〒167-0051 東京都杉並区荻窪1-00-00",
    },
  ];
  test("disabled={true} の場合、combobox も非活性", () => {
    render(<PastDeliveryAddress disabled={true} options={options} />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });
});
