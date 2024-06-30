<template>
    <div id="container">
        <div id="buttons">
            <h1>You Died!</h1>
            <button class = "winscreenButton" @click="navigateToGame">Restart game</button>
            <button class = "winscreenButton" @click="navigateToHome">Return to home page</button>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    methods: {
        navigateToGame() {
            try {
                const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
                const endpointPost = `${baseUrl}/savePlayerData`;
                const payload = {
                    "currentLevel": "levelData1.json"
                }
                axios.post(endpointPost, payload)
            } catch (error) {
                console.error('Error fetching level data:', error);
            }
            this.$router.push('/game');
        },
        navigateToHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style>
#container {
    display:flex;
}
#buttons {
    margin:auto
}
.winscreenButton {
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