<template>
  <main class="main">
    <div class="main-side">
      <the-nav class="navigation" />
      <ktsa-locale />
    </div>
    <router-view class="main-router-view" />
  </main>
</template>

<script>
export default {
};
</script>

<style scoped>
.main {
  display: grid;

  padding: 0.5rem;

  background-color: var(--KTSA-bg-layout);

  grid-template-columns: 3fr 9fr;
  grid-column-gap: 1rem;
}
.main-side {
  position: sticky;
  top: 0.5rem;
}
.navigation {
  grid-column: 1;
  @mixin ktsa_section;
}
.main-router-view {
  grid-column: 2;
}
</style>
