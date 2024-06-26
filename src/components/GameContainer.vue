<!-- eslint-disable vue/multi-word-component-names -->
<!-- v-if="playerData.health > 0" -->
<template>
  
  <div
    class="game"
    tabindex="0"
    @keydown="movePlayer"
    ref="gameContainer"
  >

  <div class="camera" ref="cameraContainer">
    <!-- Render the tiles -->
    <div v-for="(tile, index) in tiles" :key="index">
      <Tile :tileData="tile" />
    </div>
  
    <!-- Render the player component -->
    <Player :position="playerData.position" :image="playerData.image" :checkCollision="isCollision"/>

    <!-- Render the monsters -->
    <div v-for="(monster, index) in monsters" :key="index">
      <template v-if="monster.health > 0">
        <Monster :monsterData="monster" :initialPosition="monster.position" />
      </template>
    </div>

         <!-- Render the objects (exp gun and coin) -->
      <div v-for="(object, index) in uncollectedObjects" :key="index" class="object" :style="{ left: object.position.x + 'px', top: object.position.y + 'px' }">
        <img :src="getObjectImagePath(object.type)" :alt="object.type" />
      </div>
    
  </div>

    <div class="health-display">Health: {{ playerData.health }}</div>
    <div class="coin-display">Coins: {{ playerData.collectedCoins }}</div>
  </div>


</template>

<script setup>
import { reactive, onMounted, onUnmounted, ref, watch, computed } from 'vue';
import Player from './Player.vue';
import Monster from './Monster.vue';
import Tile from './Tile.vue';
import axios from 'axios';
// import levelData from './levelData.json';

const gameContainer = ref(null);
const cameraContainer = ref(null);
const gameRect = ref(null);
const zoomLevel = 1.5;

onMounted(() => {
  
  updateGameRect();
  window.addEventListener('resize', handleWindowResize);
  // updateCameraTransform();
});
onUnmounted(() => {
  window.removeEventListener('resize', handleWindowResize);
});
const updateGameRect = () => {
  if (gameContainer.value) {
    gameRect.value = gameContainer.value.getBoundingClientRect();
  }
};

const updateCameraTransform = () => {
  if(!gameRect.value || !cameraContainer.value) return;

  const playerX = playerData.position.x;
  const playerY = playerData.position.y;
  const cameraX = (gameRect.value.width / 2) - (playerX * zoomLevel);
  const cameraY = (gameRect.value.height / 2) - (playerY * zoomLevel);

  cameraContainer.value.style.transform = `scale(${zoomLevel}) translate(${cameraX}px, ${cameraY}px)`;
}

onMounted(() => {
  gameContainer.value = document.querySelector('.game');
  updateGameRect();
  loadTiles("levelData1.json");
  window.addEventListener('resize', handleWindowResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleWindowResize);
});

// Reactive object to store player position
const playerData = reactive({
  position: { x: 900, y: 160 },
  health: 100, 
  hasGun: false,
  collectedCoins:0,
  // image:'/assets/character/George_down.png'
});

const getObjectImagePath = (type) => {
  switch (type) {
    case 'gun':
      return '/assets/object/gun1.png';
    case 'coin':
      return '/assets/object/coin.png';
    // default:
    //   return '/assets/object/default.png'; // default image if type does not match
  }
}; 


//need to use these
const loadTiles = async (level) => {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const endpoint = `${baseUrl}/levelData?level=${level}`;

  try {
    const response = await axios.get(endpoint);
    tiles.value = response.data.tiles;
  } catch (error) {
    console.error('Error fetching level data:', error);
  }
};

// let tiles = ref( levelData.tiles )
//need to use this
const tiles = ref([]);

const objects = reactive([
{type:'gun', position: { x: 1200, y: 20 }, collected: false },
{type:'coin', position: { x: 1000, y: 20 }, collected: false },
{type:'coin', position: { x: 900, y: 20 }, collected: false },
{type:'coin', position: { x: 950, y: 20 }, collected: false },


//add more objects as needed
]);

// Computed property to filter out collected objects
const uncollectedObjects = computed(() => objects.filter(object => !object.collected));


// Function to handle object pickup
const pickupObject = (object) => {
  if (object.type === 'gun' && !playerData.hasGun) {
    playerData.hasGun = true;
    // playerData.image='/assets/character/George_down(gun).png';
    object.collected = true;
  } else if (object.type === 'coin') {
    playerData.collectedCoins += 1;
    object.collected = true;
  }
  // Add more conditions for other types of objects
};

const checkObjectPickup = () => {
  uncollectedObjects.value.forEach(object => {
    if (checkCollision(playerData.position, object.position, 50, 50)) {
      pickupObject(object);
    }
  });
};

const checkCollision = (pos1, pos2, size1, size2) => {
  return (
    pos1.x < pos2.x + size2 &&
    pos1.x + size1 > pos2.x &&
    pos1.y < pos2.y + size2 &&
    pos1.y + size1 > pos2.y
  );
};

const currentTick = ref(0);

const isCollision = (newX, newY, entityWidth, entityHeight) => {
  // Check if the new position intersects with any collidable tile
  if (!gameRect.value) return true;

  const containerRight = gameRect.value.right - entityWidth*2;
  const containerBottom = gameRect.value.bottom - entityHeight;

  if (newX < 0 || newX > containerRight || newY < 0 || newY > containerBottom) {
    return true;
  }

  return tiles.value.some(tile => {
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
    let x = monsters[i].position.x;
    let y = monsters[i].position.y;
    let monsterSpeed = monsters[i].speed;
    let playerPositionX = playerData.position.x;
    let playerPositionY = playerData.position.y;

    let newX = x;
    let newY = y;

    if (x + monsterSpeed < playerPositionX) {
      newX += monsterSpeed;
    }
    if (x - monsterSpeed > playerPositionX) {
      newX -= monsterSpeed;
    }
    if (y + monsterSpeed < playerPositionY) {
      newY += monsterSpeed;
    }
    if (y - monsterSpeed > playerPositionY) {
      newY -= monsterSpeed;
    }

    const monsterWidth = 50;  // Assuming monster width is 50
    const monsterHeight = 50; // Assuming monster height is 50

    // Check X-axis movement
    if (!isCollision(newX, y, monsterWidth, monsterHeight)) {
      monsters[i].position.x = newX;
    }

    // Check Y-axis movement
    if (!isCollision(x, newY, monsterWidth, monsterHeight)) {
      monsters[i].position.y = newY;
    }

    // Handle case where both X and Y movements are blocked
    if (isCollision(newX, y, monsterWidth, monsterHeight) && isCollision(x, newY, monsterWidth, monsterHeight)) {
      // Simple collision avoidance: try moving in a different direction
      let directions = [
        { dx: monsterSpeed, dy: 0 },
        { dx: -monsterSpeed, dy: 0 },
        { dx: 0, dy: monsterSpeed },
        { dx: 0, dy: -monsterSpeed }
      ];

      // Shuffle the directions array to introduce randomness
      directions = directions.sort(() => Math.random() - 0.5);

      for (let direction of directions) {
        let tryX = x + direction.dx;
        let tryY = y + direction.dy;
        if (!isCollision(tryX, tryY, monsterWidth, monsterHeight)) {
          monsters[i].position.x = tryX;
          monsters[i].position.y = tryY;
          break;
        }
      }
    }

    monsterAttackMelee(monsters[i], playerData);
  }
};

const monsterAttackMelee = (monster, playerData) => {
  if (
    Math.abs(monster.position.x - playerData.position.x) <= monster.speed &&
    Math.abs(monster.position.y - playerData.position.y) <= monster.speed &&
    monster.lastAttack + monster.attackSpeed < currentTick.value
  ) {
    playerData.health -= monster.damage;
    monster.lastAttack = currentTick.value;
  }
};




setInterval(() => {
  currentTick.value++;
  moveMonsters(monsters, playerData);
  // updateCameraTransform();
  checkObjectPickup();
}, 100);

let monsters = reactive([
  { imagePath: '/assets/entity images/slime.png', position: { x: 900, y: 200 }, health: 55, speed: 4, damage: 2, attackSpeed: 3, lastAttack: 0, monsterType: "melee" },
  { imagePath: '/assets/entity images/slime.png', position: { x: 200, y: 200 }, health: 100, speed: 6, damage: 4, attackSpeed: 5, lastAttack: 0, monsterType: "ranged" }
  // Add more monsters as needed
]);

monsters = monsters.filter((monster) => monster.health > 0);

const handleWindowResize = () => {
  updateGameRect();
  adjustPlayerPosition();
  // updateCameraTransform();
};

const adjustPlayerPosition = () => {
  if (!gameRect.value) return;

  const playerElement = document.querySelector('.player-image');
  const playerRect = playerElement.getBoundingClientRect();

  playerData.position.x = Math.min(playerData.position.x, gameRect.value.width - playerRect.width);
  playerData.position.y = Math.min(playerData.position.y, gameRect.value.height - playerRect.height);
};

watch(playerData.position, () => {
  // updateCameraTransform();
});


</script>

<style scoped>
/* Game styles */


.game {
  width: 98vw;
  height: 98vh;
  border: 4px solid black;
  margin: auto; /* Center the container horizontally */
  position: relative; /* Ensure positioning relative to its containing element */
  justify-content: center;
  transition: left 0.1s, top 0.1s;
  background-color: yellowgreen;
}
.health-display {
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
}
.grassTile {
  width: 100%;
  height: 100%;
  margin: 0;
}
.camera {
  position: absolute;
  transition: transform 0.1s;
  transform-origin: top left;
}

.gun {
  position: absolute;
  width: 30px; /* Adjust size as needed */
  height: 30px; /* Adjust size as needed */
  cursor: pointer; /* Optional: Change cursor to pointer when hovering */
}

.coin-display {
  left: 100px;
}

.object {
  position: absolute;
  width: 30px; /* Adjust size as needed */
  height: 30px; /* Adjust size as needed */
  z-index: 20; /* Ensure objects are above the player and tiles */
  cursor: pointer; /* Optional: Change cursor to pointer when hovering */
}


</style>


