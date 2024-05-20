<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tile-container" :style="{ left: tileData.position.x + 'px', top: tileData.position.y + 'px', position: 'absolute' }">
    <!-- Monster image -->
    <img :src="tileData.imagePath" :alt="'Tile'" class="tile-image">
    <!-- Monster health display -->
  </div>
</template>
  
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  tileData: Object
});
</script>

<style scoped>
.tile-container {
  display: flex;
  flex-direction: column;
}

.tile-image {
  width: 50px;
  height: 50px;
}
</style>
  