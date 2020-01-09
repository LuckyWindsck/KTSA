<template>
  <section class="ktsa-news">
    <div class="news-title">・NEWS</div>
    <article class="news-content"></article>
  </section>
</template>

<script>
export default {

};
</script>

<style>
.ktsa-news {
  color: var(--KTSA-fg-blue);

  @mixin ktsa_section;
}
.news-title {
  @mixin ktsa_page_title;
}
.about-us-content {
  @mixin ktsa_page_content;
}
</style>
