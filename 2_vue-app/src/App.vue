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

<style>
#app {
  margin: 0;
  padding: 0;
  background-color: white;
}

.wrapper {
  width: 960px;
  margin: 0 auto;
}

.wrapList {
  padding-left: 100px;
}

body {
  background-color: white;
}

img {
  width: 100%;
}

p {
  color: black;
  font: Arial;
  line-height: 24px;
  font-size: 15px;
  font-weight: normal;
  text-align: justify;
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0;
  padding: 0;
}
</style>
