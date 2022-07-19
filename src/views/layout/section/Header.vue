<script lang="ts">
import Banner from "../block/Banner.vue";
import CoreValue from "../block/CoreValue.vue";
import { defineComponent } from "vue";
import { useRouter, type Router } from "vue-router";

export default defineComponent({
  components: {
    Banner,
    CoreValue,
  },
  methods: {
    currentRouteName() {
      const router: Router = useRouter();
      return router.currentRoute.value.name;
    },
  },
});
</script>

<template>
  <section class="header" v-if="currentRouteName() === 'Home'">
    <Banner></Banner>
    <CoreValue></CoreValue>
  </section>
</template>
