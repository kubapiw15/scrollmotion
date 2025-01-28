<template>
    <section class="component">
        <div class="content">
            <div class="left"><h1>ScrollMotion - A simple library for scroll animations<span class="underscore">_</span></h1></div>
            <div class="right"></div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
    .component {
        flex: 1;
        height: 80vh;
        display: flex;
        justify-content: stretch;
        align-items: center;
        flex-direction: column;
    }

    .content {
        flex: 1;
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: stretch;
    }

    h1 {
        color: var(--text-darkblue);
        font-size: 2.5rem;
        width: 90%;
    }

    .right, .left {
        width: 50%;
    }

    .underscore {
        animation: underscore 1s infinite;
        animation-timing-function: steps(1);
    }

    @keyframes underscore {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }
    }
</style>