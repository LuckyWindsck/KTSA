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
      <select v-model="locale" @change="changeLocale">
        <option value="zh-TW">中文</option>
        <option value="en">English</option>
        <option value="ja">日本語</option>
      </select>
    </section>
  </footer>
</template>


<script>
import settings from '@/config/settings';

export default {
  data() {
    return {
      locale: this.$store.state.i18n.locale,
    };
  },
  methods: {
    changeLocale() {
      this.$store.commit('i18n/changeLocale', this.locale);
      console.log(this.$store.state.i18n.locale);
    },
  },
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
