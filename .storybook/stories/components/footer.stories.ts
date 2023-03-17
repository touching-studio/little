import {Meta, StoryObj} from '@storybook/web-components';
import {html, render} from 'lit';

import '../../../src/components/footer';

export default {
  title: 'Components/Footer',
  component: 'little-footer',
  render: () => '',
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
  render: (args) => html`
    <style>
      little-footer {
        outline: 1px solid grey;
      }

      .item {
        outline: 1px solid black;
        height: 50px;
      }

      .mock-content {
        background: bisque;
        height: 150vh;
      }
    </style>
    <div class="mock-content"></div>
    <little-footer>
      <div class="item" slot="before">logo</div>
      <div class="item">content</div>
      <div class="item" slot="after">...</div>
    </little-footer>
  `,
};

export const Relative: StoryObj = {
  name: 'Relative',
  args: {},
  render: (args) => html`
    <style>
      little-footer {
        outline: 1px solid grey;
      }

      .item {
        outline: 1px solid black;
        height: 50px;
      }

      .mock-content {
        background: bisque;
        height: 150vh;
      }
    </style>
    <div class="mock-content"></div>
    <little-footer position="relative">
      <div class="item" slot="before">logo</div>
      <div class="item">content</div>
      <div class="item" slot="after">...</div>
    </little-footer>
  `,
};

export const Sticky: StoryObj = {
  name: 'Sticky',
  args: {},
  render: (args) => html`
    <style>
      little-footer {
        outline: 1px solid grey;
      }

      .item {
        outline: 1px solid black;
        height: 50px;
      }

      .mock-content {
        background: bisque;
        height: 150vh;
      }
    </style>
    <div class="mock-content"></div>
    <little-footer position="sticky">
      <div class="item" slot="before">logo</div>
      <div class="item">content</div>
      <div class="item" slot="after">...</div>
    </little-footer>
  `,
};

export const Absolute: StoryObj = {
  name: 'Absolute',
  args: {},
  render: (args) => html`
    <style>
      little-footer {
        outline: 1px solid grey;
      }

      .item {
        outline: 1px solid black;
        height: 50px;
      }

      .mock-content {
        background: bisque;
        height: 150vh;
      }
    </style>
    <div class="mock-content"></div>
    <little-footer position="absolute">
      <div class="item" slot="before">logo</div>
      <div class="item">content</div>
      <div class="item" slot="after">...</div>
    </little-footer>
  `,
};

export const Fixed: StoryObj = {
  name: 'Fixed',
  args: {},
  render: (args) => html`
    <style>
      little-footer {
        outline: 1px solid grey;
      }

      .item {
        outline: 1px solid black;
        height: 50px;
      }

      .mock-content {
        background: bisque;
        height: 150vh;
      }
    </style>
    <div class="mock-content"></div>
    <little-footer position="fixed">
      <div class="item" slot="before">logo</div>
      <div class="item">content</div>
      <div class="item" slot="after">...</div>
    </little-footer>
  `,
};
