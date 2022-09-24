<template>
  <div class="header-wrapper">
    <div class="logo">
      Github
    </div>
  </div>
</template>

<script>
  export default{
    name: 'PageHeader',
  }
</script>

<style lang="scss">
  .header-wrapper {
    width: 100%;
    height: 100px;
    background: #0073c5;
    display: flex;
    justify-content: flex-start;

    .logo {
      margin: auto 30px;
      font-size: 35px;
    }
  }
</style>