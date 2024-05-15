<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <img
      :src="playerImage"
      :style="{ left: position.x + 'px', top: position.y + 'px', position: 'absolute' }"
      alt="Player"
      class="player-image"
    />
  </template>
  
  <script setup>
  import { defineProps } from 'vue'; // Import defineProps helper

  // Define props
  const props = defineProps({
    position: Object, // Define the position prop
  });
  
  // Props
  const { position } = props;
  const playerImage = 'src/assets/character/preview_trenchcoat_walk.gif' // Update the path to your player image
  </script>
  
  <style scoped>
  /* Player styles */
  /* You can add additional styles for the player image if needed */
  .player-image {
    width: 50px;
    height: 50px;
  }

  </style>
  