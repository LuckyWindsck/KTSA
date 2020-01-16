<template>
  <a :href="campusUrl">{{ campusName }}</a>
</template>

<script>
import settings from '@/config/settings';

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
      return this.campus.name[settings.locale];
    },
  },
};
</script>

<style scoped>
</style>
