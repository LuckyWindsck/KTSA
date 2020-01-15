<template>
  <main>
    <div class="main-side">
      <the-nav class="navigation" />
      <div class="locales">
        [
        <span
          :class="zhTW ? 'currentLocale' : ''"
          @click="changeLocale('zh-TW')"
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
    </div>
    <router-view class="main-router-view" />
  </main>
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
.main-side {
  position: sticky;
  top: 0.5rem;
}
.navigation {
  grid-column: 1;
  @mixin ktsa_section;
}
.locales {
  margin: 1.5em auto;

  text-align: center;

  font-size: 1.5em;
}
.main-router-view {
  grid-column: 2;
}
.currentLocale {
  text-decoration: underline;
}
</style>
