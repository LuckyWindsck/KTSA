<template>
  <a :href="this.contact.url">
    <img class="invitation-link" :src="this.contact.image()" />
  </a>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.invitation-link {
  width: 100%;

  border-radius: 1em;
}
</style>
