<template>
    <div id="container">
        <div id="buttons">
            <h1>You lose!</h1>
            <button class = "deathScreenButton" @click="navigateToGame">Restart level</button>
            <button class = "deathScreenButton" @click="navigateToHome">Return to home page</button>
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

<style >
#container {
    display:flex;
}
#buttons {
    margin:auto
}
.deathScreenButton {
font-size: 20px;
box-shadow: 0px 0px 20px rgb(243, 127, 147);
border-radius: 12px;
background-color: pink;
padding: 15px 30px;
text-align: center;
margin: 0 200px;
cursor: pointer;
}

</style>