import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { RegisterAddress } from "./RegisterAddress";

export default {
  component: RegisterAddress,
} as ComponentMeta<typeof RegisterAddress>;

type Story = ComponentStoryObj<typeof RegisterAddress>;

export const Default: Story = {};
