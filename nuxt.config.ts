// https://nuxt.com/docs/api/configuration/nuxt-config
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: [
    '@nuxthq/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  devServer: {
    port: 3001,
  },
  colorMode: {
    preference: 'light',
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },
})
