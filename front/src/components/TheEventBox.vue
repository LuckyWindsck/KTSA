<template>
  <article>
    <h1 class="event-title">{{ title }}</h1>
    <p class="event-date">{{ event.date }}</p>
    <!-- <figure class="event-figure">
      <img class="event-image" :src="src" alt="" />
    </figure> -->
    <p class="event-content">{{ content }}</p>
  </article>
</template>

<script>
export default {
  props: ['event'],
  computed: {
    content() {
      return this.event[this.locale].content;
    },
    locale() {
      return this.$store.state.i18n.locale;
    },
    // src() {
    //   return this.$images.event[this.event.date.replace(/\./g, '')];
    // },
    title() {
      return this.event[this.locale].title;
    },
  },
};
</script>

<style scoped>
.event-title {
  font-size: 1.5em;
}
.event-date {
}
.event-figure {
  width: 100%;
}
.event-image {
  width: 50%;
}
</style>
