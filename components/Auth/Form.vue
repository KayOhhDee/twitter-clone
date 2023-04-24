<template>
  <div>
    <div class="pt-5 space-y-6">
      <Input v-model="credentials.username" label="Username" placeholder="@nickname"/>
      <Input v-model="credentials.password" label="Password" placeholder="*********" type="password"/>
    </div>
  </div>
</template>

<script setup>
const credentials = reactive({
  username: '',
  password: ''
})
</script>