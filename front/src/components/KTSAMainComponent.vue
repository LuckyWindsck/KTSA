<template lang="pug">
  main
    ktsa-nav.ktsa-KTSAMain_Navigation
    router-view.ktsa-KTSAMain_RouterView
</template>

<style scoped>
.ktsa-KTSAMain_Navigation {
  @mixin ktsa_section;
  grid-column: 1;

  position: sticky;
  top: 1em;

  display: table;
}
.ktsa-KTSAMain_RouterView {
  grid-column: 2;
}
</style>

<script>
export default {};
</script>
