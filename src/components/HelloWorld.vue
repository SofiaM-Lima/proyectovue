<template>
  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">
      {{ tarea.letra }}
    </li>
  </ul>
</template>

<script>
import { db } from "../db";
export default {
  name: "HelloWorld",
  data() {
    return { tareas: [] };
  },
  firestore: { tareas: db.collection("documento") },
};
</script>

<style>
</style>
