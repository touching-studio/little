import {css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {HeaderFooter} from '../utils/header-footer';

@customElement('little-header')
export class Header extends HeaderFooter {
  static styles = [
    ...HeaderFooter.styles,
    css`
      :host {
        top: 0;
      }
    `,
  ];
}
