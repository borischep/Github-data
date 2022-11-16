<template>
  <el-table :data="pagedTableData" height="500" style="width: 100%">
    <el-table-column prop="name" label="Repository name" />
    <el-table-column
      prop="stargazers.totalCount"
      align="right"
      label="Stars"
      width="200"
    />
    <el-table-column prop="forkCount" align="right" label="Forks" width="200" />
  </el-table>
  <el-pagination
    on-click="getRepos"
    layout="prev, pager, next"
    :total="tableData.length"
    @current-change="setPage"
  >
  </el-pagination>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { SEARCH_REPOS } from "../../../graphQL/repos";
import { useQuery } from "@vue/apollo-composable";

export default defineComponent({
  name: "UserData",
  async created() {
    this.getRepos();
  },
  data() {
    return {
      tableData: [],
      page: 1,
      pageSize: 10,
    };
  },
  computed: {
    pagedTableData(): any[] {
      return this.tableData.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
  },
  methods: {
    async getRepos() {
      const searchOptions = { number_of_repos: 100 };
      const result = await useQuery(SEARCH_REPOS, searchOptions).result;
      watch(
        result,
        (result: any) =>
          (this.tableData = result.viewer.repositories.nodes ?? [])
      );
      return result.value;
    },
    setPage(val: number) {
      this.page = val;
    },
  },
});
</script>
