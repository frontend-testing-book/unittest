import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { DeliveryAddress } from "./DeliveryAddress";

export default {
  component: DeliveryAddress,
} as ComponentMeta<typeof DeliveryAddress>;

type Story = ComponentStoryObj<typeof DeliveryAddress>;

export const Default: Story = {};
