<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="bodyclass">
        <div id="containerDeathscreen">
            <div id="buttons">
                <h1>You Died!</h1>
                <button class="deathscreenButton" @click="navigateToGame">Restart level</button>
                <button class="deathscreenButton" @click="navigateToHome">Return to home page</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        navigateToGame() {
            this.$router.push('/game');
        },
        navigateToHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style>
#bodyclass {
    display: flex;
    background-image: url(/assets/background/pink1.gif);
    background-size: cover;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
}

#containerDeathscreen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
}

.deathscreenButton {
    font-size: 20px;
    box-shadow: 0px 0px 20px rgb(243, 127, 147);
    border-radius: 12px;
    background-color: pink;
    padding: 15px 30px;
    text-align: center;
    margin: 20px 0; /* Adjust margin to create space between buttons */
    cursor: pointer;
}

</style>