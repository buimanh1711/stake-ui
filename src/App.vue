<script lang="ts">
import Board from "@/components/wallet/Board.vue";
import { defineComponent } from "vue";
import { useBoard } from "vue-dapp";
import { useConnectors } from "@/components/wallet/composables/useConnectors";

export default defineComponent({
  components: {
    Board,
  },
  setup() {
    const { open } = useBoard();
    const { connectors } = useConnectors();
    return {
      connectors,
      open,
    };
  },
});
</script>

<template>
  <Board :connectors="connectors"></Board>
  <RouterView />
</template>

<style lang="sass">
@import "@/assets/scss/styles.scss"
</style>
