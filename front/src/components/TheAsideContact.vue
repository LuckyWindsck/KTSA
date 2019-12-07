<template>
  <section>
    <section class="campus-section">
      <ul class="campus-link-list">
        <ktsa-campus-link
          v-for="(campus, i) in this.campuses"
          :key="i"
          :campus="campus"
        ></ktsa-campus-link>
      </ul>
    </section>
    <section class="invitation-section">
      <ktsa-invitation-link
        v-for="(contact, i) in this.contacts"
        :key="i"
        :contact="contact"
      ></ktsa-invitation-link>
    </section>
  </section>
</template>

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

<script>
export default {
  data() {
    return {
      campuses: this.$setting.campuses,
      contacts: Object.values(this.$setting.ktsa.contacts).filter(
        (contact) => contact.image() !== undefined,
      ),
    };
  },
};
</script>
