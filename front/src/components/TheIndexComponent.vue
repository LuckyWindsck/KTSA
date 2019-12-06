<template lang="pug">
  div
    the-header
    the-main.main
    the-footer.footer
</template>

<style scoped>
.main {
  /* For watermark in the-footer */
  position: relative;
  z-index: 1;

  padding: 0.5rem;

  background-color: var(--KTSA-bg-layout);

  display: grid;
  grid-template-columns: 3fr 9fr;
  grid-column-gap: 1rem;
}
.footer {
  padding: 2.5em;

  background-color: var(--KTSA-bg-blue);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script>
export default {};
</script>
