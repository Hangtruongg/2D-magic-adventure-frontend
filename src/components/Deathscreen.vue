<template>
    <div id="deathscreen">
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

<style>
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

h1 {
  font-size: 60px;
  animation: changeColor 5s infinite;
  margin-top: 250px;
  margin-left: 480px;
}


@keyframes changeColor {
  0% {
    color: violet; 
  }
  10% {
    opacity: 1;
  }
  25% {
    color: rgb(191, 39, 130); 
  }
  50% {
    color: rgb(66, 5, 45); 
  }
  75% {
    color: rgb(213, 162, 197); 
  }
  100% {
    color: violet; 
  }
}
</style>