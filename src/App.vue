<template>
  <PageHeader />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/common/Header/Header.vue'
export default defineComponent({
  name: 'App',

  components: {
    PageHeader,
  },

  data () {
    return {
      searchRepository: '',
    }
  },
})
</script>

<style>
  body {
    margin: 0;
  }
</style>