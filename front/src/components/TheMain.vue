<template>
  <main>
    <the-nav class="navigation" />
    <router-view class="main-router-view" />
  </main>
</template>

<style scoped>
.navigation {
  position: sticky;
  top: 0.5rem;

  display: table;

  grid-column: 1;
  @mixin ktsa_section;
}
.main-router-view {
  grid-column: 2;
}
</style>
