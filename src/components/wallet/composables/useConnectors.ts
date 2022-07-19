import { MetamaskConnectorImpl } from "@/components/wallet/providers/MetamaskConnectorImpl";
import { BinanceConnectorImpl } from "@/components/wallet/providers/BinanceConnectorImpl";
import { WalletConnectConnectorImpl } from "@/components/wallet/providers/WalletConnectConnectorImpl";
import { CoinbaseWalletConnectorImpl } from "@/components/wallet/providers/CoinbaseWalletConnectorImpl";
import { NaboxConnectorImpl } from "@/components/wallet/providers/NaboxConnectorImpl";
import { AssureConnectConnector } from "@/components/wallet/providers/AssureConnectConnector";
import { RiceConnectConnectorImpl } from "@/components/wallet/providers/RiceConnectConnectorImpl";
import { OKXConnectorImpl } from "@/components/wallet/providers/OKXConnectorImpl";
import { BitKeepConnectorImpl } from "@/components/wallet/providers/BitKeepConnectorImpl";

export function useConnectors() {
  const connectors = [
    new MetamaskConnectorImpl(),
    new BinanceConnectorImpl(),
    new WalletConnectConnectorImpl({
      qrcode: true,
      rpc: {
        1: `https://eth-rpc.gateway.pokt.network/`,
        56: `https://bsc-dataseed.binance.org/`,
      },
    }),
    new CoinbaseWalletConnectorImpl({
      appName: "Palmare",
      jsonRpcUrl: `https://bsc-dataseed.binance.org/`,
    }),
    new NaboxConnectorImpl(),
    new AssureConnectConnector({
      qrcode: true,
      rpc: {
        1: `https://eth-rpc.gateway.pokt.network/`,
        56: `https://bsc-dataseed.binance.org/`,
      },
      qrcodeModalOptions: {
        desktopLinks: [],
      },
    }),
    new RiceConnectConnectorImpl({
      qrcode: true,
      rpc: {
        1: `https://eth-rpc.gateway.pokt.network/`,
        56: `https://bsc-dataseed.binance.org/`,
      },
      qrcodeModalOptions: {
        desktopLinks: [],
      },
    }),
    new OKXConnectorImpl(),
    new BitKeepConnectorImpl(),
  ];

  return {
    connectors,
  };
}
