<!-- eslint-disable vue/multi-word-component-names -->
<!-- v-if="playerData.health > 0" -->
<template>
  <div
    class="game"
    tabindex="0"
    @keydown="movePlayer"
    ref="gameContainer"
  >
    <!-- Render the tiles -->
    <div v-for="(tile, index) in tiles" :key="index">
      <Tile :tileData="tile" />
    </div>

    <!-- Render the player component -->
    <Player :position="playerData.position" />

    <!-- Render the monsters -->
    <div v-for="(monster, index) in monsters" :key="index">
      <template v-if="monster.health > 0">
        <Monster :monsterData="monster" :initialPosition="monster.position" />
      </template>
    </div>

    <div v-for="(tile, index) in tiles" :key="index">
        <Tile :tileData="tile"/>
    </div>

    <div class="health-display" :style="{ left: `${minX}px` }">Health: {{ playerData.health }}</div>
    <!-- mapping the container with the tile -->
    
    <div>
      <canvas id="canvas1" class="canvas1" width="200" height="200"></canvas>
    </div>
    
    
</div>
</template>

<script setup>
import { reactive, onMounted, onUnmounted } from 'vue';
import Player from './Player.vue';
import Monster from './Monster.vue';
import Tile from './Tile.vue';

// Reactive object to store player position
const playerData = reactive({
  position: { x: 0, y: 0 },
  health: 100
});

const isCollision = (newX, newY, entityWidth, entityHeight) => {
  // Check if the new position intersects with any collidable tile
  return tiles.some(tile => {
    if (!tile.collision) return false;

    const tileX = tile.position.x;
    const tileY = tile.position.y;
    const tileSize = 50; // Assuming each tile is 50x50 pixels

    return (
      newX < tileX + tileSize &&
      newX + entityWidth > tileX &&
      newY < tileY + tileSize &&
      newY + entityHeight > tileY
    );
  });
};


const moveMonsters = (monsters, playerData) => {
  for (let i = 0; i < monsters.length; i++) {
    let newX = monsters[i].position.x;
    let newY = monsters[i].position.y;

    if (monsters[i].position.x + monsters[i].speed < playerData.position.x) {
      newX += monsters[i].speed;
    } else if (monsters[i].position.x - monsters[i].speed > playerData.position.x) {
      newX -= monsters[i].speed;
    }
    if (monsters[i].position.y + monsters[i].speed < playerData.position.y) {
      newY += monsters[i].speed;
    } else if (monsters[i].position.y - monsters[i].speed > playerData.position.y) {
      newY -= monsters[i].speed;
    }

    const monsterWidth = 50;  // Assuming monster width is 50
    const monsterHeight = 50; // Assuming monster height is 50

    if (!isCollision(newX, newY, monsterWidth, monsterHeight)) {
      monsters[i].position.x = newX;
      monsters[i].position.y = newY;
    }

    if (Math.abs(monsters[i].position.x - playerData.position.x) <= monsters[i].speed &&
        Math.abs(monsters[i].position.y - playerData.position.y) <= monsters[i].speed) {
      playerData.health -= monsters[i].damage;
    }
  }
};


setInterval(() => {
  moveMonsters(monsters, playerData);
}, 100);

// Function to handle player movement
const movePlayer = (event) => {
  const speed = 50; 
  const gameContainer = document.querySelector('.game');
  const gameRect = gameContainer.getBoundingClientRect();
  const playerElement = document.querySelector('.player-image');
  const playerRect = playerElement.getBoundingClientRect();

  const containerLeft = gameRect.left;
  const containerRight = gameRect.right - playerRect.width;
  const containerTop = gameRect.top;
  const containerBottom = gameRect.bottom - playerRect.height;

  let newX = playerData.position.x;
  let newY = playerData.position.y;

  switch (event.key) {
    case 'w':
    case 'W':
      newY -= speed;
      break;
    case 's':
    case 'S':
      newY += speed;
      break;
    case 'a':
    case 'A':
      newX -= speed;
      break;
    case 'd':
    case 'D':
      newX += speed;
      break;
  }

  const playerWidth = 50;  // Assuming player width is 50
  const playerHeight = 50; // Assuming player height is 50

  if (
    newX >= 0 && newX <= containerRight &&
    newY >= 0 && newY <= containerBottom &&
    !isCollision(newX, newY, playerWidth, playerHeight)
  ) {
    playerData.position.x = newX;
    playerData.position.y = newY;
  }
};


let gameContainer; // Reference to the game container

let monsters = reactive([
  { imagePath: 'src/components/entity images/slime.png', position: { x: 400, y: 550 }, health: 55, speed: 4, damage: 2 },
  { imagePath: 'src/components/entity images/slime.png', position: { x: 200, y: 200 }, health: 100, speed: 6, damage: 4 }
  // Add more monsters as needed
]);

monsters = monsters.filter((monster) => monster.health > 0);

let tiles = reactive([
{ imagePath: 'src/assets/tiles/grass.png', position: { x: 0, y: 0}},
{ imagePath: 'src/assets/tiles/grass.png', position: { x: 0, y: 50}},
{ imagePath: 'src/assets/tiles/grass.png', position: { x: 0, y: 100}},
{ imagePath: 'src/assets/tiles/grass.png', position: { x: 0, y: 650}},
{ imagePath: 'src/assets/tiles/grass.png', position: { x: 50, y: 0}},
{ imagePath: 'src/assets/tiles/grass.png', position: { x: 100, y: 200}}

])

onMounted(() => {
  gameContainer = document.querySelector('.game');
  window.addEventListener('resize', handleWindowResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleWindowResize);
});

const handleWindowResize = () => {
  const gameRect = gameContainer.getBoundingClientRect();
  const playerElement = document.querySelector('.player-image');
  const playerRect = playerElement.getBoundingClientRect();

  playerData.position.x = Math.min(playerData.position.x, gameRect.width - playerRect.width);
  playerData.position.y = Math.min(playerData.position.y, gameRect.height - playerRect.height);
};
</script>

<style scoped>
/* Game styles */
.game {
  width: 95vw;
  height: 95vh;
  border: 4px solid black;
  margin: auto; /* Center the container horizontally */
  position: relative; /* Ensure positioning relative to its containing element */
  justify-content: center;
}
.health-display {
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
}

.grassTile {
  width:100%;
  height:100%;
  margin: 0;
}
</style>
