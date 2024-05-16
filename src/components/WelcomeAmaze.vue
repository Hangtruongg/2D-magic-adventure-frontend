<script>
import myImage from  '@/assets/background/waterfall.gif'
import myImage2 from '@/assets/tiles/treetop.png'
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
  <div class="container">
    <!-- <img :src="myImage" alt="halloween background" class="background-img"> -->
    <div class="heading-box">
      <h1 class="heading"> Welcome to A-maze </h1>
      <button class="startButton" @click="navigateToGame">Press to play</button>
    </div>
    <nav>
      <img src="/src/assets/character/preview_brown_shoot.gif" class="logo">
      <ul class="ul">
        <li><a href="#">Text1</a></li>
        <li><a href="#">Text2</a></li>
        <li><a href="#">Text3</a></li>
      </ul>
      <button class="signUpButton" @click="navigateToSignUp">Sign Up</button>
    </nav>
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
  background-image: url('/src/assets/background/waterfall.gif');
  background-size: cover;
  background-position: center;
  padding: 10px 8%;
}

/* .background-img {
  position:absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
} */


.heading-box {
  background-color: rgba(255,255,255,0.7);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin: 0 0%;
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
  padding: 15px 30px;
  font-size: 20px;
  background-color: lightpink;
  color: black;
  border: none;
  border-radius: 10px; 
  cursor: pointer;
  margin: 0 200px;
}

.nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.ul {
 list-style: none;
 width: 50%;
 text-align: right;
 padding-right: 60px;

}

.logo {
  position:sticky;
  width: 180px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 20px;
}

nav ul {
  position: sticky;
  list-style: none;
  width: 100%;
  text-align: right	;
  padding-right:60px ;
  margin-top: -550px;
  margin-left: 400px
}

nav ul li{
  display: inline-block;
  margin: 10px 20px;
}

nav ul li a{
  color: #fff;
  text-decoration: none;
}

.signUpButton {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: 0;
  outline: 0;
  border-radius: 5px;
  background: #f5168d;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

}



</style>