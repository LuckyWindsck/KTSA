<template>
  <div>
    <the-header />
    <the-main class="main" />
    <the-footer class="footer" />
  </div>
</template>

<style scoped>
.main {
  /* For watermark in the-footer */
  position: relative;
  z-index: 1;

  display: grid;

  padding: 0.5rem;

  background-color: var(--KTSA-bg-layout);

  grid-template-columns: 3fr 9fr;
  grid-column-gap: 1rem;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2.5em;

  background-color: var(--KTSA-bg-blue);
}
</style>
