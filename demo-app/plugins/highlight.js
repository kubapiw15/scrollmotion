import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import highlightJS from '@highlightjs/vue-plugin'
import 'highlight.js/styles/github-dark-dimmed.css'

export default defineNuxtPlugin(nuxtApp => {
    // Rejestracja języka JavaScript w Highlight.js
    // hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('xml', xml)
    
    // Użycie pluginu highlightJS w aplikacji
    nuxtApp.vueApp.use(highlightJS)

    // Możesz także wstrzyknąć hljs do aplikacji, jeśli chcesz korzystać bezpośrednio z niego
    nuxtApp.provide('hljs', hljs)
})