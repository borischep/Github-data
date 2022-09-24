<template>
  <PageHeader />
  <User/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/common/Header/Header.vue'
import User from '@/components/pages/User/User.vue'
export default defineComponent({
  name: 'App',

  components: {
    User,
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