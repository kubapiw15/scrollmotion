<template>
    <div class="page">
        <HeroSection></HeroSection>
        <SpacerSection></SpacerSection>
        <ShowcaseSection></ShowcaseSection>
        <FooterSection></FooterSection>
    </div>
</template>

<script setup>

import SM from '@kubapiw15/scrollmotion'

onMounted(()=>{
    SM.init({
        visibility: 1,
        shift: '4rem'
    })
})

useHead({
  bodyAttrs: {
    'noscript': `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJ49PTHK" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
  }
})

</script>

<style>
    .page {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        background-color: var(--bg-main);
        user-select: none;
        flex-direction: column;
        overflow: hidden;
    }


</style>