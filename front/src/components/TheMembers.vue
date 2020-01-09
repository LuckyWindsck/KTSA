<template>
  <section class="ktsa-members">
    <div class="members-title">・MEMBERS</div>
    <article class="members-content"></article>
  </section>
</template>

<script>
export default {

};
</script>

<style>
.ktsa-members {
  color: var(--KTSA-fg-blue);

  @mixin ktsa_section;
}
.members-title {
  @mixin ktsa_page_title;
}
.about-us-content {
  @mixin ktsa_page_content;
}
</style>
