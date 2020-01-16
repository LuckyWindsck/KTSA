<template>
  <div class="background">
    <div class="layout">
      <the-header />
      <the-main />
      <the-footer />
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.background {
  min-height: 100vh;

  background: var(--KTSA-bg-layout);
}
.layout {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
