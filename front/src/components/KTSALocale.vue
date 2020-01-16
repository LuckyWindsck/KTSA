<template>
  <div class="locales">
    [
    <span v-for="([code, name], i) in locales" :key="i">
      <span :class="localesClass[code]" @click="changeLocale(code)">{{
        name
      }}</span>
      <span>{{ i !== locales.length - 1 ? " / " : "" }}</span>
    </span>
    ]
  </div>
</template>

<script>
export default {
  data() {
    return {
      locales: Object.entries(this.$store.state.i18n.locales),
    };
  },
  computed: {
    localesClass() {
      return Object.fromEntries(this.locales.map(([code, _]) => [
        code,
        this.$store.state.i18n.locale === code ? 'currentLocale' : '',
      ]));
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
  margin: 1.5rem auto;

  text-align: center;

  font-size: 1.5rem;
}
.currentLocale {
  text-decoration: underline;
}
</style>
