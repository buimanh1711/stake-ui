import { WalletConnectConnector, type WalletConnectOptions } from "vue-dapp";

export class WalletConnectConnectorImpl extends WalletConnectConnector {
  isActive = true;
  constructor(options: WalletConnectOptions = {}) {
    super(options);
  }
}
