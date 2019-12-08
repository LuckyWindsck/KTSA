<template>
  <section>
    <div>
      <span>・NEWS</span>
    </div>
    <div v-for="({ time, title, image }, i) in this.news" :key="i">
      <article>
        <p>{{ time }}</p>
        <img :src="image" />
        <p>{{ title }}</p>
      </article>
    </div>
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
