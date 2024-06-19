<template>
    <body>
    <div class="container" id="container">
        
        <div class="form-container register-container">
            <form action="#">
                <h1>Register here</h1>
                <input type="text" placeholder="Name">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
                <button>Register</button>
                <span>or use your account</span>
                <div class="social-container">
                    <a href="#" class="social">
                        <svg width="80" height="80" viewBox="0 0 512 512" style="color:#3A76F5" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 20 20" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/></g></svg></svg>  
                    </a>
                    <a href="#" class="social">
                    <svg width="80" height="80" viewBox="0 0 512 512" style="color:#3A76F5" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 20 20" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><path fill="currentColor" d="M1.989 5.589c0 1.494.499 2.572 1.482 3.205c.806.52 1.74.598 2.226.598c.118 0 .213-.006.279-.01c0 0-.154 1.004.59 1.996h-.034c-1.289 0-5.493.269-5.493 3.727c0 3.516 3.861 3.695 4.636 3.695c.061 0 .097-.002.097-.002c.008 0 .063.002.158.002c.497 0 1.782-.062 2.975-.643c1.548-.75 2.333-2.059 2.333-3.885c0-1.764-1.196-2.814-2.069-3.582c-.533-.469-.994-.873-.994-1.266c0-.4.337-.701.762-1.082c.689-.615 1.339-1.492 1.339-3.15c0-1.457-.189-2.436-1.354-3.057c.121-.062.551-.107.763-.137c.631-.086 1.554-.184 1.554-.699V1.2H6.64c-.046.002-4.651.172-4.651 4.389zm7.424 9.013c.088 1.406-1.115 2.443-2.922 2.574c-1.835.135-3.345-.691-3.433-2.096c-.043-.676.254-1.336.835-1.863c.589-.533 1.398-.863 2.278-.928c.104-.006.207-.012.31-.012c1.699.001 2.849.999 2.932 2.325zM8.212 4.626c.451 1.588-.23 3.246-1.316 3.553a1.417 1.417 0 0 1-.384.052c-.994 0-1.979-1.006-2.345-2.393c-.204-.776-.187-1.458.047-2.112c.229-.645.643-1.078 1.163-1.225c.125-.035.254-.053.385-.053c1.2 0 1.972.498 2.45 2.178zM16 8V5h-2v3h-3v2h3v3h2v-3h3V8h-3z"/></g></svg></svg>
                    </a>
                    <a href="#" class="social">
                    <svg width="80" height="80" viewBox="0 0 512 512" style="color:#3A76F5" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 20 20" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><path fill="currentColor" d="M17.316 6.246c.008.162.011.326.011.488c0 4.99-3.797 10.742-10.74 10.742c-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 0 0 5.588-1.562a3.779 3.779 0 0 1-3.526-2.621a3.858 3.858 0 0 0 1.705-.065a3.779 3.779 0 0 1-3.028-3.703v-.047a3.766 3.766 0 0 0 1.71.473a3.775 3.775 0 0 1-1.168-5.041a10.716 10.716 0 0 0 7.781 3.945a3.813 3.813 0 0 1-.097-.861a3.773 3.773 0 0 1 3.774-3.773a3.77 3.77 0 0 1 2.756 1.191a7.602 7.602 0 0 0 2.397-.916a3.789 3.789 0 0 1-1.66 2.088a7.55 7.55 0 0 0 2.168-.594a7.623 7.623 0 0 1-1.884 1.953z"/></g></svg></svg>
                    </a>
                </div>
            </form>
        </div>

        <div class="form-container login-container" >
            <form action="#">
                <h1>Login here</h1>
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
                <div class="content">
                    <div class="checkbox">
                        <input type="checkbox" name="Checkbox" id="checkbox">
                        <label> Remember me</label>
                    </div>
                    <div class="pass-link">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
                <button>Login</button>
                <span>or use your account</span>
                <div class="social-container">
                    <a href="#" class="social">
                        <svg width="80" height="80" viewBox="0 0 512 512" style="color:#3A76F5" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 20 20" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/></g></svg></svg>  
                    </a>
                    <a href="#" class="social">
                    <svg width="80" height="80" viewBox="0 0 512 512" style="color:#3A76F5" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 20 20" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><path fill="currentColor" d="M1.989 5.589c0 1.494.499 2.572 1.482 3.205c.806.52 1.74.598 2.226.598c.118 0 .213-.006.279-.01c0 0-.154 1.004.59 1.996h-.034c-1.289 0-5.493.269-5.493 3.727c0 3.516 3.861 3.695 4.636 3.695c.061 0 .097-.002.097-.002c.008 0 .063.002.158.002c.497 0 1.782-.062 2.975-.643c1.548-.75 2.333-2.059 2.333-3.885c0-1.764-1.196-2.814-2.069-3.582c-.533-.469-.994-.873-.994-1.266c0-.4.337-.701.762-1.082c.689-.615 1.339-1.492 1.339-3.15c0-1.457-.189-2.436-1.354-3.057c.121-.062.551-.107.763-.137c.631-.086 1.554-.184 1.554-.699V1.2H6.64c-.046.002-4.651.172-4.651 4.389zm7.424 9.013c.088 1.406-1.115 2.443-2.922 2.574c-1.835.135-3.345-.691-3.433-2.096c-.043-.676.254-1.336.835-1.863c.589-.533 1.398-.863 2.278-.928c.104-.006.207-.012.31-.012c1.699.001 2.849.999 2.932 2.325zM8.212 4.626c.451 1.588-.23 3.246-1.316 3.553a1.417 1.417 0 0 1-.384.052c-.994 0-1.979-1.006-2.345-2.393c-.204-.776-.187-1.458.047-2.112c.229-.645.643-1.078 1.163-1.225c.125-.035.254-.053.385-.053c1.2 0 1.972.498 2.45 2.178zM16 8V5h-2v3h-3v2h3v3h2v-3h3V8h-3z"/></g></svg></svg>
                    </a>
                    <a href="#" class="social">
                    <svg width="80" height="80" viewBox="0 0 512 512" style="color:#3A76F5" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 20 20" fill="#3A76F5" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><path fill="currentColor" d="M17.316 6.246c.008.162.011.326.011.488c0 4.99-3.797 10.742-10.74 10.742c-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 0 0 5.588-1.562a3.779 3.779 0 0 1-3.526-2.621a3.858 3.858 0 0 0 1.705-.065a3.779 3.779 0 0 1-3.028-3.703v-.047a3.766 3.766 0 0 0 1.71.473a3.775 3.775 0 0 1-1.168-5.041a10.716 10.716 0 0 0 7.781 3.945a3.813 3.813 0 0 1-.097-.861a3.773 3.773 0 0 1 3.774-3.773a3.77 3.77 0 0 1 2.756 1.191a7.602 7.602 0 0 0 2.397-.916a3.789 3.789 0 0 1-1.66 2.088a7.55 7.55 0 0 0 2.168-.594a7.623 7.623 0 0 1-1.884 1.953z"/></g></svg></svg>
                    </a>
                </div>
            </form>
        </div>

    <div class="overlay-container">
        <div class="overlay">
            <div class="overlay-panel overlay-left">
                <h1 class="title">Hello <br> friends</h1>
                <p>If you have an account, login here and have fun</p>
                <button class="ghost" id="login">Login
                    <i class="lni lni-arrow-left login"></i>
                </button>
            </div>

            <div class="overlay-panel overlay-right">
                <h1 class="title"> Start your <br> journey now</h1>
                <p>If you don't have an account yet, join us and start your journey</p>
                <button class="ghost" id="register">Register
                    <i class="lni lni-arrow-right register"></i>
                </button>

            </div>
        </div>
    </div>
    </div>
</body>
</template>

<script >

// const registerButton= document.getElementById("register");
// const loginButton = document.getElementById("login");
// const container = document.getElementById("container");

// registerButton.addEventListener("click", () => {
//     container.classList.add("right-panel-active");
// });

// loginButton.addEventListener("click", () => {
//     container.classList.remove("right-panel-active");
// });

export default {
    name: 'AuthContainer',
    mounted() {
        const registerButton = document.getElementById("register");
        const loginButton = document.getElementById("login");
        const container = document.getElementById("container");


            registerButton.addEventListener("click", () => {
                container.classList.add("right-panel-active");
            });

            loginButton.addEventListener("click", () => {
                container.classList.remove("right-panel-active");
            });
        
    }
};

</script>


<style scoped >

* {
    box-sizing: border-box;
}

body{
    display: flex;
    background-image: url(/assets/background/pink1.gif);
    background-size: cover;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
}

h1 {
    font-weight: 700;
    letter-spacing: -1.5px;
    margin:0;
    margin-bottom: 15px;
}

h1.title {
    font-size: 45px;
    line-height: 45px;
    margin: 0;
    text-shadow: 0 0 10px rgba(16, 64, 74, 0.5)
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
    text-shadow: 0 0 10px rgba(16, 64, 74, 0.5)
}

span {
    font-size: 24px;
    margin-top: 25px;
}

a{
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
    transition: 0.3s ease-in-out;
}
a:hover {
    color: #4bb6b7;
}

.content {
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-around;
}

.content .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
}

.content input {
    accent-color: #333;
    width: 12px;
    height: 12px;
}

.content label {
    font-size: 14px;
    user-select: none;
    padding-left: 5px;
}

button {
    position: relative;
    border-radius: 20px;
    border: 1px solid pink;
    background-color: pink;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    margin: 10px;
    padding: 12px 80px;
    letter-spacing: 1px;
    text-transform: capitalize ;
    transition: 0.3s ease-in-out;

}

button.hover {
    letter-spacing: 3px;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background-color: rgba(225, 225, 225, 0.2);
    border: 2px solid #fff;
    color: #fff;
}



form {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding:0 50px;
    height: 100%;
    text-align: center;
}

input {
    background-color: #eee;
    border-radius: 10px;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
}

.container {
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(16, 64, 74, 0.5);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 500px;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.login-container {
    left: 0;
    width: 50%;
    z-index: 2;
}
.container.right-panel-active .login-container {
    transform: translateX(100%);
}
.register-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}
.container.right-panel-active .register-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;

}

@keyframes show {
    0%,
    49.99% {
        opacity: 0;
        z-index: 1;

    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}

.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow:hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.container.right-panel-active .overlay-container {
    transform: translate(-100%)
}

.overlay {
    background-image: url('/assets/background/pinkGirl.gif');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 0 ;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
        to top,
        rgba (46, 94, 109, 0.4) 40%,
        rgba (46, 94, 109, 0)
    );

}

.container.right-panel-active .overlay {
    transform: translateX(50%)
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}

.social-container {
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #dddddd;
    border: 50%;
    display: inline-flex;
    justify-content: center;
    margin: 0 5px;
    height: 50px;
    width: 40px;
    transition: 0.3s ease-in-out;
}

.social-container a:hover {
    border: 1px solid #4bb6b7;
}

.pass-link a {
    color: blue;
    text-decoration: underline;
}


</style>

