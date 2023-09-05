// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: ['@nuxthq/ui'],
  devServer: {
    port: 3001,
  },
  colorMode: {
    preference: 'light',
  },
})
