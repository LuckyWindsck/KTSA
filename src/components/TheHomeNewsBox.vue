<template>
  <article>
    <span class="news-date">{{ news.date }}</span>
    <figure class="news-figure">
      <img class="news-image" :src="src" alt="" />
    </figure>
    <span class="news-title">{{ title }}</span>
  </article>
</template>

<script>
export default {
  props: ['news'],
  computed: {
    locale() {
      return this.$store.state.i18n.locale;
    },
    src() {
      return this.$images.NEWS[this.news.date.replace(/\./g, '')];
    },
    title() {
      return this.news[this.locale].title;
    },
  },
};
</script>

<style scoped>
.news-date {
  font-size: 1.5em;
}
.news-figure {
  width: 100%;
}
.news-image {
  position: relative;
  left: 25%;
  width: 50%;
}
.news-title {
  font-size: 2em;
}
</style>
