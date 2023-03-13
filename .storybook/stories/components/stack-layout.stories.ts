import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../../src/components/stack-layout";

export default {
  title: "Components/Stack Layout",
  component: "little-stack-layout",
  parameters: {
    layout: "centered",
  },
  args: {
    testItemCount: 3,
  },
  argTypes: {},
  render: (args) => html`
    <style>
      little-stack-layout {
        outline: 1px solid grey;
      }

      .item {
        outline: 1px solid black;
        height: 100px;
        width: 300px;
      }
    </style>
    <little-stack-layout orientation=${args.orientation}>
      ${new Array(args.testItemCount ?? 1)
        .fill(true)
        .map((_, i) => html`<div class="item">${i}</div>`)}
    </little-stack-layout>
  `,
} as Meta;

export const Horizontal: StoryObj = {
  name: "Horizontal",
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: StoryObj = {
  name: "Vertical",
  args: {
    orientation: "vertical",
  },
};
