<template>
  <div class="aligner">
    <div>
      <h1>Hello Vue Router</h1>
      <p>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
      </p>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.aligner {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
}
</style>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
