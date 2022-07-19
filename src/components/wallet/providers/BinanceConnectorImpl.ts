import { Connector, type ConnectorData, ProviderNotFoundError } from "vue-dapp";

export interface BinanceProvider {
  isMetaMask: boolean;
  providers?: BinanceProvider[];
  isConnected: () => boolean;
  request: (request: {
    method: string;
    params?: any[] | undefined;
  }) => Promise<any>;
}

export class BinanceConnectorImpl extends Connector<BinanceProvider, any> {
  isActive = true;

  readonly name = "binance";

  constructor() {
    super(null);
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

    const accounts = await provider.request({
      method: "eth_requestAccounts",
      params: [{ eth_accounts: {} }],
    });

    const account = accounts[0];

    return {
      account,
      provider,
    };
  }

  async getProvider() {
    if (
      typeof window !== "undefined" &&
      // @ts-ignore
      typeof window.BinanceChain !== "undefined"
    ) {
      // @ts-ignore
      return window.BinanceChain as BinanceProvider;
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
