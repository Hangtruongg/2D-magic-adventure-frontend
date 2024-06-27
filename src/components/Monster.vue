<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="monster-container" :style="{ left: monsterData.position.x + 'px', top: monsterData.position.y + 'px', position: 'absolute' }">
    <!-- Monster image -->
    <img @click="test" :src="monsterData.imagePath" :alt="'Monster'" class="monster-image">
    <!-- Monster health display -->
    <div class="health">{{ monsterData.health }}</div>
  </div>
</template>

<script setup>
import { defineProps, watch } from 'vue';

const props = defineProps({
  monsterData: Object,
  updateMonster: Boolean,
  playerData: Object,
  checkCollision: Function,
  currentTick: Number,
});

const test = () => {
  console.log("Test method triggered");
};

const handleMonsterUpdates = () => {
  moveMonster();
}

const { monsterData } = props;

const moveMonster = () => {
  let x = monsterData.position.x;
  let y = monsterData.position.y;
  const monsterSpeed = monsterData.speed;
  const playerPositionX = props.playerData.position.x;
  const playerPositionY = props.playerData.position.y;

  let newX = x;
  let newY = y;

  if (x + monsterSpeed < playerPositionX) {
    newX += monsterSpeed;
  } else if (x - monsterSpeed > playerPositionX) {
    newX -= monsterSpeed;
  }

  if (y + monsterSpeed < playerPositionY) {
    newY += monsterSpeed;
  } else if (y - monsterSpeed > playerPositionY) {
    newY -= monsterSpeed;
  }

  const monsterWidth = 50;  // Assuming monster width is 50
  const monsterHeight = 50; // Assuming monster height is 50

  // Check X-axis movement
  if (!props.checkCollision(newX, y, monsterWidth, monsterHeight)) {
      monsterData.position.x = newX;
    }

  // Check Y-axis movement
  if (!props.checkCollision(x, newY, monsterWidth, monsterHeight)) {
    monsterData.position.y = newY;
  }

  // Handle case where both X and Y movements are blocked
  if (props.checkCollision(newX, y, monsterWidth, monsterHeight) && props.checkCollision(x, newY, monsterWidth, monsterHeight)) {
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
      if (!props.checkCollision(tryX, tryY, monsterWidth, monsterHeight)) {
        newX = tryX;
        newY = tryY;
        break;
      }
    }
  }

  monsterAttackMelee(monsterData, props.playerData);
};

const monsterAttackMelee = (monster, playerData) => {
  if (
    Math.abs(monster.position.x - playerData.position.x) <= monster.speed &&
    Math.abs(monster.position.y - playerData.position.y) <= monster.speed &&
    monster.lastAttack + monster.attackSpeed < props.currentTick
  ) {
    playerData.health -= monster.damage;
    monster.lastAttack = props.currentTick;
  }
};

watch(() => props.updateMonster, () => {
    handleMonsterUpdates();
});
</script>

<style scoped>
.monster-container {
  display: flex;
  flex-direction: column;
}

.monster-image {
  width: 50px;
  height: 50px;
}

.health {
  margin-top: 5px; /* Adjust margin as needed */
  text-align: center;
}
</style>
