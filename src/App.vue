<template>
  <PageHeader />
  <Suspense>
    <RepositoriesData/>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/common/Header/Header.vue'
import RepositoriesData from '@/components/pages/Repositories/RepositoriesData.vue'
export default defineComponent({
  name: 'App',

  components: {
    RepositoriesData,
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