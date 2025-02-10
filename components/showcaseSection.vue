<template>
    <section id="showcase" class="component">
        <div class="content">
            <h2>Showcase</h2>
            <div class="showcaseItem">
                <div class="description">
                    <h3>Default animation</h3>
                    <p>Apply this default fade-in animation by adding <span class="blue">data-sm</span> attribute</p>
                </div>
                <highlightjs data-sm="" class="showcaseCode" language='xml' :code='`<div data-sm=""></div>

    <!-- OR -->

<div data-sm></div>`' />
            </div>
            <div class="showcaseItem">
                <div class="description">
                    <h3>Adding transition</h3>
                    <p>You can add a transition effect by adding up, down, left or right inside  <span class="blue">data-sm</span></p>
                </div>
                <highlightjs data-sm="left" data-sm-visibility="0.9" class="showcaseCode" language='xml' :code='`<div data-sm="left"></div>`' />
            </div>
            <div class="showcaseItem showcaseItem-additional">
                <div class="description">
                </div>
                <highlightjs data-sm="up" class="showcaseCode" language='xml' :code='`<div data-sm="up"></div>`' />
            </div>

            <div class="showcaseItem">
                <div class="description">
                    <h3>Zoom effect</h3>
                    <p>By adding <span class="blue">zoom</span> in the attribute you can add a zoom effect to your element</p>
                </div>
                <highlightjs data-sm="zoom" class="showcaseCode" language='xml' :code='`<div data-sm="zoom"></div>`' />
            </div>
            <div class="showcaseItem showcaseItem-additional">
                <div class="description">
                </div>
                <highlightjs data-sm="zoom right" class="showcaseCode" language='xml' :code='`<div data-sm="zoom right"></div>`' />
            </div>

            <div class="showcaseItem">
                <div class="description">
                    <h3>One-time animation</h3>
                    <p>Add <span class="blue">once</span> in the attribute if you want your animation to be performed only once</p>
                </div>
                <highlightjs data-sm="once" class="showcaseCode" language='xml' :code='`<div data-sm="once"></div>`' />
            </div>
            <div class="showcaseItem showcaseItem-additional">
                <div class="description">
                </div>
                <highlightjs data-sm="once down" class="showcaseCode" language='xml' :code='`<div data-sm="once down"></div>`' />
            </div>
            <div class="showcaseItem">
                <div class="description">
                    <h3>More examples</h3>
                    <p>You can merge multiple animations as long as they work properly</p>
                </div>
                <highlightjs data-sm="left blur" data-sm-visibility="0.9" class="showcaseCode" language='xml' :code='`<div data-sm="left blur"></div>`' />
            </div>
            <div class="showcaseItem showcaseItem-additional">
                <div class="description">
                </div>
                <highlightjs data-sm="zoom blur" class="showcaseCode" language='xml' :code='`<div data-sm="zoom blur"></div>`' />
            </div>
        </div>
    </section>
</template>

<script setup>
    
</script>

<style scoped>
    .component {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: center;
        padding-bottom: 10rem;
    }

    .content {
        width: 65%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: stretch;
    }

    h2 {
        font-size: 2.2rem;
        color: var(--text-darkblue);
        padding: 2rem;
        margin-bottom: 5rem;
    }

    .showcaseItem {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: stretch;
        min-height: 15rem;
        margin-block: 5rem;
    }

    .showcaseItem-additional {
        margin: 0 0 5rem 0;
    }

    .description {
        height: 100%;
        width: 40%;
        box-sizing: border-box;
        padding: 0 3rem 0 5rem;
    }

    h3 {
        font-size: 1.8rem;
        color: var(--text-main);
    }

    p {
        font-size: 1.2rem;
        color: var(--text-darkblue);
    }

    .blue {
        color: var(--text-blue);
        font-weight: 600;
        font-family: "Fira Code";
        white-space: nowrap;
    }

    @media screen and (max-width: 1400px){
        .content {
            width: 90%;
        }
    }

    @media screen and (max-width: 1000px){

        .content {
            width: 95%;
        }

        .showcaseItem {
            flex-direction: column;
            height: auto;
        }

        .description {
            width: 100%;
            padding: 1rem;
        }
    }

</style>

<style>
    .showcaseCode {
        margin: 1rem;
        box-sizing: border-box !important;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--github);
        flex: 1;
        border-radius: 0.5rem;
        user-select: text;
    }

    .showcaseCode code {
        padding: 0 !important;
        display: inline !important;
        font-size: 1.1rem;
    }

    @media screen and (max-width: 1000px){
        .showcaseCode {
            height: auto;
            flex: auto;
            padding-block: 5rem;
        }
    }
</style>