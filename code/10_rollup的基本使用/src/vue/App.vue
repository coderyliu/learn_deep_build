<template>
  <div>
    <h2>{{ count }}</h2>
    <button class="add" @click="handleCountBtnClick('add')">+1</button>
    <button class="sub" @click="handleCountBtnClick('sub')">-1</button>
    <h2>嘻嘻嘻</h2>
    <h2>嘻嘻嘻</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const handleCountBtnClick = (type) => {
  if (type === "add") {
    count.value += 1;
  } else {
    count.value -= 1;
  }
};
</script>

<style scoped>
.add,
.sub {
  width: 50px;
  height: 50px;
  line-height: 50px;
}
</style>
