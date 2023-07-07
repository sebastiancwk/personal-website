<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <p>Hello 👋</p>
  <p>I'm Seb</p>
  <p>
    <a href="https://www.linkedin.com/in/sebastian-king-15011b171/" target="_blank">LinkedIn</a>
  </p>
    <p>
    <a href="https://github.com/sebastiancwk" target="_blank">GitHub</a>
  </p>
</template>