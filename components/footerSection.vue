<template>
    <footer id="footer" class="component">
        <div class="content">
            <div class="left">
                <p class="label">Explore more on:</p>
                <div class="iconsContainer">
                    <nuxt-link data-sm target="blank" class="link" to="https://github.com/kubapiw15/scrollmotion">
                        <i class="fa-brands fa-github"></i>
                        <p>GitHub</p>
                    </nuxt-link>
                    <nuxt-link data-sm target="blank" class="link" to="https://www.npmjs.com/package/@kubapiw15/scrollmotion">
                        <i class="fa-brands fa-npm"></i>
                        <p>Node Package Manager</p>
                    </nuxt-link>
                </div>
            </div>
            <div class="right">
                <p class="label">Keep in mind</p>
                <p class="description" data-sm>This library was created for <span class="blue">personal and learning purposes</span>. It is not intended for commercial use and may contain bugs.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
    
</script>

<style scoped>
    .component {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: center;
        position: relative;
    }
    .content {
        width: 75%;
        height: 100%;
        display: flex;
        align-items: stretch;
        justify-content: center;
        position: relative;
        padding-block: 2rem;
        box-sizing: border-box;
    }   

    .content::after {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        content: "";
        background-color: var(--text-main-10);
        width: 50%;
        height: 0.12rem;
    }
    .left, .right {
        height: 100%;
        box-sizing: border-box;
        padding-inline: 2rem;
    }

    .left {
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        flex-direction: column;
        width: 60%;
    }

    .left .label {
        margin: 0 0 2rem 0;
        font-size: 1.3rem;
        color: var(--text-main);
        font-weight: 400;
    }

    .iconsContainer {
        flex: 1;
        width: 100%;
        display: flex;
    }

    .link {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        text-decoration: none;
        border-radius: 0.5rem;
        background-color: var(--github);
        margin-left: 2rem;
        color: var(--text-gray);
        transition-duration: 0.2s;
    }

    .link:nth-of-type(1){
        margin-left: 0;
    }

    .link:hover {
        
        background-color: var(--text-darkblue);
    }
    .link p {
        font-size: 1.1rem;
    }

    .link i {
        font-size: 3rem;
        margin-right: 1rem;
    }

    .right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: stretch;
        width: 40%;
    }

    .right .label {
        margin: 0 0 2rem 0;
        font-size: 1.3rem;
        color: var(--text-main);
        font-weight: 400;
    }

    .right .description {
        flex: 1;
        text-align: right;
        margin: 0;
        font-size: 1.1rem;
        color: var(--text-darkblue);
    }

    @media screen and (max-width: 1400px){
        .content {
            width: 90%;
        }
    }
    @Media screen and (max-width: 1000px){
        .content {
            width: 95%;
            flex-direction: column;
            margin-bottom: 2rem;
        }

        .left,.right {
            width: 100%;
            align-items: center;
            padding-block: 0;
        }

        .left .label, .right .label {
            margin: 0 0 2rem 0;
            font-size: 1.4rem;
        }
        .right .description {
            text-align: center;
        }

        .left {
            margin: 0 0 5rem 0;
        }
        .link {
            margin: 1rem 0 0 0;
        }

        .iconsContainer {
            justify-content: center;
            flex-direction: column;
        }

        .content::after {
            width: 80%;
        }
    }
</style>