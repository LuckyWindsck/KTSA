<template>
  <section>
    <section class="campus-section">
      <div v-for="(campus, i) in this.campuses" :key="i">
        <ktsa-campus-link :campus="campus" />
      </div>
    </section>
    <section class="invitation-section">
      <div v-for="(contact, i) in this.contacts" :key="i">
        <ktsa-invitation-link :contact="contact" />
      </div>
    </section>
  </section>
</template>

<script>
import campuses from '@/config/campuses';

export default {
  data() {
    return {
      campuses,
    };
  },
  computed: {
    contacts() {
      return {
        facebook: {
          url: 'https://www.facebook.com/keiotaiwan/',
          image: this.$images.HOME.facebook[this.$store.state.i18n.locale],
        },
        line: {
          url: 'https://linecorp.com/',
          image: this.$images.HOME.line[this.$store.state.i18n.locale],
        },
      };
    },
  },
};
</script>

<style scoped>
.campus-section {
  display: grid;

  margin: 1.5rem 0;

  font-size: 1.5rem;
}
.invitation-section {
  display: grid;

  padding: 0 1rem;
}
</style>
