<template>
    <div class="page">
        <HeroSection></HeroSection>
        <SpacerSection></SpacerSection>
    </div>
</template>

<script setup>

import SM from '@kubapiw15/scrollmotion'

onMounted(()=>{
    SM.init({

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
        scroll-behavior: smooth;
    }

    .heroCode {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 !important;
        width: 100%;
        background-color: #22272e;
        padding-block: 8rem;
        border-radius: 0.5rem;
        font-size: 1.1rem;
        overflow: hidden !important;
    }

    .heroCode .hljs {
        margin: 0;
        padding: 0;
        height: auto;
        width: auto;
        overflow: hidden !important;
    }

    .heroCode:nth-of-type(2) {
        display: none;
    }

    @media screen and (max-width: 1400px){
        .heroCode {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 1000px){
        .heroCode {
            padding-block: 0;
            height: 100%;
            box-sizing: border-box;
        }

        .heroCode:nth-of-type(1) {
            display: none;
        }

        .heroCode:nth-of-type(2) {
            display: flex;
        }
    }
</style>