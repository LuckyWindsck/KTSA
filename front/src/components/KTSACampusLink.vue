<template lang="pug">
li
  a(:href="this.campus.url") {{ this.campus.name[this.$locale] }}
</template>

<style scoped>
</style>

<script>
export default {
  props: {
    campus: {
      type: Object,
      required: true
    }
  }
};
</script>
