import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { PastDeliveryAddress } from "./PastDeliveryAddress";

export default {
  component: PastDeliveryAddress,
  args: {
    options: [
      {
        id: "xxx",
        value: "xxx",
        children: "〒167-0051 東京都杉並区荻窪1-00-00",
      },
    ],
  },
} as ComponentMeta<typeof PastDeliveryAddress>;

type Story = ComponentStoryObj<typeof PastDeliveryAddress>;

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Enabled: Story = {
  args: {
    disabled: false,
  },
};
