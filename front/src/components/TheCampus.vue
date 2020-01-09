<template>
  <section class="ktsa-campus">
    <div class="campus-title">・CAMPUS</div>
    <article class="campus-content"></article>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>
.ktsa-campus {
  color: var(--KTSA-fg-blue);

  @mixin ktsa_section;
}
.campus-title {
  @mixin ktsa_page_title;
}
.campus-content {
  @mixin ktsa_page_content;
}
</style>
