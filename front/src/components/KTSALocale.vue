<template>
  <div class="locales">
    [
    <span :class="zhTW ? 'currentLocale' : ''" @click="changeLocale('zh-TW')"
      >中文</span
    >
    /
    <span :class="en ? 'currentLocale' : ''" @click="changeLocale('en')"
      >English</span
    >
    /
    <span :class="ja ? 'currentLocale' : ''" @click="changeLocale('ja')"
      >日文</span
    >
    ]
  </div>
</template>

<script>
export default {
  computed: {
    zhTW() {
      return this.$store.state.i18n.locale === 'zh-TW';
    },
    en() {
      return this.$store.state.i18n.locale === 'en';
    },
    ja() {
      return this.$store.state.i18n.locale === 'ja';
    },
  },

  methods: {
    changeLocale(locale) {
      this.$store.commit('i18n/changeLocale', locale);
    },
  },

};
</script>

<style scoped>
.locales {
  margin: 1.5em auto;

  text-align: center;

  font-size: 1.5em;
}
.currentLocale {
  text-decoration: underline;
}
</style>
