import { Meta, StoryObj } from "@storybook/web-components";
import { html, render } from "lit";

import "../../../src/components/stack-layout";

export default {
  title: "Components/Stack Layout",
  component: "little-stack-layout",
  render: () => "",
} as Meta;

export const Default: StoryObj = {
  name: "Default",
  args: {
    testItemCount: 3,
    orientation: "vertical",
    overflow: false,
    spacing: "5px",
  },
  render: (args) => html`
    <style>
      little-stack-layout {
        outline: 1px solid grey;
      }

      .item {
        outline: 1px solid black;
        height: 100px;
        width: 100px;
      }
    </style>
    <little-stack-layout
      orientation=${args.orientation}
      overflow=${args.overflow}
      spacing=${args.spacing}
    >
      ${new Array(args.testItemCount ?? 1)
        .fill(true)
        .map((_, i) => html`<div class="item">${i}</div>`)}
    </little-stack-layout>
  `,
};

export const Vertical: StoryObj = {
  name: "Vertical",
  args: {},
  render: (args) => html`
    <style>
      little-stack-layout {
        outline: 1px solid grey;
        width: 100%;
      }

      .item {
        outline: 1px solid black;
      }
    </style>
    <little-stack-layout>
      <div class="item" style="height: 50px;">item</div>
      <div class="item" style="height: 200px;">item</div>
      <div class="item" style="height: 500px;">item</div>
      <div class="item" style="height: 100px;">item</div>
      <div class="item" style="height: 50px;">item</div>
    </little-stack-layout>
  `,
};

export const VerticalOverflow: StoryObj = {
  name: "Vertical (with overflow)",
  args: {},
  render: (args) => html`
    <style>
      little-stack-layout {
        outline: 1px solid grey;
        width: 100%;
        height: 300px;
      }

      .item {
        outline: 1px solid black;
      }
    </style>
    <little-stack-layout overflow>
      <div class="item" style="height: 50px;">item</div>
      <div class="item" style="height: 200px;">item</div>
      <div class="item" style="height: 500px;">item</div>
      <div class="item" style="height: 100px;">item</div>
      <div class="item" style="height: 50px;">item</div>
    </little-stack-layout>
  `,
};

export const Horizontal: StoryObj = {
  name: "Horizontal",
  args: {},
  render: (args) => html`
    <style>
      little-stack-layout {
        outline: 1px solid grey;
        width: fit-content;
      }

      .item {
        outline: 1px solid black;
        height: 150px;
        margin: 5px;
      }
    </style>
    <little-stack-layout orientation="horizontal">
      ${new Array(5)
        .fill(true)
        .map(() => html`<div class="item" style="width: 150px;">item</div>`)}
    </little-stack-layout>
  `,
};

export const HorizontalOverflow: StoryObj = {
  name: "Horizontal (with overflow)",
  args: {},
  render: (args) => html`
    <style>
      little-stack-layout {
        outline: 1px solid grey;
      }

      .item {
        outline: 1px solid black;
        height: 150px;
        margin: 5px;
      }
    </style>
    <little-stack-layout orientation="horizontal" overflow>
      ${new Array(15)
        .fill(true)
        .map(() => html`<div class="item" style="width: 150px;">item</div>`)}
    </little-stack-layout>
  `,
};
