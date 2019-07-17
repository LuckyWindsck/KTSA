<template>
  <div class="aligner">
    <h1>Hello Vue Component</h1>
  </div>
</template>

<style>
.aligner {
  display: flex;
  align-items: center;
  justify-content: center;
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
