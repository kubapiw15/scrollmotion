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

useSeoMeta({
  title: 'ScrollMotion',
  ogTitle: 'ScrollMotion',
  description: 'A JavaScript library for scroll animations.',
  ogDescription: 'A JavaScript library for scroll animations.',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
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