<template>
  <footer>
    <section>
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
.footer-link {
  color: var(--KTSA-fg-blue);

  font-size: 1.5rem;
}
</style>
