<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <img
    :src="playerImageSrc"
    :style="{ left: position.x + 'px', top: position.y + 'px', position: 'absolute' }"
    alt="Player"
    class="player-image"
  />

</template>

<script setup > 
import { defineProps,ref, onMounted, onUnmounted, watch } from 'vue' // Import defineProps helper
// import George_up from '@/assets/character/George_up.png'

// Define props
const props = defineProps({
  position: Object, // Define the position prop
  direction: String, // track direction
  checkCollision: Function,
  checkObjectPickup: Function,
  hasGun:Boolean,
  shootBullet: Function,
  // image:String
})


// Props
const { position, checkObjectPickup } = props

const playerImageSrc = ref( '/assets/character/George_down.png')

const playerImages = {
  up: '/assets/character/George_up.png',
  down: '/assets/character/George_down.png',
  left: '/assets/character/George_left.png',
  right: '/assets/character/George_right.png',
}

const playerImagesWithGun = {
  up: '/assets/character/George_up(gun).png',
  down: '/assets/character/George_down(gun).png',
  left: '/assets/character/George_left(gun).png',
  right: '/assets/character/George_right(gun).png',
};

// Function to switch the player image based on the direction and gun possession
const switchSprite = (direction) => {
  if (props.hasGun) {
    playerImageSrc.value = playerImagesWithGun[direction] || playerImagesWithGun.down;
  } else {
    playerImageSrc.value = playerImages[direction] || playerImages.down;
  }
};

// Watcher to update the player image when direction or hasGun changes
watch([() => props.direction, () => props.hasGun], ([newDirection]) => {
  switchSprite(newDirection);
});


// watch for direction changes
// import {watch} from 'vue'
// watch(() => props.direction, (newDirection) => {
//   switschSprite(newDirection)
// })


//Handle keydown events
const handleKeyDown = (event) => {
  const speed = 10;
  // const containerRight = gameContainer().right;
  // const containerBottom = props.gameContainer.bottom;

  let newX = position.x;
  let newY = position.y;

  switch (event.key) {
    case 'w':
    case 'W':
    switchSprite('up')
    newY -= speed;
    break
    case 's':
    case'S':
    switchSprite('down')
    newY += speed;
    break
    case 'a':
    case'A':
    switchSprite('left')
    newX -= speed;
    break
    case 'd':
    case 'D':
    switchSprite('right')
    newX += speed;
    break;
    case ' ':
      if (props.hasGun) {
        props.shootBullet(position, props.direction); // Shoot a bullet
      }
      break;
  }
  if(!props.checkCollision(newX, newY, 50, 50)) {
    position.x = newX;
    position.y = newY;
  }

  checkObjectPickup();
}

// Add event listener on mounted and remove on unmounted
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown),
  switchSprite(props.direction);
})

onUnmounted(() => {
  window.addEventListenerr('keydown', handleKeyDown)
})

/*  onMounted(() => {

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
  const staggerFrames = 8; // affected to the speed of changing frame, fix with frame <3 (need this) */

  /*function animate() {
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
  animate();(need this)*/

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
//})

</script>

<style scoped>
/* Player styles */
/* You can add additional styles for the player image if needed */

.player-image {
  width: 45px;
  height: 45px;
}
.Character {
  width: 70px;
  height: 70px;
  background: red;
  overflow: hidden;

}

/* .player-image {
  width: 50px;
  height: 50px;
  background: red;
  overflow: hidden;
} */

canvas {
  position: absolute;
}

</style>*/
