<template>
  <div>
    <h1>List feed</h1>

    <ul>
      <li v-for="(tweet, index) in props.tweets" :key="index">{{ tweet }}</li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  tweets: {
    type: Array,
    required: true
  }
})
</script>