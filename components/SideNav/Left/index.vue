<template>
  <div class="h-screen flex flex-col">
    <div class="p-2 my-2 rounded-full w-min hover:bg-blue-50 dark:hover:bg-white/20" :class="defaultTransition">
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <icons-twitter />
        </div>
      </nuxt-link>
    </div>

    <div class="mt-2 space-y-3">
      <SideNavLeftTab active>
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name>
          Home
        </template>
      </SideNavLeftTab>
  
      <SideNavLeftTab>
        <template v-slot:icon>
          <HashtagIcon />
        </template>
        <template v-slot:name>
          Explore
        </template>
      </SideNavLeftTab>

      <SideNavLeftTab>
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name>
          Notifications
        </template>
      </SideNavLeftTab>

      <SideNavLeftTab>
        <template v-slot:icon>
          <InboxIcon />
        </template>
        <template v-slot:name>
          Messages
        </template>
      </SideNavLeftTab>

      <SideNavLeftTab>
        <template v-slot:icon>
          <BookmarkIcon />
        </template>
        <template v-slot:name>
          Bookmarks
        </template>
      </SideNavLeftTab>

      <SideNavLeftTab>
        <template v-slot:icon>
          <DocumentTextIcon />
        </template>
        <template v-slot:name>
          Lists
        </template>
      </SideNavLeftTab>

      <SideNavLeftTab>
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name>
          Profile
        </template>
      </SideNavLeftTab>

      <SideNavLeftTab>
        <template v-slot:icon>
          <EllipsisHorizontalCircleIcon />
        </template>
        <template v-slot:name>
          More
        </template>
      </SideNavLeftTab>

      <div class="hidden xl:block">
        <Button liquid size="lg">
          <span class="font-bold">
            Tweet
          </span>
        </Button>
      </div>
      <div class="block xl:hidden">
        <Button>
          <div class="w-6 h-6 font-bold">
            <PencilIcon/>
          </div>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/20/solid"
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, EllipsisHorizontalCircleIcon, PencilIcon } from "@heroicons/vue/24/outline"

const { defaultTransition } = useTailwind()

</script>