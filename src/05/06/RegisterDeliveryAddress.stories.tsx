import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { RegisterDeliveryAddress } from "./RegisterDeliveryAddress";

export default {
  component: RegisterDeliveryAddress,
} as ComponentMeta<typeof RegisterDeliveryAddress>;

type Story = ComponentStoryObj<typeof RegisterDeliveryAddress>;

export const Default: Story = {};
