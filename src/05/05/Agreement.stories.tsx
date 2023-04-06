import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Agreement } from "./Agreement";

export default {
  component: Agreement,
} as ComponentMeta<typeof Agreement>;

type Story = ComponentStoryObj<typeof Agreement>;

export const Default: Story = {};
