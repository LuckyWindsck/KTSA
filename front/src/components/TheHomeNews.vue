<template>
  <section>
    <div>
      <span @click="displayNews">・NEWS</span>
    </div>
    <div v-for="({ created_at, title, content }, i) in this.news" :key="i">
      <div>
        <span>{{ created_at }}</span>
        <a href="">{{ title }}</a>
        <pre v-if="display" v-html="content"></pre>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      news: undefined,
      display: false,
    };
  },
  methods: {
    displayNews() {
      console.log(this.display);
      this.display = !this.display;
    },
  },
  mounted() {
    this.$axios
      .get('/api/news/')
      .then((response) => {
        this.news = response.data;
        // this.news.forEach((n) => console.log(JSON.parse(JSON.stringify(n))));
      })
      .catch((error) => console.log(error));
  },
};
</script>
