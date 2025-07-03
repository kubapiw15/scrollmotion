<template>
    <div class="page">
        <HeroSection></HeroSection>
        <SpacerSection></SpacerSection>
        <ShowcaseSection></ShowcaseSection>
        <FooterSection></FooterSection>
    </div>
</template>

<script setup>

import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
import SM from '@kubapiw15/scrollmotion'
onMounted(()=>{
    SM.init({
        visibility: 1,
        shift: '4rem'
    })
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