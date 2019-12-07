<template>
  <section class="ktsa-home">
    <section class="home-main">
      <the-home-slideshow class="home-slideshow"></the-home-slideshow>
      <the-home-news class="home-news"></the-home-news>
    </section>
    <the-aside class="home-aside"></the-aside>
  </section>
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
.home-slideshow {
  @mixin ktsa_section;

  display: grid;
  grid-template-rows: 20fr 3fr;
}
.home-news {
  @mixin ktsa_section;
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
