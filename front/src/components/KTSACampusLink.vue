<template>
  <li>
    <a :href="campusUrl">{{ campusName }}</a>
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
  computed: {
    campusUrl() {
      return this.campus.url;
    },
    campusName() {
      return this.campus.name[this.locale];
    },
  },
};
</script>
