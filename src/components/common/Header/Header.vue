<template>
  <div class='header-wrapper'>
    <router-link class='logo' to="/">Github</router-link>
    <router-link class='profile' to="/profile">Profile</router-link>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>

<style lang='scss'>
.header-wrapper {
  width: 100%;
  height: 100px;
  background: #0073c5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;

  .logo {
    color: black;
    text-decoration: none;
    margin: auto 30px;
    font-size: 35px;
  }

  .profile {
    color: black;
    text-decoration: none;
    margin: auto 30px;
    font-size: 20px;
  }
}
</style>
