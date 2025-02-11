// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  devServer: {
    port: 80, 
    host: '192.168.0.241', 
  },

  css: ['@/assets/css/colors.css', 'boxicons/css/boxicons.min.css', '@fortawesome/fontawesome-free/css/all.css'],

  build: {
    transpile: ['@highlightjs/vue-plugin'],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'ScrollMotion - A Simple JS Library for Scroll Animations',
      meta: [
        { name: 'description', content: 'ScrollMotion is a JavaScript library based on intersectionObserver API. It provides intuitive and easy-to-implement scroll animations.' },
        { name: 'author', content: 'Jakub Piwoński' },
        { name: 'google-site-verification', content: 'AGas4PCynU-W0jgYGWj2uA6tR5LIF-UZe-a6zTAwO44' },

        // Open Graph (Facebook)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'ScrollMotion - A Simple JS Library for Scroll Animations' },
        { property: 'og:description', content: 'ScrollMotion is a JavaScript library based on intersectionObserver API. It provides intuitive and easy-to-implement scroll animations.' },
        { property: 'og:image', content: '/favicon.ico' },
        { property: 'og:url', content: 'https://scrollmotion.vercel.app' },

        // Twitter Cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ScrollMotion - A Simple JS Library for Scroll Animations' },
        { name: 'twitter:description', content: 'ScrollMotion is a JavaScript library based on intersectionObserver API. It provides intuitive and easy-to-implement scroll animations.' },
        { name: 'twitter:image', content: '/favicon.ico' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
        { rel: 'canonical', href: 'https://scrollmotion.vercel.app' },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ],
    }
  },

  modules: ['@nuxtjs/sitemap'],
  site: { 
    url: 'https://scrollmotion.vercel.app', 
    name: 'ScrollMotion - A Simple JS Library for Scroll Animations' 
    }, 
})