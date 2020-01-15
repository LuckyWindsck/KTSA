<template>
  <article>
    <h1 class="event-title">{{ title }}</h1>
    <p class="event-date">{{ event.date }}</p>
    <p class="event-content">{{ content }}</p>
    <figure class="event-figure" v-for="(photo, i) in photos" :key="i">
      <img class="event-image" :src="photo" alt="" />
    </figure>
  </article>
</template>

<script>
import events from '@/config/events';

export default {
  data() {
    return {
      event: events[this.$route.params.event_id],
    };
  },
  computed: {
    content() {
      return this.event[this.locale].content;
    },
    locale() {
      return this.$store.state.i18n.locale;
    },
    photos() {
      return Object.values(
        Object.entries(this.$images.EVENTS)
          .filter(([key, value]) => key.includes(
            this.event.start_time.replace(/\./g, ''),
          )).pop().pop(),
      );
    },
    title() {
      return this.event[this.locale].title;
    },
  },
};
</script>

<style scoped>
.event-title {
  font-size: 2em;
}
.event-figure {
  width: 100%;
}
.event-image {
  width: 100%;
}
.event-content {
  font-size: 1.5em;
}
</style>
