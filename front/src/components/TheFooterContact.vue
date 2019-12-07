<template>
  <section>
    <address>
      <a class="footer-link" :href="`mailto:${this.mail}`">{{ this.mail }}</a>
    </address>
    <p>
      <a class="footer-link" href>Site Map</a>
    </p>
    <p>
      <a class="footer-link" href>Privacy Policy</a>
    </p>
    <p>
      <a class="footer-link" href>Site Policy</a>
    </p>
  </section>
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
      mail: this.$setting.ktsa.contacts.mail.url,
    };
  },
};
</script>
