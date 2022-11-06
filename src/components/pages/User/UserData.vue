<template>
  <el-table :data="tableData" height="500" style="width: 100%">
    <el-table-column prop="name" label="Repository name" />
    <el-table-column prop="stargazers.totalCount" align="right" label="Stars" width="200" />
    <el-table-column prop="forkCount" align="right" label="Forks" width="200" />
  </el-table>
</template>

<script lang="ts">
import { computed } from "vue";
import { SEARCH_REPOS } from "../../../graphQL/repos";
import { useQuery } from "@vue/apollo-composable";

export default {
  name: 'UserData',
  async setup() {
    const searchOptions = { number_of_repos: 10 }
    const { result } = await useQuery(SEARCH_REPOS, searchOptions)
    const tableData = computed(() => result.value?.viewer.repositories.nodes ?? []);

    return {tableData}
  }

}

</script>
