<template>
  <section class="ktsa-home">
    <div class="home-main">
      <the-home-slideshow />
      <the-home-news />
    </div>
    <div>
      <the-aside />
    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>
.ktsa-home {
  display: grid;

  grid-template-columns: 7fr 2fr;
  grid-column-gap: 1rem;
}
.home-main {
  display: grid;
  grid-row-gap: 1em;
}
</style>
