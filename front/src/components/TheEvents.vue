<template>
  <section class="ktsa-events">
    <div class="events-title">・EVENTS</div>
    <article class="events-content"></article>
  </section>
</template>

<script>
export default {

};
</script>

<style>
.ktsa-events {
  color: var(--KTSA-fg-blue);

  @mixin ktsa_section;
}
.events-title {
  @mixin ktsa_page_title;
}
.events-content {
  @mixin ktsa_page_content;
}
</style>
