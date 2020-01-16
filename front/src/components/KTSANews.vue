<template>
  <article>
    <h1 class="news-title">{{ title }}</h1>
    <p class="news-date">{{ news.date }}</p>
    <figure class="news-figure">
      <img class="news-image" :src="src" alt="" />
    </figure>
    <p
      class="news-content"
      v-for="(line, i) in content"
      :key="i"
      v-html="line"
    ></p>
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
    localeNews() {
      return this.news[this.$store.state.i18n.locale];
    },
    title() {
      return this.localeNews.title;
    },
    content() {
      let { content } = this.localeNews;
      const links = this.localeNews.links || {};
      Object.entries(links)
        .forEach(([name, href]) => {
          content = content.replace(name, `<a href="${href}">${name}</a>`);
        });
      return content.split('\n');
    },
    src() {
      return this.$images.NEWS[this.news.date.replace(/\./g, '')];
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
