import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

type Orientation = 'horizontal' | 'vertical';

/**
 * A stack layout that organizes child views in a one-dimensional stack, either horizontally or vertically.
 * Similar to [this](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/layouts/stacklayout).
 */
@customElement('little-stack-layout')
export class StackLayout extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      height: auto;
      width: auto;
      overflow: hidden;
    }

    :host([overflow]) {
      overflow-y: auto;
    }

    :host([overflow][orientation='horizontal']) {
      overflow-y: hidden;
      overflow-x: auto;
    }

    slot {
      display: flex;
      position: relative;
      flex-direction: column;
      height: fit-content;
    }

    :host([orientation='horizontal']) slot {
      flex-direction: row;
      width: fit-content;
    }

    ::slotted(*) {
      flex: 0 0 auto;
      margin: var(--spacing) 0;
    }

    :host([orientation='horizontal'])::slotted(*) {
      margin: 0 var(--spacing);
    }
  `;

  /**
   * @internal
   */
  readonly #DEFAULT_SPACING = '0';

  /**
   * The orientation of the stack layout. The avaiable values are `"horizontal"` and `"vertical"`.
   * Default to `"vertical"`.
   * @type {'horizontal' | 'vertical'}
   */
  @property({reflect: true}) orientation: Orientation = 'vertical';

  /**
   * The amount of space between each child view (in CSS format, ex. `"0"`, `"5px"`, `"1em"`, or `"5%"`).
   * This is only supposed to be used and work properly if the child views' margins are not set.
   * Default to `"0"`;
   */
  get spacing(): string {
    return getComputedStyle(this).getPropertyValue('--spacing');
  }
  @property({reflect: true}) set spacing(value: string) {
    this.style.setProperty('--spacing', value);
  }

  /**
   * If `true` or presents, it would allow overflow in the stack orientaion if needed;
   * if `false` or not presents, the overflow will be disabled.
   */
  @property({type: Boolean, reflect: true}) overflow = false;

  constructor() {
    super();
    this.spacing = this.#DEFAULT_SPACING;
  }

  render() {
    return html`<slot></slot>`;
  }
}
