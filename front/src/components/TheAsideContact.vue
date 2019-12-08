<template>
  <section>
    <section class="campus-section">
      <ul class="campus-link-list">
        <ktsa-campus-link
          v-for="(campus, i) in this.campuses"
          :key="i"
          :campus="campus"
        />
      </ul>
    </section>
    <section class="invitation-section">
      <ktsa-invitation-link
        v-for="(contact, i) in this.contacts"
        :key="i"
        :contact="contact"
      />
    </section>
  </section>
</template>

<script>
import settings from '@/config/settings';

export default {
  data() {
    return {
      contacts: {
        facebook: {
          url: 'https://www.facebook.com/keiotaiwan/',
          image: this.$images.HOME.facebook[settings.locale],
        },
        line: {
          url: 'https://linecorp.com/',
          image: this.$images.HOME.line[settings.locale],
        },
      },
    };
  },
  computed: {
    campuses() {
      return settings.campuses;
    },
  },
};
</script>

<style scoped>
.campus-section {
  flex-direction: column;

  padding: 1rem 0;

  font-size: 1.5rem;
  line-height: 1.5em;
}
.campus-link-list {
  margin-left: -1.5em;

  list-style: none;
}
.invitation-section {
  flex-direction: column;

  padding: 0 1rem;

  font-size: 1.25rem;
  line-height: 1.5em;
}
</style>
