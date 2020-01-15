<template>
  <main>
    <div class="main-side">
      <the-nav class="navigation" />
      <div class="locale-btns">
        <button
          class="locale-btn"
          @click="changeLocale(code)"
          v-for="([code, name], i) in Object.entries(locales)"
          :key="i"
        >
          {{ name }}
        </button>
      </div>
    </div>
    <router-view class="main-router-view" />
  </main>
</template>

<script>
export default {
  methods: {
    changeLocale(locale) {
      console.log(locale);
      this.$store.commit('i18n/changeLocale', locale);
    },
  },
  data() {
    return {
      locales: {
        'zh-TW': '中',
        en: 'EN',
        ja: '日',
      },
    };
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
.locale-btns {
  display: grid;

  padding: 0;

  grid-template-columns: repeat(3, 1fr);
}
.locale-btn {
  display: block;

  width: 4em;
  height: 4em;
  margin: 1.5em auto;

  cursor: pointer;

  color: var(--KTSA-fg-blue);
  border: none;
  border-radius: 50%;
  outline: none;
  background-color: var(--KTSA-bg-layout);

  font-size: 1em;
  @mixin ktsa_section;
}
.locale-btn:active {
  background-color: var(--KTSA-bg-blue);
}
.main-router-view {
  grid-column: 2;
}
</style>
