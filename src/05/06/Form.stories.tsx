import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { deliveryAddresses } from "./fixtures";
import { Form } from "./Form";

export default {
  component: Form,
} as ComponentMeta<typeof Form>;

type Story = ComponentStoryObj<typeof Form>;

export const NoDeliveryAddresses: Story = {
  storyName: "過去のお届け先がない場合",
  args: { deliveryAddresses: [] },
};

export const HasDeliveryAddresses: Story = {
  storyName: "過去のお届け先がある場合",
  args: { deliveryAddresses },
};
