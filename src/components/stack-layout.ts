import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

type Orientation = "horizontal" | "vertical";

/**
 * A stack layout that organizes child views in a one-dimensional stack, either horizontally or vertically.
 * Similar to [this](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/layouts/stacklayout).
 */
@customElement("little-stack-layout")
export class StackLayout extends LitElement {
  static styles = css`
    :host {
      display: flex;
      position: relative;
      height: 100%;
      width: 100%;
    }

    slot {
      position: relative;
      display: block;
      height: 100%;
      width: 100%;
    }
  `;

  /**
   * The orientation of the stack layout. The avaiable values are `"horizontal"` and `"vertical"`.
   * Default to `"vertical"`.
   * @type {'horizontal' | 'vertical'}
   */
  @property() orientation: Orientation = "vertical";

  /**
   * The amount of space between each child view (in CSS format, ex. `"0"`, `"5px"`, `"1em"`, or `"5%"`).
   * Default to `"0"`;
   */
  @property() spacing: string = "0";

  /**
   * If `true` or presents, it would allow overflow in the stack orientaion if needed;
   * if `false` or not presents, the overflow will be disabled.
   */
  @property({ type: Boolean }) overflow = false;

  render() {
    return html`<slot></slot>`;
  }
}
