<template>
  <section class="home-news">
    <div>
      <div class="home-news-title">・NEWS</div>
    </div>
    <router-link
      class="home-news-link"
      v-for="(n, i) in news"
      :key="i"
      :to="{ name: 'news', params: { news_id: i } }"
    >
      <the-home-news-box class="home-news-box" :news="n" />
    </router-link>
  </section>
</template>

<script>
import news from '@/config/news';

export default {
  computed: {
    locale() {
      return this.$store.state.i18n.locale;
    },
    news() {
      return news.slice(0, 3);
    },
  },
};
</script>

<style scoped>
.home-news {
  @mixin ktsa_section;
}
.home-news-title {
  color: var(--KTSA-fg-blue);
  padding: 1em 0 1em 1em;
  border-color: black;
  border-bottom: 0.2rem solid var(--KTSA-fg-blue);
  background-color: var(--KTSA-bg-layout);
  font-size: 1.5em;
  font-weight: bold;
}
.home-news-box {
  padding: 2em;
}
.home-news-link {
  text-decoration: none;
}
.home-news-link:nth-of-type(1) .home-news-box {
  color: var(--KTSA-fg-blue);
  background-color: var(--KTSA-bg-blue);
}
.home-news-link:nth-of-type(2) .home-news-box {
  color: var(--KTSA-fg-red);
  background-color: var(--KTSA-bg-red);
}
.home-news-link:nth-of-type(3) .home-news-box {
  color: var(--KTSA-fg-yellow);
  background-color: var(--KTSA-bg-yellow);
}
</style>
