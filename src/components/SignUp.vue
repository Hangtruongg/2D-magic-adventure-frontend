<template>
    <img class="img" src="../assets/character/preview_trenchcoat_walk.gif">
    <h1 class="h1">
        Sign Up
    </h1>
    <div class="register">
        <input type="name" v-model="name" placeholder ="Enter Name"/>
        <input type="email" v-model="email" placeholder ="Enter Emails"/>
        <input type="password" v-model="password" placeholder ="Enter Password"/>
        <!-- the button hasn't worked yet -->
        <button @click="signUp">Sign up</button> 
    </div>
</template>

<script>
import axios from'axios'

// import { onMounted } from 'vue';
export default {
    name:'SignUp',
    data()
    {
        return {
            name:'',
            email:'',
            password:''

        }
    },
    methods:{ // hasn't worked yet
        async signUp()
        {
            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                password: this.password,
                name:this.name
            });
            console.warn(result);
            if(result.status==201) {
                alert("sign up done");
            }
        },
        
    },
    mounted()
    {
        let user=localStorage.getItem('user-info')
        if(user) //if the user has signed up, will always come to welcome homepag
        {
            this.$router.push('/WelcomeAmaze')
        }
    }
};

</script>

<style>
.container  {
    display:flex;
    align-items: center;
}

.img {
    width: 100px;
    margin: 30px 680px;
    
}

.h1 {
    text-align: center;
}
.register input {
    width:300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    }

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color:white;
    cursor: pointer;
    margin: 0 575px;
    
}
</style>
