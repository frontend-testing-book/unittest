import { fireEvent, render, screen } from "@testing-library/react";
import { RegisterDeliveryAddress } from "./RegisterDeliveryAddress";

describe("新しいお届け先を登録しますか？", () => {
  test("ラジオボタンをクリックすると、コールバックハンドラが呼ばれる", () => {
    const fn = jest.fn();
    render(<RegisterDeliveryAddress onChange={fn} />);
    fireEvent.click(screen.getByLabelText("いいえ"));
    expect(fn).toHaveBeenCalledWith(false);
    fireEvent.click(screen.getByLabelText("はい"));
    expect(fn).toHaveBeenCalledWith(true);
  });
});
