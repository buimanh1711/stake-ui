import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/vendor/bootstrap/js/bootstrap.esm.min';
import App from './App.vue';
import router from './router';
import { VueDapp } from 'vue-dapp';
import type jQuery from 'jquery';
import VueClipboard from 'vue3-clipboard';
// Import our custom CSS
import '../src/assets/scss/styles.scss';

declare global {
  interface Window {
    jQuery: typeof jQuery;
    $: typeof jQuery;
  }
}
const app = createApp(App);

app.config.globalProperties.$log = console.log;
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
});
app.use(createPinia());
app.use(router);
app.use(VueDapp);
app.mount('#app');
