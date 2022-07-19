<script lang="ts">
import { defineComponent } from "vue";
import Modal from "./Modal.vue";
import Loader from "./Loader.vue";
import WalletConnectIcon from "@/components/wallet/logos/WalletConnect.vue";
import MetaMaskIcon from "@/components/wallet/logos/MetaMask.vue";
import CoinbaseWalletIcon from "@/components/wallet/logos/CoinbaseWallet.vue";
import NaboxIcon from "@/components/wallet/logos/Nabox.vue";

import { useBoard } from "vue-dapp";
import { useWallet } from "vue-dapp";
import type { Connector } from "vue-dapp";
import BinanceWallet from "@/components/wallet/logos/BinanceWallet.vue";
import Assure from "@/components/wallet/logos/Assure.vue";
import Rice from "@/components/wallet/logos/Rice.vue";
import Okx from "@/components/wallet/logos/Okx.vue";
import BitKeep from "@/components/wallet/logos/BitKeep.vue";

export default defineComponent({
  components: {
    Okx,
    Rice,
    Assure,
    BinanceWallet,
    Modal,
    Loader,
    NaboxIcon,
    MetaMaskIcon,
    WalletConnectIcon,
    CoinbaseWalletIcon,
    BitKeep
},
  props: {
    connectors: {
      type: Array,
      required: true,
      default: [],
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const { boardOpen, close } = useBoard();
    const { connectWith, wallet } = useWallet();

    const connectors = props.connectors as Connector[];

    return {
      boardOpen,
      wallet,
      connectors,
      connectWith,
      close,
    };
  },
});
</script>

<template>
  <Modal :modalOpen="boardOpen" @close="close" :dark="dark">
    <div v-click-outside="close" class="modal-wallet-wrap">
      <h2 class="modal-wallet-heading">Connect wallet</h2>
      <div class="modal-wallet-items">
        <div
          class="modal-wallet-item"
          v-for="(connector, i) in connectors"
          :key="connector.name"
        >
          <div @click="connectWith(connector) && close()">
            <MetaMaskIcon
              v-if="connector.name === 'metaMask'"
              :class="connector.isActive ? 'logo' : 'logo logo-disable'"
            />
            <div
              class="modal-wallet-item-title"
              v-if="connector.name === 'metaMask'"
            >
              MetaMask
            </div>
            <NaboxIcon
              v-if="connector.name === 'nabox'"
              :class="connector.isActive ? 'logo' : 'logo logo-disable'"
            />
            <div
              class="modal-wallet-item-title"
              v-if="connector.name === 'nabox'"
            >
              Nabox Wallet
            </div>

            <WalletConnectIcon
              v-if="connector.name === 'walletConnect'"
              :class="connector.isActive ? 'logo' : 'logo logo-disable'"
            />
            <div
              class="modal-wallet-item-title"
              v-if="connector.name === 'walletConnect'"
            >
              WalletConnect
            </div>

            <CoinbaseWalletIcon
              v-if="connector.name === 'coinbaseWallet'"
              :class="connector.isActive ? 'logo' : 'logo logo-disable'"
            />
            <div
              class="modal-wallet-item-title"
              v-if="connector.name === 'coinbaseWallet'"
            >
              Coinbase Wallet
            </div>

            <BinanceWallet
              v-if="connector.name === 'binance'"
              :class="connector.isActive ? 'logo' : 'logo logo-disable'"
            />
            <div
              class="modal-wallet-item-title"
              v-if="connector.name === 'binance'"
            >
              Binance Wallet
            </div>

            <Assure
              v-if="connector.name === 'assure'"
              :class="connector.isActive ? 'logo' : 'logo logo-disable'"
            />
            <div
              class="modal-wallet-item-title"
              v-if="connector.name === 'assure'"
            >
              Assure Wallet
            </div>

            <Rice
              v-if="connector.name === 'rice'"
              :class="connector.isActive ? 'logo' : 'logo logo-disable'"
            />
            <div
              class="modal-wallet-item-title"
              v-if="connector.name === 'rice'"
            >
              Rice Wallet
            </div>

            <Okx
              v-if="connector.name === 'okx'"
              :class="connector.isActive ? 'logo' : 'logo logo-disable'"
            />
            <div
              class="modal-wallet-item-title"
              v-if="connector.name === 'okx'"
            >
              OKX Wallet
            </div>

            <BitKeep
              v-if="connector.name === 'bitkeep'"
              :class="connector.isActive ? 'logo' : 'logo logo-disable'"
            />
            <div
              class="modal-wallet-item-title"
              v-if="connector.name === 'bitkeep'"
            >
              BitKeep
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>

  <slot name="connecting">
    <Modal :modalOpen="wallet.status === 'connecting'" :dark="dark">
      <div class="modal-wallet-loading" v-if="wallet.status === 'connecting'">
        <p>Connecting...</p>
        <p class="mt-4">Approve or reject request using your wallet</p>
      </div>
    </Modal>
  </slot>

  <slot name="loading">
    <Modal :modalOpen="wallet.status === 'loading'" :dark="dark">
      <div>Loading...</div>
    </Modal>
  </slot>
</template>

<style lang="scss">
.modal-wallet {
  &-heading {
    font-size: 16px;
  }

  &-items {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    padding: 20px 0;
    flex: 0 0 33.333333%;
    text-align: center;

    .logo-disable {
      opacity: 0.2;
    }

    &-title {
      font-size: 14px;
      font-weight: bold;
      padding: 10px 0;
    }
  }

  &-loading {
    width: 20rem;
    padding: 2.5rem;
    text-align: center;

    @media (min-width: 640px) {
      width: auto;
    }

    p:first-child {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
}
</style>
