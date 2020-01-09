<template>
  <section class="ktsa-contact">
    <div class="contact-title">・CONTACT</div>
    <article class="contact-content"></article>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>
.ktsa-contact {
  color: var(--KTSA-fg-blue);

  @mixin ktsa_section;
}
.contact-title {
  @mixin ktsa_page_title;
}
.contact-content {
  @mixin ktsa_page_content;
}
</style>
