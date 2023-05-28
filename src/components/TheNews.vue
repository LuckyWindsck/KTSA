<template>
  <section class="ktsa-news">
    <div class="news-title">・NEWS</div>
    <article class="news-content">
      <div v-if="$route.params.news_id !== undefined">
        <router-view />
      </div>
      <div v-else>
        <router-link
          class="news-link"
          v-for="(n, i) in news"
          :key="i"
          :to="{ name: 'news', params: { news_id: i } }"
        >
          <the-news-box class="news-box" :news="n" />
        </router-link>
      </div>
    </article>
  </section>
</template>

<script>
import news from '@/config/news';

export default {
  data() {
    return {
      news,
    };
  },
};
</script>

<style scoped>
.ktsa-news {
  color: var(--KTSA-fg-blue);

  @mixin ktsa_section;
}
.news-title {
  @mixin ktsa_page_title;
}
.news-content {
  @mixin ktsa_page_content;
}
.news-link {
  color: var(--KTSA-fg-blue);
  text-decoration: none;
}
.news-link:nth-last-of-type(n + 2) .news-box {
  padding-bottom: 1em;
  border-bottom: 1px dashed blue;
}
</style>
