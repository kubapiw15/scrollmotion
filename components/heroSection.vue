<template>
    <section id="heroSection" class="component">
        <div class="content">
            <div class="left">
                <h1 data-sm="" data-sm-visibility="0.5">ScrollMotion - A simple library for scroll animations<span class="underscore">_</span></h1>
                <nav>
                    <nuxt-link class="link" to="#showcase"><span>Showcase</span><i class='bx bxs-chevron-down'></i></nuxt-link>
                    <nuxt-link target="blank" class="link" to="https://github.com/kubapiw15/scrollmotion/tree/main">Get Started</nuxt-link>
                </nav>
            </div>
            <div class="right" data-sm="left blur" data-sm-visibility="0.5">
                <highlightjs class="heroCode" language='xml' :code='heroCode' />
                <highlightjs class="heroCode" language='xml' :code='heroCodeMobile' />
            </div>
        </div>
    </section>
</template>

<script setup>

    const heroCode = `<body>
  <div class="container">
    <p data-sm="right blur once">Hello world...</p>
    <p data-sm="up zoom">That's my first library!</p>
  </div>
</body>`

    const heroCodeMobile = `<body>
  <div class="container">
    <p data-sm="right blur">Hi...</p>
    <p data-sm="up zoom">What's up?</p>
  </div>
</body>`

</script>

<style scoped>
    .component {
        height: 80vh;
        display: flex;
        justify-content: stretch;
        align-items: center;
        flex-direction: column;
    }

    .content {
        flex: 1;
        width: 75%;
        display: flex;
        align-items: center;
        justify-content: stretch;
    }

    h1 {
        color: var(--text-darkblue);
        font-size: 2.5rem;
        width: 90%;
        margin-bottom: 8rem;
    }

    .right, .left {
        width: 50%;
    }

    .right {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .underscore {
        animation: underscore 1s infinite;
        animation-timing-function: steps(1);
    }

    .link {
        text-decoration: none;
        font-size: 1.3rem;
        padding: 0.8rem 1.5rem;
        transition-duration: 0.2s;
    }

    .link:nth-of-type(1){
        color: var(--text-dark);
        border: 0.15rem solid var(--text-lighter);
        background-color: var(--bg-main);
        border-radius: 5rem;
        margin-right: 2rem;
        z-index: 2;
        position: relative;
    }

    .link:nth-of-type(1) i {
        position: absolute;
        z-index: -1;
        font-size: 3rem;
        width: 100%;
        height: 60%;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        color: var(--text-lightblue);
        transition-duration: 0.2s;
        pointer-events: none;
    }

    .link:nth-of-type(1):hover i {
        transform: translateY(100%);
    }

    .link:nth-of-type(2) {
        color: var(--bg-main);
        background-color: var(--text-blue);
        border: 0.15rem solid var(--text-blue);
        border-radius: 5rem;
    }

    .link.link:nth-of-type(2):hover {
        background-color: var(--text-lightblue);
        border: 0.15rem solid var(--text-lightblue);
    }

    @keyframes underscore {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }
    }

    @media screen and (max-width: 1400px){
        .content {
            width: 90%;
        }
    }

    @media screen and (max-width: 1000px){

        h1 {
            margin: 0;
        }

        .content {
            width: 95%;
            flex-direction: column;
        }

        .left, .right {
            width: 100%;
        }

        .left {
            height: 70%;
            justify-content: space-around;
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        .right {
            height: 30%;
        }

        nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .link:nth-of-type(1) i {
            display: none;
        }
    }
</style>

<style>
        .heroCode {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 !important;
        width: 100%;
        background-color: #22272e;
        padding-block: 9rem;
        border-radius: 0.5rem;
        font-size: 1.1rem;
        overflow: hidden !important;
        user-select: text;
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