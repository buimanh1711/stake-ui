<script lang="ts">
import Header from "./section/Header.vue";
import Menu from "./section/Menu.vue";
import Main from "./section/Main.vue";
import Footer from "./section/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Header,
    Menu,
    Footer,
    Main,
  },
});
</script>

<template>
  <Menu></Menu>
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
</template>
