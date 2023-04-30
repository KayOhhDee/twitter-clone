<template>
  <div>
    <div class="pt-5 space-y-6">
      <Input v-model="credentials.username" label="Username" placeholder="@nickname"/>
      <Input v-model="credentials.password" label="Password" placeholder="*********" type="password"/>
      <button @click="handleLogin">Login</button>
    </div>
  </div>
</template>

<script setup>
const credentials = reactive({
  username: '',
  password: '',
})

const isLoading = ref(false)

async function handleLogin() {
  const { login } = useAuth()

  try {
    isLoading.value = true
    await login(credentials)
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>