<template>
  <MainContainer title="Home" :loading="loading">
    <Head>
      <Title>Home | Twitter</Title>
    </Head>
    <div class="border-b" :class="defaultBorderColor">
      <TweetForm :user="user"/>
    </div>

    <TweetListFeed :tweets="homeTweets" />
  </MainContainer>
</template>

<script setup>
const { defaultBorderColor } = useTailwind()
const { getHomeTweets } = useTweets()

const loading = ref(false)
const homeTweets = ref([])

const { useAuthUser } = useAuth()
const user = useAuthUser()

onBeforeMount(async () => {
  loading.value = true
  try {
    const {tweets} = await getHomeTweets()
    homeTweets.value = tweets
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>