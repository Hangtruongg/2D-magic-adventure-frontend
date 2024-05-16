<template>
    <div class="tile" :class="['tile-type-' + type]">
      <!-- Render tile content here, like an image or other elements -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: Number, // Assuming the type is represented as a number
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add scoped styles for your tile */
  .tile {
    /* Add styles for each tile */
  }
  
  /* Example of styling based on tile type */
  .tile-type-0 {
    background-image: url('/assets/tiles/grass.png');
  }
  
  .tile-type-1 {
    background-image: url('/assets/tiles/wall.jpg');
  }
  
  .tile-type-2 {
    background-image: url('/assets/tiles/earth.png');
  }

  .tile-type-3 {
    background-image: url('/assets/tiles/sand.png');
  }
  .tile-type-4 {
    background-image: url('/assets/tiles/tree1.png');
  }
  .tile-type-5 {
    background-image: url('/assets/tiles/water.jpg');
  }
  
  /* Add more styles for other tile types as needed */
  </style>
  