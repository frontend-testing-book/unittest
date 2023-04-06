import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ArticleList } from "./ArticleList";
import { items } from "./fixture";

export default {
  component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

type Story = ComponentStoryObj<typeof ArticleList>;

export const Default: Story = {
  args: { items },
};

export const NoItem: Story = {
  args: { items: [] },
};
