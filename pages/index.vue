<template>
    <div class="page">
        <HeroSection></HeroSection>
        <SpacerSection></SpacerSection>
    </div>
</template>

<script setup>
import SpacerSection from '~/components/spacerSection.vue';


</script>

<style scoped>
    .page {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        background-color: var(--bg-main);
        user-select: none;
    }
</style>