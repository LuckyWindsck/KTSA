<template lang="pug">
  section
    the-home-main-slideshow.home-slideshow
    the-home-main-news.home-news
</template>

<style scoped>
.home-slideshow {
  @mixin ktsa_section;

  display: grid;
  grid-template-rows: 20fr 3fr;
}
.home-news {
  @mixin ktsa_section;
}
</style>

<script>
export default {};
</script>
