/* eslint-disable import/no-unresolved */
import { html, LitElement } from 'lit';

class SWCTest extends LitElement {
  async connectedCallback() {
    super.connectedCallback();
    await this.init();
  }

  async init() {
    // fetch needed components
    await import('@spectrum-web-components/combobox@0.42.5/sp-combobox.js');
    await import('@spectrum-web-components/table@0.42.5/sp-table.js');
    await import('@spectrum-web-components/table@0.42.5/sp-table-head.js');
    await import('@spectrum-web-components/table@0.42.5/sp-table-head-cell.js');
    await import('@spectrum-web-components/table@0.42.5/sp-table-cell.js');
    await import('@spectrum-web-components/alert-dialog@0.42.5/sp-alert-dialog.js');
    await import('@spectrum-web-components/textfield@0.42.5/sp-textfield.js');
    await import('@spectrum-web-components/dialog@0.42.5/sp-dialog-wrapper.js');
    await import('@spectrum-web-components/overlay@0.42.5/overlay-trigger.js');
  }

  render() {
    return html`
      <sp-button target="_blank">
        Click me
      </sp-button>
      <sp-textfield
        id="name-1"
        placeholder="Enter your name"
        valid
        value="My Name">
      </sp-textfield>`;
  }
}

customElements.define('swc-test', SWCTest);
