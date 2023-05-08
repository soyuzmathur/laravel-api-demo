
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as labs from 'vuetify/labs/components'
import * as directives from "vuetify/directives";
import PerfectScrollbar from 'vue3-perfect-scrollbar';
// import VueTablerIcons from 'vue-tabler-icons';
import '@/assets/scss/style.css';
// import '@/assets/scss/mccwc-admin.css';
import 'vuetify/lib/styles/main.sass'
import {
  IndigoTheme,
} from "@/theme/LightTheme";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    components:{
      ...components,
      ...labs
    },
    directives,
    theme: {
      defaultTheme: "IndigoTheme",
      themes: {
        IndigoTheme,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
  nuxtApp.vueApp.use(PerfectScrollbar);
  // nuxtApp.vueApp.use(VueTablerIcons);
});

