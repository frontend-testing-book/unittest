import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Form } from "./Form";

export default {
  component: Form,
  args: { name: "taro" },
} as ComponentMeta<typeof Form>;

type Story = ComponentStoryObj<typeof Form>;

export const Default: Story = {};
