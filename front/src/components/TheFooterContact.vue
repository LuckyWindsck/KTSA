<template lang="pug">
section
  address
    a.footer-link(:href="`mailto:${this.mail}`") {{ this.mail }}
  p
    a.footer-link(href="") Site Map
  p
    a.footer-link(href="") Privacy Policy
  p
    a.footer-link(href="") Site Policy
</template>

<style scoped>
.footer-link {
  color: var(--KTSA-fg-blue);
  font-size: 1.5rem;
}
</style>

<script>
export default {
  data() {
    return {
      mail: this.$setting.ktsa.contacts.mail.url
    };
  }
};
</script>
