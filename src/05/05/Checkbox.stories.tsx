import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

type Story = ComponentStoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};
