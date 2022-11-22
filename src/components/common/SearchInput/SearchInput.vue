<template>
  <el-input v-model='input' @input='onChange' placeholder='Search repository' />
</template>

<script lang='ts'>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchInput',
  data() {
    return {
      input: ref(''),
    };
  },
  methods: {
    onChange(searchText: string) {
      this.$emit('searchTextChange', searchText);
    }
  }
});
</script>

<style lang='scss'>
.el-input {
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  margin: 20px;
}
</style>
