<template>
  <div class='repositories-block'>
    <SearchInput @searchTextChange='filterTableData'/>
    <el-table :data='pagedTableData' height='500' style='width: 100%'>
      <el-table-column prop='name' label='Repository name' />
      <el-table-column
        prop='stargazers.totalCount'
        align='right'
        label='Stars'
        width='200'
      />
      <el-table-column
        prop='forkCount'
        align='right'
        label='Forks'
        width='200'
      />
    </el-table>
    <el-pagination
      on-click='getRepos'
      layout='prev, pager, next'
      :total='filteredData.length'
      @current-change='setPage'
    >
    </el-pagination>
  </div>
</template>

<script lang='ts'>
import { defineComponent, watch } from 'vue';
import { SEARCH_REPOS } from '../../../graphQL/repos';
import { useQuery } from '@vue/apollo-composable';
import SearchInput from '@/components/common/SearchInput/SearchInput.vue';
import { Repository } from '@/types/repository';

export default defineComponent({
  name: 'UserData',
  async created() {
    this.getRepos();
  },
  components: {
    SearchInput,
  },
  data() {
    return {
      tableData: [] as Repository[],
      filteredData: [] as Repository[],
      page: 1,
      pageSize: 10,
    };
  },
  computed: {
    pagedTableData(): any[] {
      return this.filteredData.slice(
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
        (result: any) => {
          this.tableData = result.viewer.repositories.nodes ?? [];
          this.filteredData = this.tableData;
        }
      );
      return result.value;
    },
    setPage(val: number) {
      this.page = val;
    },
    filterTableData(searchText: string) {
      this.filteredData = this.tableData.filter(repo => repo.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    }
  },
});
</script>

<style lang='scss'>
.repositories-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
</style>
