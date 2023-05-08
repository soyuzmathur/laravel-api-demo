// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    build: {
      transpile: ['vuetify'],
    },
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },
    modules: ['@pinia/nuxt'],
})
