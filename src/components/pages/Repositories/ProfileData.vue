<template>
  <div class="user-data-wrapper">
    <div class="user-data">
      <el-image
        class="avatar-image"
        :src="userData.avatarUrl"
        :preview-src-list="[userData.avatarUrl]"
        :initial-index="4"
        fit="cover"
      />
      <div class="main-info">
        <div class="name">{{userData.name}}</div>
        <div class="username">{{userData.login}}</div>
        <div class="status-wrapper">Status: <span class="status">{{userData.status?.message || 'No status'}}</span></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, watch } from 'vue';
import { SEARCH_USER } from '../../../graphQL/user';
import { useQuery } from '@vue/apollo-composable';

export default defineComponent({
  name: 'ProfileData',
  async created() {
    this.getUserData();
  },
  data() {
    return {
      userData: {
        avatarUrl: '',
        name: '',
        login: '',
        status: {
          message: ''
        },
      }
    };
  },
  computed: {
  },
  methods: {
    async getUserData() {
      const result = await useQuery(SEARCH_USER).result;
      watch(
        result,
        (result: any) => {
          this.userData = result.viewer;
        }
      );
      return result.value;
    },
  },
});
</script>

<style lang='scss'>
.user-data-wrapper {
  padding: 50px 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-data {
  min-width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.main-info {
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.avatar-image {
  border-radius: 100%;
  width: 100px;
  height: 100px;
  margin-right: 30px;
}
.name {
  color: black;
  font-size: 20px;
  margin-bottom: 10px;
}
.username {
  color: gray;
  font-size: 14px;
  margin-bottom: 20px;
}
.status-wrapper {
  font-size: 22px;
}
.status {
  font-size: 18px;
}
</style>
