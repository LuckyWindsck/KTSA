<template>
  <section class="ktsa-events">
    <div class="events-title">・EVENTS</div>
    <article class="events-content">
      <div v-if="$route.params.event_id !== undefined">
        <router-view />
      </div>
      <div v-else>
        <router-link
          class="events-link"
          v-for="(event, i) in events"
          :key="i"
          :to="{ name: 'events', params: { event_id: i } }"
        >
          <the-event-box class="events-box" :event="event" />
        </router-link>
      </div>
    </article>
  </section>
</template>

<script>
import events from '@/config/events';

export default {
  data() {
    return {
      events,
    };
  },
};
</script>

<style scoped>
.ktsa-events {
  color: var(--KTSA-fg-blue);

  @mixin ktsa_section;
}
.events-title {
  @mixin ktsa_page_title;
}
.events-content {
  @mixin ktsa_page_content;
}
.events-link {
  color: var(--KTSA-fg-blue);
  text-decoration: none;
}
.events-link:nth-last-of-type(n + 2) .events-box {
  padding-bottom: 1em;
  border-bottom: 1px dashed blue;
}
</style>
