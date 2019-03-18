<template>
  <div class="loading">
      <h1>loading1--{{jsn.a}}</h1>
      <h2>loading2--{{jsn.b}}</h2>
      <h3>loading3--{{jsn.c}}</h3>
  </div>
</template>
<script>
export default {
  name: 'vue-loading',
  props: ['jsn']
}
</script>

<style scoped>
.loading{
    background-color: #c00;
    color: #fff;
}
</style>