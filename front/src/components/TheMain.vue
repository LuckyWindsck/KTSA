<template>
  <main>
    <div class="main-side">
      <the-nav class="navigation" />
      <div class="locales">
        [ <span @click="changeLocale('zh-TW')">中文</span> /
        <span @click="changeLocale('en')">English</span> /
        <span @click="changeLocale('ja')">日文</span> ]
      </div>
    </div>
    <router-view class="main-router-view" />
  </main>
</template>

<script>
export default {
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
</style>
