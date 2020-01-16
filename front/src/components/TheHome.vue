<template>
  <section class="ktsa-home">
    <div>
      <the-home-slideshow class="home-slideshow" />
      <the-home-news class="home-news" />
    </div>
    <div>
      <the-aside class="home-aside" />
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
.home-slideshow {
  margin-bottom: 1em;
}
</style>
