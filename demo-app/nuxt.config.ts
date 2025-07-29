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
        { name: 'author', content: 'kubapiw.dev' },
        { name: 'google-site-verification', content: 'AGas4PCynU-W0jgYGWj2uA6tR5LIF-UZe-a6zTAwO44' },

        // Open Graph (Facebook)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'ScrollMotion - A Simple JS Library for Scroll Animations' },
        { property: 'og:description', content: 'ScrollMotion is a JavaScript library based on intersectionObserver API. It provides intuitive and easy-to-implement scroll animations.' },
        { property: 'og:image', content: '/favicon.ico' },
        { property: 'og:url', content: 'https://scrollmotion.kubapiw.dev' },

        // Twitter Cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ScrollMotion - A Simple JS Library for Scroll Animations' },
        { name: 'twitter:description', content: 'ScrollMotion is a JavaScript library based on intersectionObserver API. It provides intuitive and easy-to-implement scroll animations.' },
        { name: 'twitter:image', content: '/favicon.ico' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code&family=Poppins:wght@400;600&display=swap' },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://scrollmotion.kubapiw.dev/"}
      ],
    }
  },

  modules: ['@nuxtjs/sitemap'],
  site: { 
    url: 'https://scrollmotion.kubapiw.dev', 
    name: 'ScrollMotion - A Simple JS Library for Scroll Animations' 
    }, 
})