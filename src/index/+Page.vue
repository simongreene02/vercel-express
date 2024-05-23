<script setup>
import { useCounterStore } from '../counterStore.js'
import { storeToRefs } from 'pinia'

const store = useCounterStore();
const { count } = storeToRefs(store);
</script>

<template>
  <button @click="store.increment">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
