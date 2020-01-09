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
      <h1>
        團體概要
      </h1>
      <p>
        慶應義塾大學台灣留學生會(Keio Taiwanese Student Association, KTSA)
        是集結在慶應6個校區的台灣人所成立的學生組織。
      </p>
      <h1>
        團體宗旨
      </h1>
      <p>
        讓慶應台灣人交流認識、協助大家在日生活，並定期舉辦各種精彩活動讓會員能夠交到新朋友且更融入日本生活。
      </p>
    </article>
  </section>
</template>

<script>
export default {

};
</script>

<style>
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
