{
  const {
    html,
  } = Polymer;
  /**
    `<cells-bitcoin-login>` Description.

    Example:

    ```html
    <cells-bitcoin-login></cells-bitcoin-login>
    ```

    ## Styling
    The following custom properties and mixins are available for styling:

    ### Custom Properties
    | Custom Property     | Selector | CSS Property | Value       |
    | ------------------- | -------- | ------------ | ----------- |
    | --cells-fontDefault | :host    | font-family  |  sans-serif |
    ### @apply
    | Mixins    | Selector | Value |
    | --------- | -------- | ----- |
    | --cells-bitcoin-login | :host    | {} |

    * @customElement
    * @polymer
    * @extends {Polymer.Element}
    * @demo demo/index.html
  */
  class CellsBitcoinLogin extends Polymer.Element {

    static get is() {
      return 'cells-bitcoin-login';
    }

    static get properties() {
      return {
        userName: String,
        userPassword: String,
        userId: String,
        gender: String,
        clearIcon: { type: String, value: 'coronita:close' },
        showPwdIcon: { type: String, value: 'coronita:visualize' },
        hidePwdIcon: { type: String, value: 'coronita:hide' },
        loggedIn: { type: Boolean, value: false },
        loggingInText: { type: String, value: 'Loading...'},
        loggedInText: { type: String, value: 'OK' },

        _loading: { type: Boolean, value: false },
        _loadingText: { type: String, computed: '_computeLoadingText(loggedIn)'}
      };
    }

    _onFormSubmit(evt) {
      this._loading = !this._loading;
      this.dispatchEvent(new CustomEvent('request-access', {
        composed: true,
        bubbles: true,
        detail: evt.detail
      }));
      console.log(evt.detail);
    }

    _computeLoadingText(loggedIn) {
      return loggedIn ? this.loggedInText : this.loggingInText;
    }
  }
  customElements.define(CellsBitcoinLogin.is, CellsBitcoinLogin);
}