<template>
    <section class="component">
            <i class='bx bx-mouse mouse' ></i>
            <i class='bx bx-chevrons-down arrow'></i>
    </section>
</template>

<script setup>

</script>

<style scoped>
    .component {
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .scroll {
        width: 1.5rem;
        height: 5rem;
        border-radius: 0.5rem;
        border: 0.2rem solid var(--text-main-20);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mouse {
        color: var(--text-darkblue);
        font-size: 3rem;
    }

    .arrow {
        color: var(--text-blue);
        font-size: 2rem;
        animation: scroll 3s infinite;
    }

    @keyframes scroll {
        0% {
            opacity: 0;
            transform: translateY(-1rem);
        }

        25% {
            opacity: 1;
            transform: translateY(0rem);
        }

        50%,100% {
            opacity: 0;
            transform: translateY(1rem);
        }
    }
</style>