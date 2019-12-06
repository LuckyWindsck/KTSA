<template lang="pug">
  section
    div
      span ・NEWS
      //- span Learn More >>>
    div(v-for="({time, title, image}, i) in this.$news", :key="i")
      article
        p {{ time }}
        img(:src="image")
        p {{ title }}

</template>

<style scoped>
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>
