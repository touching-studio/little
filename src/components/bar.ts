import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

type Orientation = 'horizontal' | 'vertical';

/**
 * A bar container that can be either horizontal or vertical.
 * @slot - This slot is for the main content.
 * @slot before - Content in this slot would be put before the main content.
 * @slot after - Content in this slot would be put after the main content.
 */
@customElement('little-bar')
export class SgBar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      position: relative;
      height: auto;
      width: auto;
      overflow: hidden;
    }

    :host([orientation='vertical']) {
      flex-direction: column;
    }

    slot {
      display: block;
      position: relative;
    }

    [part~='before'],
    [part~='after'] {
      flex: 0 0 auto;
    }

    [part~='main'] {
      flex: 1;
    }
  `;

  /**
   * The orientation of the stack layout. The avaiable values are `"horizontal"` and `"vertical"`.
   * Default to `"horizontal"`.
   * @type {'horizontal' | 'vertical'}
   */
  @property({reflect: true}) orientation: Orientation = 'horizontal';

  render() {
    return html`
      <slot part="before" name="before"></slot>
      <slot part="main"></slot>
      <slot part="after" name="after"></slot>
    `;
  }
}
