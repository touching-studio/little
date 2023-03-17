import {Meta, StoryObj} from '@storybook/web-components';
import {html, render} from 'lit';

import '../../../src/components/header';

export default {
  title: 'Components/Header',
  component: 'little-header',
  render: () => '',
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
  render: (args) => html`
    <style>
      little-header {
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
    <little-header>
      <div class="item" slot="before">logo</div>
      <div class="item">content</div>
      <div class="item" slot="after">...</div>
    </little-header>
    <div class="mock-content"></div>
  `,
};

export const Relative: StoryObj = {
  name: 'Relative',
  args: {},
  render: (args) => html`
    <style>
      little-header {
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
    <little-header position="relative">
      <div class="item" slot="before">logo</div>
      <div class="item">content</div>
      <div class="item" slot="after">...</div>
    </little-header>
    <div class="mock-content"></div>
  `,
};

export const Sticky: StoryObj = {
  name: 'Sticky',
  args: {},
  render: (args) => html`
    <style>
      little-header {
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
    <little-header position="sticky">
      <div class="item" slot="before">logo</div>
      <div class="item">content</div>
      <div class="item" slot="after">...</div>
    </little-header>
    <div class="mock-content"></div>
  `,
};

export const Absolute: StoryObj = {
  name: 'Absolute',
  args: {},
  render: (args) => html`
    <style>
      little-header {
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
    <little-header position="absolute">
      <div class="item" slot="before">logo</div>
      <div class="item">content</div>
      <div class="item" slot="after">...</div>
    </little-header>
    <div class="mock-content"></div>
  `,
};

export const Fixed: StoryObj = {
  name: 'Fixed',
  args: {},
  render: (args) => html`
    <style>
      little-header {
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
    <little-header position="fixed">
      <div class="item" slot="before">logo</div>
      <div class="item">content</div>
      <div class="item" slot="after">...</div>
    </little-header>
    <div class="mock-content"></div>
  `,
};
