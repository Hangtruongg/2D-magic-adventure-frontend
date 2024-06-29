<template>
    <body>
    <main>
        <header>
            <img src="/assets/background/5.png" alt="">
            <button class="HomepageButton"  @click="navigateToHomePage">Back to Homepage</button>
        </header>
        <section class="banner">
            <div class="content">
                <h1 class="left">A-MAZE</h1>
                <div class="right">
                    <h2>Massi and Hanna</h2>
                    <p>Webtech Project</p>
                    <p>Students at Univerity of Applied Science Berlin
                        <br>Hope you guys enjoy the game</p>
                </div>
                <div class="image">
                    <img src="/assets/background/mouthv2.png" alt="">
                </div>
            </div>
        </section>


        <section class="grid grid-1">
            <figure>
                <img src="/assets/background/sich.png" alt="">
            </figure>
            <figure>
                <img src="/assets/background/3.png" alt="" class="autoRotate">
            </figure>
            <h2 class="autoShow">Introduce</h2>
        </section>

        <section class="grid grid-2">
            <div class="autoShow">
                <figure>
                    <img src="/assets/background/6v2.png" alt="">
                </figure>
                <p>
                    We invite you to join us on this adventure! 
                    Follow us for updates, behind-the-scenes insights, and opportunities to provide feedback.
                </p>
            </div>
            <div class="autoShow">
                Welcome to the world of A-maze, where creativity meets adventure! 
                As a team of two passionate developers, we embarked on an exciting journey to craft a captivating 2D game experience that pushes the boundaries of animation and gameplay.
                <br><br>From the inception of our idea, we meticulously crafted each scene and character, 
                pouring hours into perfecting animations that bring our world to life. Every pixel and frame was carefully designed to ensure fluidity and charm, aiming to capture the essence of classic 2D gaming while introducing innovative mechanics.
            
            </div>

            <div class="autoShow">
                <figure>
                    <img src="/assets/background/2v2.png" alt="">
                </figure>
                <p>
                    Ready to embark on your journey?<br>
                    Have questions or feedback? We'd love to hear from you! 
                </p>
            </div>
            <div class="autoShow">
                <figure>
                    <img src="/assets/background/candyv2.png" alt="">
                </figure>
            </div>
        </section>

        <section class="grid grid-3">
            <div class="autoBLur">MAHAH</div>
            <div class="autoBLur">A-MAZE</div>
            <div class="autoBLur">DEVELOPER</div>
            <div class="autoBLur">SUBCRIBE +</div>
            <div class="autoBLur">SEE MORE &#8599;</div>
        </section>
    </main>
    <footer>
        <div class="grid grid-5 content">
            <div>
                Login: Start by logging in through our secure login page using your credentials. If you don't have an account, you can easily create one.
            <br><br>Set Your Keys: Before jumping into the action, you can customize your controls to suit your play style. Adjust the default key settings to your preference, choosing your desired keys for actions like shooting and running.
            <br><br>Begin the Game: Once logged in and your controls are set, you're ready to embark on your mission.</div>
            <div>
                Find the Gate: Your primary goal is to find the gate that leads you to the next level. Navigate through the levels and uncover the path to the gate.
            <br><br>Eliminate Monsters: Along the way, you'll encounter various monsters. To progress, you must defeat all the monsters in each level while ensuring your own survival.
            <br><br>Gather Coins: Collect enough coins scattered throughout the levels. These coins may be essential for unlocking the gate or gaining upgrades.
            </div>
            <div>
                Stay Alert: Monsters can be anywhere. Stay vigilant and plan your moves carefully.
            <br><br>Manage Resources: Keep an eye on your health and ammunition. Gather power-ups and health packs to stay in fighting shape.
            <br><br>Explore Thoroughly: Some coins and paths to the gate might be hidden. Explore each level thoroughly to find all necessary items and routes.</div>
            <div>
                <figure>
                    <img src="/assets/background/8v2.png" alt="">
                </figure>
            </div>
        </div>
    </footer>
</body>


</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

const navigateToHomePage =() => {
  router.push({name: 'home'});
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Odibee+Sans&display=swap');
html, body{
    scroll-behavior: smooth;
}
body{
    background-color: #CBCBCB;
    margin: 0;
    font-size: 14px;
    color: #2E373A;
    font-family: "Libre Baskerville", sans-serif;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
}
main{
    width: min(1400px, 100vw);
    margin: auto;
    padding: 20px;
}
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
header img{
    height: 40px;
}
.banner .content{
    font-family: "Odibee Sans", sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.banner .content h1{
    font-size: 17em;
}
.banner .content .right{
    text-align: right;
    transform: translateY(-30px);
}
.banner .content .right h2{
    font-size: 7em;
    font-weight: 200;
}
.banner .image{
    width: 100%;
    height: 600px;
    background-image: url(images/banner.png);
    position: relative;
}
.banner .image img{
    position: absolute;
    height: 130%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
}
.grid figure img{
    width: 100%;
}

.grid{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(var(--row), 100px);
    margin-top: 50px;
    gap: 50px;
}
.grid-1 figure:nth-child(1){
    grid-column: 2 / 6;
    grid-row: 1;
}
.grid-1 figure:nth-child(2){
    grid-column: 3 / 5;
    grid-row: 1;
}
.grid-1 h2:nth-child(3){
    font-size: 7em;
    grid-column: 1 / 7;
    text-align: center;
    grid-row: 5;
    z-index: 1;
}
.grid-1{
    --row: 2;
}
.grid-2{
    --row: 8;
    font-size: 1.7em;
}
.grid-2 div:nth-child(1){
    grid-column: 1 / 4;
    grid-row: 3;
}
.grid-2 div:nth-child(2){
    grid-column: 4 / 7;
    grid-row: 1;
}
.grid-2 div:nth-child(3){
    grid-column: 4 / 7;
    grid-row: 4;
}
.grid-2 div:nth-child(4){
    grid-column: 1 / 4;
    grid-row: 6;
}
.grid-3{
    --row: 6;
    font-size: 10em;
}
.grid-3 div{
    grid-column: 2/ 6;
    text-wrap: nowrap;
}
.grid-3 div:nth-child(even){
    text-align: right;
}
.grid-3 div:nth-child(5){
    grid-column: 1/ 6;
}
.grid-3 div:nth-child(4){
    grid-column: 1/ 7;
}
footer{
    border-top: 1px solid #2E373A55;
    min-height: 100vh;
}
footer .content{
    width: min(1400px, 100vw);
    margin: auto;
    padding: 100px 20px;
}
.grid-5{
    --row: 5;
    font-size:1.7em;
}
.grid-5 div:nth-child(1){
    grid-row: 1;
    grid-column: 1 / 3;
}
.grid-5 div:nth-child(2){
    grid-row: 2;
    grid-column: 3 / 5;
}
.grid-5 div:nth-child(3){
    grid-row: 3;
    grid-column: 5 / 7;
}
.grid-5 div:nth-child(4){
    grid-row: 1;
    grid-column: 5 / 7;
}

@media screen and (max-width: 1023px){
    header img{
        height: 2em;
    }
    .banner .content h1{
        font-size: 12em;
    }
    .banner .content .right{
        transform: none;
    }
    .grid-2 div:nth-child(1){
        grid-row: 2;
    }
    .grid-2 div:nth-child(3){
        grid-row: 6;
    }
    .grid-2 div:nth-child(4){
        grid-row: 5;
    }
    .grid-3{
        font-size: 5em;
        line-height: 1em;
    }
}
@media screen and (max-width: 1023px){
    header img{
        height: unset;
        width: 100%;
    }
    .banner .content h1{
        font-size: 7em;
    }
    .banner .content{
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .banner{
        overflow: hidden;
    }
    .grid-1 h2:nth-child(3){
        font-size: 3em;
    }
    .grid{
        display: block;
    }
    .grid-3{
        font-size: 4em;
        display: block;
        margin-bottom: 100px;
    }
}

.autoRotate{
    animation: autoRotateAnimation;
    animation-timeline: view();
}
@keyframes autoRotateAnimation{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
.autoShow{
    animation: autoShowAnimation both;
    animation-timeline: view(70% 5%);

}
@keyframes autoShowAnimation{
    from{
        opacity: 0;
        transform: translateY(200px) scale(0.3);
    }to{
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
.autoBLur{
    animation: autoBLurAnimation linear both;
    animation-timeline: view();
}
@keyframes autoBLurAnimation{
    0%{
        filter: blur(40px);
    }
    45%, 55%{
        filter: blur(0px);
    }
    100%{
        filter: blur(40px);
    }
}
.HomepageButton {
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