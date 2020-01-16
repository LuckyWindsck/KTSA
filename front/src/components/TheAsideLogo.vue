<template>
  <section>
    <div class="logo-frame">
      <img class="logo-image" :src="this.$images.HOME.Logo" alt="KTSA logo" />
    </div>
    <h1 class="logo-caption">
      <pre class="logo-caption-ktsaname">{{ ktsaName }}</pre>
    </h1>
  </section>
</template>

<script>
import settings from '@/config/settings';

export default {
  computed: {
    ktsaName() {
      return settings.ktsa.name[this.$store.state.i18n.locale];
    },
  },
};
</script>

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
.logo-caption-ktsaname {
  font-size: 1.25rem;
}
</style>
