<template lang="pug">
section
  section.campus-section
    ul.campus-link-list
      ktsa-campus-link(v-for="(campus, i) in this.campuses", :key="i" :campus="campus")
  section.invitation-section
    ktsa-invitation-link(v-for="(contact, i) in this.contacts", :key="i" :contact="contact")
</template>

<style scoped>
.campus-section {
  padding: 1rem 0;
  line-height: 1.5em;
  font-size: 1.5rem;

  flex-direction: column;
}
.campus-link-list {
  list-style: none;
  margin-left: -1.5em;
}
.invitation-section {
  padding: 0 1rem;
  line-height: 1.5em;
  font-size: 1.25rem;

  flex-direction: column;
}
</style>

<script>
export default {
  data() {
    return {
      campuses: this.$setting.campuses,
      contacts: Object.values(this.$setting.ktsa.contacts).filter(
        contact => contact.image() !== undefined
      )
    };
  }
};
</script>
