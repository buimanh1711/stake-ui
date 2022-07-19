import { Connector, type ConnectorData, ProviderNotFoundError } from "vue-dapp";

export interface NaboxProvider extends NaboxEthereumProvider {
  isMetaMask: boolean;
  providers?: NaboxProvider[];
  isConnected: () => boolean;
  request: (request: {
    method: string;
    params?: any[] | undefined;
  }) => Promise<any>;
}

export interface NaboxEthereumProvider {
  isMetaMask?: boolean;

  once(eventName: string | symbol, listener: (...args: any[]) => void): this;

  on(eventName: string | symbol, listener: (...args: any[]) => void): this;

  off(eventName: string | symbol, listener: (...args: any[]) => void): this;

  addListener(
    eventName: string | symbol,
    listener: (...args: any[]) => void
  ): this;

  removeListener(
    eventName: string | symbol,
    listener: (...args: any[]) => void
  ): this;

  removeAllListeners(event?: string | symbol): this;
}

export interface Window {
  ethereum?: NaboxProvider;
}

export type NaboxConnectorOptions = {
  appUrl?: string;
};

export class NaboxConnectorImpl extends Connector<
  NaboxProvider,
  NaboxConnectorOptions
> {
  isActive = true;

  readonly name = "nabox";

  #provider?: NaboxProvider;

  constructor(options: NaboxConnectorOptions = {}) {
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

  async connect(): Promise<Required<ConnectorData>> {
    const provider = await this.getProvider();

    this.#provider = provider;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const accounts = await nabox.createSession();

    const account = accounts[0];

    return {
      account,
      provider,
    };
  }

  async getProvider() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof window !== "undefined" && typeof window.nabox !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return window.NaboxWallet as NaboxProvider;
    }
    throw new ProviderNotFoundError();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onAccountsChanged(handler: (accounts: string[]) => any): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChainChanged(handler: (chainId: number) => any): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onDisconnect(handler: (...args: any[]) => any): void {}

  switchChain(chainId: number): Promise<void> {
    return Promise.resolve(undefined);
  }

  disconnect(): Promise<void> {
    return Promise.resolve(undefined);
  }
}
