<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center p-6">
      <Spinner />
    </div>
    <div v-else>
      <TweetFormInput :user="props.user"  @onSubmit="handleFormSubmit" />
    </div>
  </div>
</template>

<script setup>
const loading = ref(false)
const { postTweet } = useTweets()

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const handleFormSubmit = async (data) => {
  loading.value = true
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles
    })
  } catch (error) {
    console.error(error )
  } finally {
    loading.value = false
  }
}

</script>