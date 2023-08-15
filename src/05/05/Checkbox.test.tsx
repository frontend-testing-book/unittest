import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

xtest("defaultChecked: true を指定すると、チェックされている", () => {
  render(<Checkbox name="test" defaultChecked={true} />);
  expect(screen.getByRole("checkbox")).toBeChecked();
});
