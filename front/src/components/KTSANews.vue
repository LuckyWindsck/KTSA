<template>
  <article>
    <h1 class="news-title">{{ title }}</h1>
    <p class="news-date">{{ news.date }}</p>
    <figure class="news-figure">
      <img class="news-image" :src="src" alt="" />
    </figure>
    <p class="news-content" v-for="(line, i) in content.split('\n')" :key="i">
      {{ line }}
    </p>
  </article>
</template>

<script>
import news from '@/config/news';

export default {
  data() {
    return {
      news: news[this.$route.params.news_id],
    };
  },
  computed: {
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
  font-size: 2em;
}
.news-figure {
  width: 100%;
}
.news-image {
  width: 50%;
}
.news-content {
  font-size: 1.5em;
}
</style>
