<script lang="ts">
import { defineComponent, watch, ref } from "vue";

export default defineComponent({
  emits: ["close"],
  props: {
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
    modalOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const modalInnerClass = ref(
      props.dark ? "modal-wallet-inner--dark" : "modal-wallet-inner"
    );

    const closeModal = () => {
      emit("close");
    };

    // prevent page scrolling when the modal is open
    watch(
      () => props.modalOpen,
      (value) => {
        if (value) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      }
    );

    return {
      modalInnerClass,
      closeModal,
    };
  },
});
</script>

<template>
  <teleport to="body">
    <transition name="modal-animation">
      <div v-if="modalOpen" class="modal-wallet">
        <div :class="modalInnerClass">
          <div class="modal-wallet-content">
            <!-- Modal Content -->
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss">
.modal {
  &-wallet {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 100%;
    height: 100%;
    background-color: rgba(107, 114, 128, 0.7);
    left: 0;
    top: 0;
    z-index: 50;

    &-inner {
      display: flex;
      background: #ffffff;
      border-radius: 25px;
      padding: 20px 40px;
      box-shadow: rgba(255, 255, 255, 0.1) 0 1px 1px 0 inset,
        rgba(50, 50, 93, 0.25) 0 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

      &--dark {
        display: flex;
        color: rgb(199, 199, 199);
        background: #273138;
        border-radius: 1rem;
        box-shadow: rgba(255, 255, 255, 0.1) 0 1px 1px 0 inset,
          rgba(50, 50, 93, 0.25) 0 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      }
    }
  }
}
</style>
