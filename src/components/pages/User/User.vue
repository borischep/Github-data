<template>
  <el-table :data="tableData" height="500" style="width: 100%">
    <el-table-column prop="name" label="Repository name" />
    <el-table-column prop="stars" align="right" label="Stars" width="200" />
    <el-table-column prop="forks" align="right" label="Forks" width="200" />
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    name: 'Repo name',
    stars: '3489',
    forks: '43',
  },
  {
    name: 'Repo name',
    stars: '3489',
    forks: '43',
  },
  {
    name: 'Repo name',
    stars: '3489',
    forks: '43',
  },
  {
    name: 'Repo name',
    stars: '3489',
    forks: '43',
  },
  {
    name: 'Repo name',
    stars: '3489',
    forks: '43',
  },
  {
    name: 'Repo name',
    stars: '3489',
    forks: '43',
  },
  {
    name: 'Repo name',
    stars: '3489',
    forks: '43',
  },
]
</script>
