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
    <Player :position="playerData.position" :checkCollision="isCollision"/>

    <!-- Render the monsters -->
    <div v-for="(monster, index) in monsters" :key="index">
      <template v-if="monster.health > 0">
        <Monster :monsterData="monster" :initialPosition="monster.position" />
      </template>
    </div>

    <div class="health-display">Health: {{ playerData.health }}</div>

    <div class="camera"></div>
  </div>
</template>

<script setup>
import { reactive, onMounted, onUnmounted, ref } from 'vue';
import Player from './Player.vue';
import Monster from './Monster.vue';
import Tile from './Tile.vue';
// import levelData from './levelData.json';

let gameContainer = null;
let gameRect = null;

onMounted(() => {
  gameContainer = document.querySelector('.game');
  updateGameRect();
  loadTiles();
  window.addEventListener('resize', handleWindowResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleWindowResize);
});

//establish camera topdown
const camera = document.querySelector('.viewPoint')


const updateGameRect = () => {
  if (gameContainer) {
    gameRect = gameContainer.getBoundingClientRect();
  }
};

// Reactive object to store player position
const playerData = reactive({
  position: { x: 0, y: 160 },
  health: 100
});

const loadTiles = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const endpoint = baseUrl + '/levelData?level=levelData1.json';
  const requestOptions = {
    method: 'GET'
  };
  
  fetch(endpoint, requestOptions)
    .then(response => response.json())
    .then(data => {
      tiles.value = data.tiles;
    })
    .catch(error => {
      console.error('Error fetching level data:', error);
    });
};

// let tiles = ref( levelData.tiles )
const tiles = ref([]);

const currentTick = ref(0);

const isCollision = (newX, newY, entityWidth, entityHeight) => {
  // Check if the new position intersects with any collidable tile
  if (!gameRect) return true;

  const containerRight = gameRect.right - entityWidth*2;
  const containerBottom = gameRect.bottom - entityHeight;

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

    if (x + monsterSpeed < playerPositionX) {
      x += monsterSpeed;
    } else if (x - monsterSpeed > playerPositionX) {
      x -= monsterSpeed;
    }
    if (y + monsterSpeed < playerPositionY) {
      y += monsterSpeed;
    } else if (y - monsterSpeed > playerPositionY) {
      y -= monsterSpeed;
    }

    const monsterWidth = 50;  // Assuming monster width is 50
    const monsterHeight = 50; // Assuming monster height is 50

    if (!isCollision(x, y, monsterWidth, monsterHeight)) {
      monsters[i].position.x = x;
      monsters[i].position.y = y;
    }

    monsterAttackMelee(monsters[i], playerData)

  }
}

const monsterAttackMelee = (monster, playerData) => {
  if (Math.abs(monster.position.x - playerData.position.x) <= monster.speed &&
        Math.abs(monster.position.y - playerData.position.y) <= monster.speed &&
        monster.lastAttack + monster.attackSpeed < currentTick.value) {
        playerData.health -= monster.damage;
        monster.lastAttack = currentTick.value;
    }
}


setInterval(() => {
  currentTick.value++;
  moveMonsters(monsters, playerData);
}, 100);

let monsters = reactive([
  { imagePath: '/assets/entity images/slime.png', position: { x: 400, y: 550 }, health: 55, speed: 4, damage: 2, attackSpeed: 3, lastAttack: 0, monsterType: "melee" },
  { imagePath: '/assets/entity images/slime.png', position: { x: 200, y: 200 }, health: 100, speed: 6, damage: 4, attackSpeed: 5, lastAttack: 0, monsterType: "ranged" }
  // Add more monsters as needed
]);

monsters = monsters.filter((monster) => monster.health > 0);

const handleWindowResize = () => {
  updateGameRect();
  adjustPlayerPosition();
};

const adjustPlayerPosition = () => {
  if (!gameRect) return;

  const playerElement = document.querySelector('.player-image');
  const playerRect = playerElement.getBoundingClientRect();

  playerData.position.x = Math.min(playerData.position.x, gameRect.width - playerRect.width);
  playerData.position.y = Math.min(playerData.position.y, gameRect.height - playerRect.height);
};
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
:root{
  --pixel-size: 2px;
  --grid-cell: calc(var(--pixel-size) * 16);
}
@media(min-width: 700px) {
  :root {
    --pixel-size: 3px;
  }
}
@media( min-width: 900px ) {
  :root {
    --pixel-size: 4px;
  }
}
.camera {
  width: calc(var(--pixel-size) * 160);
  height: calc(var(--pixel-size) * 144);
  overflow: hidden;
  background: #61ddf7;
  position: relative;
}

</style>


