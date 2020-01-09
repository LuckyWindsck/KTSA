<template>
  <section>
    <div class="logo-frame">
      <img class="logo-image" :src="this.$images.HOME.Logo" alt="KTSA logo" />
    </div>
    <h1 class="logo-caption">
      <!-- <span class="logo-caption-block">慶應台灣人留學生會</span> -->
      <span class="logo-caption-block">Keio Taiwanese </span>
      <span class="logo-caption-block">Student Association</span>
    </h1>
  </section>
</template>

<style scoped>
.logo-frame {
  overflow: hidden;

  margin: 0.5rem;
}
/* To make logo a square */
.logo-frame::before {
  float: left;

  padding-top: 100%;

  content: "";
}
.logo-image {
  width: 100%;

  transform: scale(1.5);
}
.logo-caption {
  /* disable chrome user agent stylesheet */
  margin-block: 0;
}
.logo-caption-block {
  display: block;
}
</style>
