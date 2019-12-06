<template lang="pug">
  a(:href="this.contact.url")
    img.invitation-link(:src="this.contact.image()")
</template>

<style scoped>
.invitation-link {
  width: 100%;
  border-radius: 1em;
}
</style>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
};
</script>
