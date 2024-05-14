<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="monster-container" :style="{ left: monsterData.position.x + 'px', top: monsterData.position.y + 'px', position: 'absolute' }">
    <!-- Monster image -->
    <img :src="monsterData.imagePath" :alt="'Monster'" class="monster-image">
    <!-- Monster health display -->
    <div class="health">{{ monsterData.health }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  monsterData: Object
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
  align-items: 'center';
}
</style>
