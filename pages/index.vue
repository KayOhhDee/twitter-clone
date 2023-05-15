<template>
  <MainContainer title="Home" :loading="loading">
    <TweetForm :user="user"/>
  </MainContainer>
</template>

<script setup>
const loading = ref(false)

const { useAuthUser } = useAuth()
const user = useAuthUser()
</script>