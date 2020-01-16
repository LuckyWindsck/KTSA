<template>
  <section class="ktsa-about-us">
    <div class="about-us-title">・ABOUT US</div>
    <article class="about-us-content">
      <figure class="about-us-figure">
        <img
          class="about-us-image"
          :src="this.$images.ABOUTUS.members"
          alt=""
        />
      </figure>
      <article v-for="([title, content], i) in aboutUs" :key="i">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
      </article>
    </article>
  </section>
</template>

<script>
import aboutUs from '@/config/about-us';

export default {
  computed: {
    aboutUs() {
      return Object.entries(aboutUs[this.$store.state.i18n.locale]);
    },
  },
  mounted() {
    console.log(this.aboutUs);
  },
};
</script>

<style scoped>
.ktsa-about-us {
  color: var(--KTSA-fg-blue);

  @mixin ktsa_section;
}
.about-us-title {
  @mixin ktsa_page_title;
}
.about-us-content {
  @mixin ktsa_page_content;
}
.about-us-figure {
  width: 100%;
}
.about-us-image {
  width: 100%;
}
</style>
