<!-- eslint-disable vue/multi-word-component-names -->
<!-- v-if="playerData.health > 0" -->
<template>
  
  <div
    class="game"
    tabindex="0"
    ref="gameContainer"
  >

  <div class="camera" ref="cameraContainer">
    <!-- Render the tiles -->
    <div v-for="(tile, index) in tiles" :key="index">
      <Tile :tileData="tile" />
    </div>
  
    <!-- Render the player component -->
    <Player :position="playerData.position" 
            :image="playerData.image" 
            :checkCollision="isCollision"
            :direction="playerData.direction"
            :checkObjectPickup="checkObjectPickup"
            :hasGun="playerData.hasGun"
            :shootBullet="shootBullet"
            :keybinds="keybinds"/>

      <!-- Render the bullets -->
      <div v-for="(bullet, index) in bullets" :key="index" class="bullet" :style="{ left: bullet.position.x + 'px', top: bullet.position.y + 'px', position: 'absolute' }">
        <img :src="bullet.image" alt="Bullet" width="50px" height="50px"/>
      </div>

    <!-- Render the monsters -->
    <div v-for="(monster, index) in monsters" :key="index">
      <template v-if="monster.health > 0">
        <Monster :monsterData="monster" :updateMonster="updateMonster" :playerData="playerData" :checkCollision="isCollision" :currentTick="currentTick"/>
      </template>
    </div>

         <!-- Render the objects (exp gun and coin) -->
      <div v-for="(object, index) in uncollectedObjects" :key="index" class="object" :style="{ left: object.position.x + 'px', top: object.position.y + 'px' }">
        <!-- <Player :checkObjectPickup="pickupObject"/> -->
        <img :src="getObjectImagePath(object.type)" :alt="object.type" />
      </div>

      <!-- <div class="inventory">
      <h2>Inventory</h2>
      <div v-for="(item, index) in playerInventory" :key="index">
        <p>{{ item.name }}</p>
        <button @click="useItem(item)">Use</button>
      </div>
    </div>
    <button @click="togglePauseGame">{{ gamePaused ? 'Resume' : 'Pause' }}</button> -->
    
  </div>

    <div class="health-display">Health: {{ playerData.health }}</div>
    <div class="coin-display">Coins: {{ playerData.collectedCoins }}</div>
    
    <button class="exitButton"  @click="navigateToHomePage">Exit game</button>
    <button class="settingButton"  @click="navigateToSetting">Key Setting</button>
  </div>


</template>

<script setup>
import { reactive, onMounted, onUnmounted, ref, watch, computed } from 'vue';
import Player from './Player.vue';
import Monster from './Monster.vue';
import Tile from './Tile.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
// import levelData from './levelData.json';

const gameContainer = ref(null);
const cameraContainer = ref(null);
const gameRect = ref(null);
const zoomLevel = 1;

const router = useRouter();

const requiredCoins = 2; // Number of coins required to move to the next level
const requiredCoins2 = 5;

const navigateToHomePage =() => {
  router.push({name: 'home'});
}

const navigateToWinScreen =() => {
  router.push({name:'winScreen'});
}

const navigateToSetting = () => {
  router.push({name:'settings'})
}

onMounted(() => {
  updateKeybinds();
  updateGameRect();
  window.addEventListener('resize', handleWindowResize);
  // updateCameraTransform();
});
onUnmounted(() => {
  window.removeEventListener('resize', handleWindowResize);
  if (playerData.gunTimer) {
    clearTimeout(playerData.gunTimer);
  }
});

const updateKeybinds = async () => {
  const keybindings = localStorage.getItem('keybinds');
  if(keybindings) {
    const savedKeybinds = JSON.parse(localStorage.getItem('keybinds'));
    if (savedKeybinds) {
      Object.assign(keybinds, savedKeybinds);
    }
  }
  else {
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    const endpoint = `${baseUrl}/getKeybinds`;
    const keybindResponse = await axios.get(endpoint);
    if(keybindResponse.status === 200) {
      localStorage.setItem('keybinds', JSON.stringify(keybindResponse.data));
      updateKeybinds();
    } else {
      const defaultKeybinds = {moveUp: 'w', moveDown: 's', moveLeft: 'a', moveRight: 'd', shoot: 'f', settings: 'p'};
      Object.assign(keybinds, defaultKeybinds);
    }
  }
}

const keybinds = reactive({});

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
  setInterval(moveBullets, 1000 / 60); // Move bullets every frame
});

onUnmounted(() => {
  window.removeEventListener('resize', handleWindowResize);
});

// Reactive object to store player position
const playerData = reactive({
  position: { x: 900, y: 450 },
  direction:'down',
  health: 100, 
  hasGun: false,
  collectedCoins:0,
  gunTimer:null,
  currentLevel:1,// track current level
});

// Computed property to check if player health is zero or below
const isPlayerDead = computed(() => {
  return playerData.health <= 0;
});

// Watch for changes in isPlayerDead computed property
watch(isPlayerDead, (dead) => {
  if (dead) {
    navigateToDeathScreen(); // Navigate to death screen if player is dead
  }
});

// Function to navigate to the death screen
const navigateToDeathScreen = () => {
  router.push({ name: 'deathscreen' }); // Navigate to the DeathScreen
};

const startGunTimer = () => {
  if (playerData.gunTimer) {
    clearTimeout(playerData.gunTimer);
  }
  playerData.gunTimer = setTimeout(() => {
    playerData.hasGun = false;
    playerData.gunTimer = null;
  }, 5000);
};



const getObjectImagePath = (type) => {
  switch (type) {
    case 'gun':
      return '/assets/object/gun_left.png';
    case 'coin':
      return '/assets/object/coin.png';
    case 'kevin':
      return '/assets/character/kevin_down.png';
    case 'healthPotion':
      return '/assets/object/health_potion.png';
    // default:
    //   return '/assets/object/default.png'; // default image if type does not match
  }
}; 


//need to use these
// const loadTiles = async (level) => {
//   const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
//   const endpoint = `${baseUrl}/levelData?level=${level}`;

//   try {
//     const response = await axios.get(endpoint);
//     tiles.value = response.data.tiles;
//     objects.splice(0, objects.length, ...response.data.objects)
//     console.log(objects.value)
//   } catch (error) {
//     console.error('Error fetching level data:', error);
//   }
// };

// let tiles = ref( levelData.tiles )
//need to use this
const tiles = ref([]);

const objects = reactive([])

// const objects = reactive([
// {type:'gun', position: { x: 1200, y: 20 }, collected: false },
// {type:'coin', position: { x: 1000, y: 20 }, collected: false },
// {type:'coin', position: { x: 900, y: 20 }, collected: false },
// {type:'coin', position: { x: 950, y: 20 }, collected: false },
// {type:'coin', position: { x: 550, y: 200 }, collected: false },
// {type:'coin', position: { x: 600, y: 200 }, collected: false },
// {type:'coin', position: { x: 950, y: 500 }, collected: false },
// {type:'coin', position: { x: 300, y: 480 }, collected: false },
// {type:'coin', position: { x: 250, y: 480 }, collected: false },
// {type:'coin', position: { x: 0, y: 130 }, collected: false },
// {type:'coin', position: { x: 200, y: 0 }, collected: false },
// {type:'coin', position: { x: 360, y: 150 }, collected: false },
// {type:'coin', position: { x: 1150, y: 350 }, collected: false },
// {type:'coin', position: { x: 1150, y: 320 }, collected: false },
// {type:'kevin', position: { x: 1250, y: 490 }, collected: false },


// //add more objects as needed
// ]);

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
    checkNextLevel(); // check for level progression after picking up a coin
  } else if (object.type === 'kevin') {
    checkNextLevel(); // Check if player can proceed to the next level
  } else if (object.type === 'healthPotion') {
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

const sendMonsterUpdate = (updateMonster) => {
  return updateMonster = !updateMonster;
}

let updateMonster = false;

setInterval(() => {
  currentTick.value++;
  updateMonster = sendMonsterUpdate(updateMonster);
  // updateCameraTransform();
}, 100);

let monsters = reactive([
  // { imagePath: '/assets/entity images/slime.png', position: { x: 900, y: 400 }, health: 55, speed: 4, damage: 2, attackSpeed: 3, lastAttack: 0, monsterType: "melee" },
  // { imagePath: '/assets/entity images/slime.png', position: { x: 1000, y: 150 }, health: 100, speed: 6, damage: 4, attackSpeed: 5, lastAttack: 0, monsterType: "ranged" }
  // Add more monsters as needed
]);

monsters = monsters.filter((monster) => monster.health > 0);


const handleWindowResize = () => {
  updateGameRect();
  adjustPlayerPosition();
  // updateCameraTransform();
};

// const handlePlayerHit = () => {
//   playerData.health -= 10;
//   if (playerData.health <= 0) {
//     alert('Game Over');
//     playerData.health = 100; // Reset health for simplicity
//   }
// };


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

// const zoomIn = () => {
//   zoomLevel = Math.min(2, zoomLevel + 0.1);
//   updateCameraTransform();
// };

// const zoomOut = () => {
//   zoomLevel = Math.max(0.5, zoomLevel - 0.1);
//   updateCameraTransform();
// };

// Drop a coin at the monster's position after it dies
const dropCoin = (monsterPosition) => {
  objects.push({
    type: 'coin',
    position: { ...monsterPosition },
    collected: false,
  });
};

// Handle monster death
const handleMonsterDeath = (monster) => {
  dropCoin(monster.position);
};

// shootimage is for the bullet direction base on the direction of the character
// this bullet's direction function is not working yet
const shootBullet = (position, direction) => {
  const bulletSpeed = 10;
  const bulletImages = {
    up: '/assets/object/bullet_up.png',
    down: '/assets/object/bullet_down.png',
    left: '/assets/object/bullet_left.png',
    right: '/assets/object/bullet_right.png',
  };
  const bullet = {
    position: { x: position.x, y: position.y },
    direction,
    speed: bulletSpeed,
    image: bulletImages[direction],
  };

  bullets.push(bullet);
  startGunTimer();
};

const bullets = reactive([]);

const moveBullets = () => {
  bullets.forEach(bullet => {
    switch (bullet.direction) {
      case 'up':
        bullet.position.y -= bullet.speed;
        break;
      case 'down':
        bullet.position.y += bullet.speed;
        break;
      case 'left':
        bullet.position.x -= bullet.speed;
        break;
      case 'right':
        bullet.position.x += bullet.speed;
        break;
    }

    // Remove bullets that are out of bounds
    if (
      bullet.position.x < 0 || bullet.position.x > gameRect.value.width ||
      bullet.position.y < 0 || bullet.position.y > gameRect.value.height
    ) {
      bullets.splice(bullet)
    }

    // Check collision bullet with monsters
    monsters.forEach(monster => {
      if (monster.health > 0 && checkCollision(bullet.position, monster.position, 10, 50)) {
        monster.health -= 25; // Adjust bullet damage as needed
        bullets.splice(bullet); // Remove bullet after hit
        if (monster.health <= 0) {
          handleMonsterDeath(monster);
        }
      }
    });
  });
};

// Function to check if player can move to next level
const checkNextLevel = () => {
  if (playerData.collectedCoins >= requiredCoins) {
    const kevin = objects.find(object => object.type === 'kevin');
    if (kevin && checkCollision(playerData.position, kevin.position, 50, 50)) {
      navigateToNextLevel();
    }
  }
};

// Function to navigate to the next level
const navigateToNextLevel = () => {
  if (playerData.currentLevel === 1) {
    loadTiles("levelData2.json");
    playerData.currentLevel = 2; // Update current level to 2
  } else if (playerData.currentLevel === 2 && playerData.collectedCoins >= requiredCoins2) {
  const kevin = objects.find(object => object.type === 'kevin');
  if (playerData.collectedCoins >= requiredCoins && kevin && checkCollision(playerData.position, kevin.position, 50, 50)) {
    navigateToWinScreen(); // If in level 2 and meets Kevin with required coins, win the game
  }
}
};


//Regenerate the health every 5 seconds
const regenerateHealth = () => {
  if (playerData.health < 100) {
    playerData.health = Math.min(100, playerData.health + 1);
  }
};

setInterval(regenerateHealth, 5000);

//spawn enemy for every 10 seconds
// const spawnEnemy = () => {
//   const newEnemy = {
//     position: { x: Math.random() * gameRect.value.width, y: Math.random() * gameRect.value.height },
//     health: 50,
//   };
//   monsters.push(newEnemy);
// };

// setInterval(spawnEnemy, 10000);

const nonCollidableTiles = ref([]);

const loadTiles = async (level) => {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const endpoint = `${baseUrl}/levelData?level=${level}`;

  try {
    const response = await axios.get(endpoint);
    tiles.value = response.data.tiles;
    objects.splice(0, objects.length, ...response.data.objects);

    // Populate the non-collidable tiles list
    nonCollidableTiles.value = tiles.value.filter(tile => !tile.collision);

    console.log(objects.value);
  } catch (error) {
    console.error('Error fetching level data:', error);
  }
};

const spawnMonster = () => {
  if (nonCollidableTiles.value.length === 0) return;

  // Randomly select a tile
  const randomIndex = Math.floor(Math.random() * nonCollidableTiles.value.length);
  const spawnTile = nonCollidableTiles.value[randomIndex];

  // Create a new monster at the selected tile's position
  const newMonster = {
    imagePath: '/assets/entity images/slime.png',
    position: { x: spawnTile.position.x, y: spawnTile.position.y },
    health: 50,
    speed: 4,
    damage: 2,
    attackSpeed: 3,
    lastAttack: 0,
    monsterType: "melee"
  };

  monsters.push(newMonster);
};

// Call spawnMonster function every 10 seconds
setInterval(spawnMonster, 5000);

const spawnGun = () => {
  if (playerData.hasGun) return; // Exit if player already has a gun

  if (nonCollidableTiles.value.length === 0) return;

  const randomIndex = Math.floor(Math.random() * nonCollidableTiles.value.length);
  const spawnTile = nonCollidableTiles.value[randomIndex];

  // Check if there's already a gun at the spawnTile position
  const existingGun = objects.find(object => object.type === 'gun' && object.position.x === spawnTile.position.x && object.position.y === spawnTile.position.y);
  
  if (!existingGun) {
    const newGun = {
      type: 'gun',
      position: { x: spawnTile.position.x, y: spawnTile.position.y },
    };
    objects.push(newGun);
  }
};

// // Call spawnMonster function every 10 seconds
// setInterval(spawnMonster, 5000);

// const checkRegenerateGun = () => {
//   if (!playerData.hasGun) { // Only regenerate if player does not have a gun
//     spawnGun(); // Call the spawnGun function to regenerate the gun
//   }
// };

setInterval(spawnGun, 20000);




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
  background-image: url('/assets/background/small_lake.gif');
  background-size: cover;
  overflow: hidden;
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
  width: 80px; /* Adjust size as needed */
  height: 80px; /* Adjust size as needed */
  cursor: pointer; /* Optional: Change cursor to pointer when hovering */
}

.coin-display {
  left: 100px;
  position:absolute;
  bottom: 0;
  left:300px;
  color: white;
}

.object {
  position: absolute;
  width: 30px; /* Adjust size as needed */
  height: 30px; /* Adjust size as needed */
  z-index: 20; /* Ensure objects are above the player and tiles */
  cursor: pointer; /* Optional: Change cursor to pointer when hovering */
}

.bullet {
  position: absolute;
  width: 1px;
  height: 1px;
}

.exitButton {
  font-size: 14px;
  box-shadow: 0px 0px 20px rgb(243, 127, 147);
  border-radius: 12px;
  background-color: pink;
  padding: 10px 10px;
  text-align: center;
  margin: 5px 5px;
  cursor: pointer;
  position: absolute;
  top: 680px;
  left: 750px;
}

.settingButton {
  font-size: 14px;
  box-shadow: 0px 0px 20px rgb(243, 127, 147);
  border-radius: 12px;
  background-color: pink;
  padding: 10px 10px;
  text-align: center;
  margin: 5px 5px;
  cursor: pointer;
  position: absolute;
  top: 680px;
  left: 900px;
}

.inventory {
  position: absolute;
  top: 10px;
  left: 1300px;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  color: white;
}

</style>


