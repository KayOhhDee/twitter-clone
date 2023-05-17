<template>
  <MainContainer title="Home" :loading="loading">
    <Head>
      <Title>Home | Twitter</Title>
    </Head>
    <div class="border-b" :class="defaultBorderColor">
      <TweetForm :user="user"/>
    </div>
  </MainContainer>
</template>

<script setup>
const { defaultBorderColor } = useTailwind()

const loading = ref(false)

const { useAuthUser } = useAuth()
const user = useAuthUser()
</script>