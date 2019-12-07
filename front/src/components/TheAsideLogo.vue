<template>
  <section>
    <div class="logo-frame">
      <img
        class="logo-image"
        :src="this.images.HOME.Logo"
      />
    </div>
    <h1 class="logo-caption">
      <span class="logo-caption-block">Keio Taiwanese</span>
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

  /* TODO: refactor
  2 / 12: grid
  638 / 1063: size ratio
  (1 - (638 / 1063)): size increased by pseudo element
  1 / 2: half
  3: scale(3); */
  transform: translateY(calc((2 / 12) * (1 - (638 / 1063)) * (1 / 2) * 100vw))
    scale(3);
}
.logo-caption {
  /* disable chrome user agent stylesheet */
  margin-block: 0;
}
.logo-caption-block {
  display: block;
}
</style>

<script>
export default {};
</script>
