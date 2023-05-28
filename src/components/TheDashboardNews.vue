<template>
  <article class="news" @click="displayNews">
    <p>
      <button>更新</button>
      <button>刪掉</button>
      <button>{{ news.id }}</button>
    </p>
    <span>{{ news.created_at }}</span>
    <a href="">{{ news.title }}</a>
    <pre v-if="display" v-html="news.content"></pre>
  </article>
</template>

<script>
export default {
  props: ['news'],
  data() {
    return {
      display: false,
    };
  },
  methods: {
    displayNews() {
      this.display = !this.display;
    },
  },
};
</script>

<style scoped>
.news {
  overflow: auto;
}
</style>
