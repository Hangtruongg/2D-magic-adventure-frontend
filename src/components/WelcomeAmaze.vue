<script>
import myImage from  '@/assets/background/waterfall.gif'

export default {
  name: 'WelcomeAmaze',
  data() {
    return {
      myImage:myImage,
    }
  },
 methods: {
    navigateToGame() {
      this.$router.push('/game');
    }
  }
};

</script> <!--end step 1-->

<template>
  <div class="container">
    <img :src="myImage" alt="halloween background" class="background-img">
    <div class="heading-box">
      <h1 class="heading"> Welcome to A-maze </h1>
      <button class="startButton" @click="navigateToGame">Press to play</button>

    </div>
  </div>
</template>

<style>
.container {
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.background-img {
  position:absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}


.heading-box {
  background-color: rgba(255,255,255,0.7);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.heading{
  text-align: center;
  font-size: 60px;
  animation: changeColor 5s infinite;
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

.startButton {
  padding: 15px 30px;
  font-size: 20px;
  background-color: lightpink;
  color: black;
  border: none;
  border-radius: 10px; 
  cursor: pointer;
}


</style>