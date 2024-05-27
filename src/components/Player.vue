<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <img
    :src="playerImage1"
    :style="{ left: position.x + 'px', top: position.y + 'px', position: 'absolute' }"
    alt="Player"
    class="player-image"
  />
</template>

<script setup > 
import { defineProps, onMounted } from 'vue' // Import defineProps helper

// Define props
const props = defineProps({
  position: Object // Define the position prop
})



// Props
// const { position } = props
const playerImageSrc = '/src/assets/character/george.png'
const playerImage1 = '/src/assets/character/george1.png'

onMounted(() => {

  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const CANVAS_WIDTH = canvas.width = 300;
  const CANVAS_HEIGHT = canvas.height = 300;

  const playerImage = new Image();
  playerImage.src = playerImageSrc;
  const spriteWidth = 48; //192/4 (width / column)
  const spriteHeight = 48;
  let frameX = 0; //horizontally
  let frameY = 0; //vertically
  let gameFrame = 0;
  const staggerFrames = 8; // affected to the speed of changing frame, fix with frame <3

  function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    // let position = Math.floor(gameFrame/staggerFrames) % 3;
    // ctx.fillRect(100,50,100,100);
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameY * spriteWidth, frameX * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrames == 0) {
      if (frameX < 3) frameX++;
    else frameX = 0;

    }

    gameFrame++;
    requestAnimationFrame(animate);
  };
  animate();

  // const spriteWidth = 50;
  // const spriteHeight = 50;
  // let frameX = 0;
  // const staggerFrames = 5;
  // let frameCount = 0;

  // function animate () {
  //   ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
  //   ctx.drawImage(
  //     playerImage,
  //     frameX * spriteWidth, 0,
  //     spriteWidth, spriteHeight,
  //     props.position.x, props.position.y,
  //     spriteWidth, spriteHeight
  //   );

  //   frameCount++;
  //   if (frameCount % staggerFrames === 0) {
  //     frameX = (frameX +1) % (playerImage.width/spriteWidth);
  //   }

  //   requestAnimationFrame(animate);
  // }

  // playerImage.onload = () => {
  //   animate();
  // };
})

</script>

<style scoped>
/* Player styles */
/* You can add additional styles for the player image if needed */
.player-image {
  width: 50px;
  height: 50px;
}

canvas {
  position: absolute;
}
</style>
