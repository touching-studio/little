import {css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {HeaderFooter} from '../utils/header-footer';

@customElement('little-footer')
export class Footer extends HeaderFooter {
  static styles = [
    ...HeaderFooter.styles,
    css`
      :host {
        bottom: 0;
      }
    `,
  ];
}
