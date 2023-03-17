import {css, html, LitElement} from 'lit';
import {property} from 'lit/decorators.js';

type PositionType = 'absolute' | 'fixed' | 'relative' | 'sticky';

export abstract class HeaderFooter extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        position: relative;
        left: 0;
        right: 0;
        height: fit-content;
        width: 100%;
        z-index: 1;
      }

      :host([position='absolute']) {
        position: absolute;
      }

      :host([position='fixed']) {
        position: fixed;
      }

      :host([position='sticky']) {
        position: sticky;
      }
    `,
  ];

  @property({attribute: 'position', reflect: true})
  position: PositionType = 'sticky';

  render() {
    return html`
      <little-bar orientation="horizontal">
        <slot name="before" slot="before"></slot>
        <slot></slot>
        <slot name="after" slot="after"></slot>
      </little-bar>
    `;
  }
}
