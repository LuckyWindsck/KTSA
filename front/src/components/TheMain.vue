<template>
  <main>
    <the-nav class="navigation"></the-nav>
    <router-view class="main-router-view"></router-view>
  </main>
</template>

<style scoped>
.navigation {
  @mixin ktsa_section;
  grid-column: 1;

  position: sticky;
  top: 0.5rem;

  display: table;
}
.main-router-view {
  grid-column: 2;
}
</style>

<script>
export default {};
</script>
