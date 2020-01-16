<template>
  <section class="ktsa-home">
    <section class="home-main">
      <the-home-slideshow class="home-slideshow" />
      <the-home-news class="home-news" />
    </section>
    <the-aside class="home-aside" />
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
  grid-column: 1;
}
.home-slideshow {
  display: grid;

  margin-bottom: 1em;

  grid-template-rows: 20fr 3fr;

  @mixin ktsa_section;
}
.home-news {
  overflow: auto;

  @mixin ktsa_section;
}
.home-aside {
  display: table;

  text-align: center;

  color: var(--KTSA-fg-blue);

  grid-column: 2;

  @mixin ktsa_section;
}
</style>
