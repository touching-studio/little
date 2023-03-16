import { Meta, StoryObj } from "@storybook/web-components";
import { html, render } from "lit";

import "../../../src/components/bar";
import "../../../src/components/stack-layout";

export default {
  title: "Components/Bar",
  component: "little-bar",
  parameters: {
    layout: "centered",
  },
  render: () => "",
} as Meta;

export const Default: StoryObj = {
  name: "Default",
  args: {
    orientation: "horizontal",
  },
  render: (args) => html`
    <style>
      little-bar {
        outline: 1px solid grey;
        width: 500px;
      }

      .item {
        outline: 1px solid black;
        height: 50px;
      }
    </style>
    <little-bar>
      <div class="item" slot="before">before</div>
      <div class="item">main</div>
      <div class="item" slot="after">after</div>
    </little-bar>
  `,
};

export const Vertical: StoryObj = {
  name: "Vertical",
  args: {},
  render: (args) => html`
    <style>
      little-bar {
        outline: 1px solid grey;
        height: 500px;
      }

      .item {
        outline: 1px solid black;
        width: 50px;
        height: 100%;
      }
    </style>
    <little-bar orientation="vertical">
      <div class="item" slot="before">before</div>
      <div class="item">main</div>
      <div class="item" slot="after">after</div>
    </little-bar>
  `,
};

export const VerticalOnlyMain: StoryObj = {
  name: "Vertical (only main content)",
  args: {},
  render: (args) => html`
    <style>
      little-bar {
        outline: 1px solid grey;
        height: 500px;
      }

      .item {
        outline: 1px solid black;
        width: 50px;
        height: 100%;
      }
    </style>
    <little-bar orientation="vertical">
      <div class="item">main</div>
    </little-bar>
  `,
};

export const Horizontal: StoryObj = {
  name: "Horizontal",
  args: {},
  render: (args) => html`
    <style>
      little-bar {
        outline: 1px solid grey;
        width: 500px;
      }

      .item {
        outline: 1px solid black;
        height: 50px;
      }
    </style>
    <little-bar>
      <div class="item" slot="before">before</div>
      <div class="item">main</div>
      <div class="item" slot="after">after</div>
    </little-bar>
  `,
};

export const HorizontalOnlyMain: StoryObj = {
  name: "Horizontal (only main content)",
  args: {},
  render: (args) => html`
    <style>
      little-bar {
        outline: 1px solid grey;
        width: 500px;
      }

      .item {
        outline: 1px solid black;
        height: 50px;
      }
    </style>
    <little-bar>
      <div class="item">main</div>
    </little-bar>
  `,
};

export const WithStackLayout: StoryObj = {
  name: "Bar with stack layout",
  args: {},
  render: (args) => html`
    <style>
      little-bar {
        outline: 1px solid grey;
        width: 500px;
      }

      .item {
        outline: 1px solid black;
        height: 50px;
        width: auto;
        margin: 5px;
      }
    </style>
    <little-bar>
      <div class="item" slot="before">before</div>
      <little-stack-layout class="item" orientation="horizontal" overflow>
        ${new Array(10)
          .fill(true)
          .map((_, i) => html`<div class="item">item ${i}</div>`)}
      </little-stack-layout>
      <div class="item" slot="after">after</div>
    </little-bar>
  `,
};
