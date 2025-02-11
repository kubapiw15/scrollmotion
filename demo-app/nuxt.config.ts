// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  devServer: {
    port: 80, 
    host: '192.168.0.241', 
  },
  // css: ['@/assets/css/colors.css', 'boxicons/css/boxicons.min.css', '@fortawesome/fontawesome-free/css/all.css'], NOT WORKING ON STATIC SITE
  css: ['@/assets/css/colors.css'],

  build: {
    transpile: ['@highlightjs/vue-plugin'],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' },
      ],
    }
  }
})