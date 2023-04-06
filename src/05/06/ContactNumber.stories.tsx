import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ContactNumber } from "./ContactNumber";

export default {
  component: ContactNumber,
} as ComponentMeta<typeof ContactNumber>;

type Story = ComponentStoryObj<typeof ContactNumber>;

export const Default: Story = {};
