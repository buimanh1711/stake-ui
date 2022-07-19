<script lang="ts">
import {defineComponent} from "vue";
import {shortenAddress, useBoard, useEthers} from "vue-dapp";
import Board from "@/components/wallet/Board.vue";
import {useConnectors} from "@/components/wallet/composables/useConnectors";

export default defineComponent({
  components: {
    Board,
  },
  setup() {
    const { open } = useBoard();
    const { isActivated, address } = useEthers();
    const { connectors } = useConnectors();
    return {
      connectors,
      open,
      isActivated,
      address,
      shortenAddress,
    };
  },
  mounted(): void {
    this.setRef();
  },
  methods: {
    setRef() {
      let ref: any = this.$route.query.ref;
      if (ref) {
        localStorage.setItem("ref", ref);
      }
    },
  },
});
</script>

<template>
  <nav
    class="container navbar navbar-expand-lg navbar-expand-xxl navbar-expand-xl navbar-light sticky-top"
  >
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/images/logo/logo.svg" alt="Palmare" />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarMenu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarMenu">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <RouterLink class="nav-link" to="/ipo"
          >IPO
          </RouterLink>
          <i class="nav-item-icon-live"></i>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#howtoearn">How to earn</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#roadmap">Roadmap</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSD4Ry5bZR7_iPmE7bkpIV7lsuHnKDHvA1cbqUhVVG2z-hjw/viewform"
            target="_blank"
            >Partner</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://docs.palmare.io/" target="_blank"
            >Documentation</a
          >
        </li>
      </ul>
      <div class="navbar-button">
        <a v-if="isActivated" class="btn btn-dark btn-connection">{{
          shortenAddress(address)
        }}</a>
        <a v-else class="btn btn-dark btn-connection" @click="open"
          >Connect Wallet</a
        >
      </div>
    </div>
  </nav>
</template>
