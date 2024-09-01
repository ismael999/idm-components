import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('idm-button')
export class IDMButton extends LitElement {
 
  @property()
  name = 'World';

  override render() {
    return html`<button>${this.name}</button>`;
  }
}