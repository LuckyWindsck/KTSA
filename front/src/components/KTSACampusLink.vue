<template>
  <a :href="campusUrl">{{ campusName }}</a>
</template>

<script>
export default {
  props: {
    campus: {
      type: Object,
      required: true,
    },
  },
  computed: {
    campusUrl() {
      return this.campus.url;
    },
    campusName() {
      return this.campus.name[this.$store.state.i18n.locale];
    },
  },
};
</script>

<style scoped>
</style>
