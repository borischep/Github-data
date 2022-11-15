<template>
  <PageHeader />
  <Suspense>
    <UserData/>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/common/Header/Header.vue'
import UserData from '@/components/pages/User/UserData.vue'
export default defineComponent({
  name: 'App',

  components: {
    UserData,
    PageHeader,
  },

  data () {
    return {}
  },
})
</script>

<style>
  body {
    margin: 0;
  }
</style>