<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="monster">
    <!-- Monster image -->
    <img :src="image" 
        :style="{ left: position.x + 'px', top: position.y + 'px' }"
        :alt="'Monster'"
        class="monster-image">
    <!-- Monster health display -->
    <div>{{ health }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    monsterData: Object
})

const { monsterData } = props;

const image = ref(monsterData.imagePath)
const position = ref(monsterData.position);
const health = ref(monsterData.health);

</script>

<style scoped>
.monster-image {
    width: 50px;
    height: 50px;
}
</style>