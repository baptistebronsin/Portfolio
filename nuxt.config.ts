// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      charset: 'utf-8',
      title: 'Baptiste Bronsin',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  devtools: { enabled: false },
  ssr: true,
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    'nuxt-lucide-icons',
  ],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'fr', language: 'fr-FR' }
    ],
    debug: true,
    defaultLocale: 'fr',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
    },    
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      "League Spartan": '100..900',
    },
    preload: true
  },
})