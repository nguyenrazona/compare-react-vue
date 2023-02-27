<script setup lang="ts">
import { onMounted } from "vue";
import List1 from "./components/List1.vue";
import List2 from "./components/List2.vue";
import List3 from "./components/List3.vue";

const List = List1;
// const List = List2;
// const List = List3;

onMounted(() => {
  // Log performance
  setTimeout(function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
    console.log(`load time: ${loadTime} ms`)
  }, 1000);
});
</script>

<template>
  <div class="wrapper">
    <List :members="30" />
  </div>
</template>

<style scoped>
.wrapper {
  width: 960px;
  margin: 0 auto;
}
</style>
