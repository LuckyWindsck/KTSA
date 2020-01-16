<template>
  <div class="background">
    <div class="layout">
      <the-header />
      <the-main class="main" />
      <the-footer class="footer" />
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
.main {
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
