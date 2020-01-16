<template>
  <section class="ktsa-privacy">
    <div class="privacy-title">・PRIVACY POLICY</div>
    <article class="privacy-content">
      <p v-for="(part, i) in privacyPolicy" :key="i">
        {{ part }}
      </p>
    </article>
  </section>
</template>

<script>
import privacyPolicy from '@/config/privacy-policy';

export default {
  computed: {
    privacyPolicy() {
      return privacyPolicy[this.$store.state.i18n.locale];
    },
  },
};
</script>

<style scoped>
.ktsa-privacy {
  color: var(--KTSA-fg-blue);

  @mixin ktsa_section;
}
.privacy-title {
  @mixin ktsa_page_title;
}
.privacy-content {
  @mixin ktsa_page_content;
}
</style>
