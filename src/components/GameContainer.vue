<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="playerData.health > 0"
    class="game"
    tabindex="0"
    @keydown="movePlayer"
    ref="gameContainer"
  >
    <!-- Render the player component -->
    <Player :position="playerData.position" />

    <Monster v-for="(monster, index) in monsters" :key="index" :monsterData="monster" :initialPosition="monster.position"/>
    

    <div
      class="health-display"
      :style="{ left: `${minX}px` }"
  >
      Health: {{ playerData.health }}
    </div>
  </div>
  
</template>

<script setup>
import { reactive, onMounted, onUnmounted } from 'vue'
import Player from './Player.vue' // Import the Player component
import Monster from './Monster.vue';

// Reactive object to store player position
const playerData = reactive({
  position: { x: 0, y: 0 },
  health: 100})

// Function to handle player movement
const movePlayer = (event) => {
  const speed = 50; // Adjust speed as needed
  const gameContainer = document.querySelector('.game');
  const gameRect = gameContainer.getBoundingClientRect();
  const playerElement = document.querySelector('.player-image');
  const playerRect = playerElement.getBoundingClientRect();

  const minX = gameRect.left ;
  const maxX = gameRect.right;
  const minY = gameRect.top;
  const maxY = gameRect.bottom;

  switch (event.key) {
    case 'w':
    case 'W':
      if (playerRect.top - speed >= minY) {
        playerData.position.y -= speed;
      }
      break;
    case 's':
    case 'S':
      if (playerRect.bottom + speed <= maxY) {
        playerData.position.y += speed;
      }
      break;
    case 'a':
    case 'A':
      if (playerRect.left - speed >= minX) {
        playerData.position.x -= speed;
      }
      break;
    case 'd':
    case 'D':
      if (playerRect.right + speed <= maxX) {
        playerData.position.x += speed;
      }
      break;
  }
};
let gameContainer; // Reference to the game container

const monsters = reactive([
  { imagePath: 'src/components/entity images/slime.png', position: { x: 1200, y: 600 }, health: 55 },
  { imagePath: 'src/components/entity images/slime.png', position: { x: 200, y: 200 }, health: 75 }
  // Add more monsters as needed
]);

onMounted(() => {
  // component is now mounted.
  console.log("GameContainer mounted");
  gameContainer = document.querySelector('.game');

  // Listen for window resize event
  window.addEventListener('resize', handleWindowResize);
});

onUnmounted(() => {
  // Remove event listener when component is unmounted
  window.removeEventListener('resize', handleWindowResize);
});

const handleWindowResize = () => {
  // Update player position when window is resized
  const gameRect = gameContainer.getBoundingClientRect();
  const playerElement = document.querySelector('.player-image');
  const playerRect = playerElement.getBoundingClientRect();

  // Adjust player position based on game container's new dimensions
  playerData.position.x = Math.min(playerData.position.x, gameRect.width - playerRect.width);
  playerData.position.y = Math.min(playerData.position.y, gameRect.height - playerRect.height);
};
</script>

<!-- Add Player component styles -->
<style scoped>
/* Game styles */
.game {
  width: 80vw; /* 80% of viewport width */
  height: 80vh; /* 80% of viewport height */
  border: 4px solid black;
  margin: auto; /* Center the container horizontally */
  position: relative; /* Ensure positioning relative to its containing element */
}
.health-display {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>