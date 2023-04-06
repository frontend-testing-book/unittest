import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { InputAccount } from "./InputAccount";

export default {
  component: InputAccount,
} as ComponentMeta<typeof InputAccount>;

type Story = ComponentStoryObj<typeof InputAccount>;

export const Default: Story = {};
