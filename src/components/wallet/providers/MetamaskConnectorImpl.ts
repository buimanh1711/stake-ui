import { MetaMaskConnector, type MetaMaskConnectorOptions } from "vue-dapp";

export class MetamaskConnectorImpl extends MetaMaskConnector {
  isActive = true;

  constructor(options: MetaMaskConnectorOptions = {}) {
    super(options);
    this.check().then(() => {});
  }

  async check(): Promise<void> {
    try {
      await this.getProvider();
    } catch (e) {
      this.isActive = false;
    }
  }
}
