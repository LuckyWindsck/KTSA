<template lang="pug">
  main
    the-nav.navigation
    router-view.main-router-view
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
