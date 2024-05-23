<script setup>
import { useCounterStore } from '../counterStore.js'
import { storeToRefs } from 'pinia'

const store = useCounterStore();
const { count } = storeToRefs(store);
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-btn @click="store.increment">Count is: {{ count }}</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
