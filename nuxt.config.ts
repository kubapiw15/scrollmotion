// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  devServer: {
    port: 80, 
    host: '192.168.0.241', 
  },

  modules: [['@nuxtjs/google-fonts', {
    families: {
      Poppins: true,
      "Fira+Code": true
    }
  }], '@nuxt/image'],
  css: ['@/assets/css/colors.css', 'boxicons/css/boxicons.min.css', '@fortawesome/fontawesome-free/css/all.css']
})