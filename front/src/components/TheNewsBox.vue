<template>
  <article>
    <h1 class="news-title">{{ title }}</h1>
    <p class="news-date">{{ news.date }}</p>
    <figure class="news-figure">
      <img class="news-image" :src="src" alt="" />
    </figure>
    <summary class="news-abstract">
      {{ abstract }}
    </summary>
  </article>
</template>

<script>
export default {
  props: ['news'],
  computed: {
    abstract() {
      return `${this.content.slice(0, 47)}...`;
    },
    content() {
      return this.news[this.locale].content;
    },
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
.news-title {
  font-size: 1.5em;
}
.news-date {
}
.news-figure {
  width: 100%;
}
.news-image {
  width: 50%;
}
.news-abstract {
}
</style>
