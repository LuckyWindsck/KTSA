<template lang="pug">
  section.ktsa-home
    the-home-main.home-main
    the-aside.home-aside
</template>

<style scoped>
.ktsa-home {
  display: grid;
  grid-template-columns: 7fr 2fr;
  grid-column-gap: 1rem;
}
.home-main {
  grid-column: 1;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1rem;
}
.home-aside {
  grid-column: 2;

  display: table;
  border: 0.1rem solid var(--KTSA-fg-blue);

  color: var(--KTSA-fg-blue);
  text-align: center;
}
</style>

<script>
export default {};
</script>
