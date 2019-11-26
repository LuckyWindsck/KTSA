<template lang="pug">
  aside
    div.ktsa-KTSAAside_LogoFrame
      div.ktsa-KTSAAside_Logo(:style="{'background-image': 'url(' + this.$images.HOME.Logo + ')'}")
    div.ktsa-KTSAAside_Content
      h1
        span Keio Taiwanese
        span(style="display: block") Student Association
    section.ktsa-KTSAAside_Campus
      a(:href="this.$setting.campus.mita.url") 三田
      a(:href="this.$setting.campus.hiyoshi.url") 日吉
      a(:href="this.$setting.campus.sfc.url") 湘南藤沢
    section.ktsa-KTSAAside_SNS
      a(:href="this.$setting.ktsa.contact.twitter") twi @keiotaiwan
      a(:href="this.$setting.ktsa.contact.facebook") fbk @keiotaiwan
</template>

<style>
.ktsa-KTSAAside_LogoFrame {
  display: table-row;
}
.ktsa-KTSAAside_Logo {
  position: relative;
  margin: 0.5rem auto 0;
  height: calc(100vw / 6 - 2rem);
  width: calc(100vw / 6 - 2rem);
  background-position: center;
  background-size: 300%;
}
.ktsa-KTSAAside_Content {
  display: table-row;
}
.ktsa-KTSAAside_Campus {
  display: table-row;
  padding: 1rem 0;
  line-height: 1.5em;
  font-size: 1.5rem;

  @mixin vertical_align_center;
  flex-direction: column;
}
.ktsa-KTSAAside_SNS {
  display: table-row;
  padding: 1rem 0;
  line-height: 1.5em;
  font-size: 1.25rem;

  @mixin vertical_align_center;
  flex-direction: column;
}
</style>

<script>
export default {};
</script>
