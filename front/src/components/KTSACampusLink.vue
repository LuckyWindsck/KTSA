<template>
  <li>
    <a :href="this.campus.url">{{
      this.campus.name[this.$store.state.locale]
    }}</a>
  </li>
</template>

<style scoped>
</style>

<script>
export default {
  props: {
    campus: {
      type: Object,
      required: true,
    },
  },
};
</script>
