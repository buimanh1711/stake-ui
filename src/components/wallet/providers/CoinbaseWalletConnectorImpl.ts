import {
  type CoinbaseWalletConnectorOptions,
  CoinbaseWalletConnector,
} from "vue-dapp";

export class CoinbaseWalletConnectorImpl extends CoinbaseWalletConnector {
  isActive = true;
  constructor(options: CoinbaseWalletConnectorOptions) {
    super(options);
  }
}
