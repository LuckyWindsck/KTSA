<template>
  <header>
    <img
      class="cover-photo"
      :src="this.$store.state.global.images.LAYOUT.CoverPhoto"
      alt="KTSA cover photo"
    />
  </header>
</template>

<style scoped>
.cover-photo {
  display: block;

  width: 100vw;
}
</style>

<script>
export default {};
</script>
