<template>
    <div id="bodyclass">
        <div id="containerWinscreen">
            <div id="buttons">
                <h1>You Won!</h1>
                <button class = "winscreenButton" @click="navigateToGame">Restart game</button>
                <button class = "winscreenButton" @click="navigateToHome">Return to home page</button>
            </div>
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
#containerWinscreen {
    display: flex;
    justify-content: center; /* Center contents horizontally */
    align-items: center; /* Center contents vertically */
    height: 100vh; /* Ensure it takes the full height of the viewport */
}

#buttons {
    display: flex;
    flex-direction: column; /* Stack child elements vertically */
    align-items: center; /* Center contents horizontally */
    margin: auto;
}

.winscreenButton {
    font-size: 20px;
    box-shadow: 0px 0px 20px rgb(243, 127, 147);
    border-radius: 12px;
    background-color: pink;
    padding: 15px 30px;
    text-align: center;
    margin: 20px 0; /* Adjust margin to create space between buttons */
    cursor: pointer;
}

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
</style>