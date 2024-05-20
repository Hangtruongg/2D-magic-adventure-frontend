<script>
import { onMounted } from 'vue';
//import { MDBBtn } from 'mdb-vue-ui-kit';

export default {
  name: 'WelcomeAmaze',
  // data() {
  //   return {
  //     myImage:myImage,
  //   }
  // },
 methods: {
    navigateToGame() {
      this.$router.push('/game');
    },
    navigateToSignUp() {
      this.$router.push('/signUp')
    }
  },
  
  // hasn't worked yet
  mounted() { // if the user hasn't sign up
    let user=localStorage.getItem('user.info');
    if(user)
    {
      this.$router.push('/SignUp')
    }
  }
};
onMounted(() => {
  // component is now mounted.
  console.log("WelcomeAmaze mounted");})


</script> <!--end step 1-->



<template>
  <div id ="nav-bar">
      <span id="about" onclick="aboutIcon()" class="material-symbol-outlined">About A-maze</span>
      <span id="new" onclick="newIcon()" class="material-symbol-outlined">News</span>
      <span id="creative" onclick="creativeIcon()" class="material-symbol-outlined">Creative</span>
      <button class="signUpButton" @click="navigateToSignUp">Sign Up</button>
    </div>
    <p></p>
  <div class="container">
    <!-- <img :src="myImage" alt="halloween background" class="background-img"> -->
    <div class="heading-box">
      <h1 class="heading"> Welcome to A-maze </h1>
      <button class="startButton" @click="navigateToGame">Press to play</button>
    </div>
  </div>
</template>


<style>
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}
.container {
  /* display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh; */
  width: 100%;
  min-height: 100vh;
  background-image: url('/src/assets/background/light_city.gif');
  background-size: cover;
  background-position: center;
  padding: 10px 8%;
  /* transition: transform 400ms; this is how to make the img get zoom in when move the mouse */
}
/* .container:hover {
  transform: scale(1.2);
} the next step to make the img get zoom in  */

/* .background-img {
  position:absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
} */

body {
  margin: 0;
  padding: 0;
  background: #d5bdaf;
  font-family: 'Roboto';
  height: 100%;
}

#nav-bar {
  background-color: #e3d5ca;
  height: 50px;
  width: 100%;
  position: relative;
  top: 20px;
  left: 0;
  border-radius: 30px 30px 5px 5px;
}


#about,
#new,
#creative,
.signUpButton {
  cursor: pointer;
  position: relative;
  top: 10px;
  font-size: 30px;
  left: 20px;
  transition: all .5s;
  color: rgb(131, 87, 87); 
}

#new {
  top: 10px;
  left: 90px;
}

#creative {
  top: 10px;
  left: 160px;
}


.heading-box {
  background-color: rgba(255,255,255,0.7);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin: 0 auto;
}

.heading{
  text-align: center;
  font-size: 60px;
  animation: changeColor 5s infinite;
  margin: 30px;
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

  font-size: 20px;
  box-shadow: 0px 0px 20px rgb(243, 127, 147);
  border-radius: 12px;
  background-color: pink;
  padding: 15px 30px;
  text-align: center;
  margin: 0 200px;
  cursor: pointer;
}

.startButton:hover {
  box-shadow: 0px 0px 50px rgb(221, 90, 112);
}


.logo {
  position:sticky;
  width: 180px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 20px;
}



.signUpButton {

  cursor: pointer;
  border: 0;
  color:black;
  padding: 10px 20px;
  background:rgb(233, 169, 222);
  border-radius: 6px;
  font: 600 20px 'monterrat';
  box-shadow: 0 6px 0 rgb(184, 117, 184);
  transition: .3s;
  left: 900px;
  top: 0;
}
  .signUpButton:active {
    transform: translateY(5px);
    box-shadow: 0 3px 0 rgb(226, 186, 224);

  }



</style>