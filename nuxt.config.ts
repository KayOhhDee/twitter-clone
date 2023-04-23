// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    jwtAccessSecret: process.env.ACCESS_TOKEN_SECRET_JWT,
    jwtRefreshSecret: process.env.REFRESH_TOKEN_SECRET_JWT,
  }
})
