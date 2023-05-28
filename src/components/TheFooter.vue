<template>
  <footer class="footer">
    <section class="footer-section">
      <address>
        <a class="footer-link" :href="`mailto:${this.mail}`">{{ this.mail }}</a>
      </address>
      <p>
        <router-link class="footer-link" to="/sitemap">Site Map</router-link>
      </p>
      <p>
        <router-link class="footer-link" to="/privacy"
          >Privacy Policy</router-link
        >
      </p>
    </section>
  </footer>
</template>


<script>
import settings from '@/config/settings';

export default {
  computed: {
    mail() {
      return settings.ktsa.contacts.mail.url;
    },
  },
};
</script>

<style scoped>
.footer {
  width: 100%;

  text-align: center;

  background-color: var(--KTSA-bg-blue);
}
.footer-section {
  display: inline-block;

  padding: 2.5rem;

  text-align: left;
}
.footer-link {
  color: var(--KTSA-fg-blue);

  font-size: 1.5rem;
}
</style>
