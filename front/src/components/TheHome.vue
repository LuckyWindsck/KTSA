<template>
  <section class="ktsa-home">
    <section class="home-main">
      <the-home-slideshow class="home-slideshow" />
      <the-home-news class="home-news" />
    </section>
    <the-aside class="home-aside" />
  </section>
</template>

<style scoped>
.ktsa-home {
  display: grid;

  grid-template-columns: 7fr 2fr;
  grid-column-gap: 1rem;
}
.home-main {
  display: grid;

  grid-column: 1;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1rem;
}
.home-slideshow {
  display: grid;

  grid-template-rows: 20fr 3fr;
  @mixin ktsa_section;
}
.home-news {
  @mixin ktsa_section;
}
.home-aside {
  display: table;

  text-align: center;

  color: var(--KTSA-fg-blue);
  border: 0.1rem solid var(--KTSA-fg-blue);

  grid-column: 2;
}
</style>
