<template lang="pug">
  aside
    div.ktsa-KTSAAside_LogoFrame
      img.ktsa-KTSAAside_Logo(:src="this.$images.HOME.Logo")
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
  float: left;
  margin: 0.5rem;
  overflow: hidden;
}
/* To make a square */
.ktsa-KTSAAside_LogoFrame::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.ktsa-KTSAAside_Logo {
  width: 100%;

  /* TODO: refactor */
  /* 
  2 / 12: grid
  638 / 1063: size ratio
  (1 - (638 / 1063)): size increased by pseudo element
  1 / 2: half
   */
  transform: translateY(calc((2 / 12) * (1 - (638 / 1063)) * (1 / 2) * 100vw))
    matrix(3, 0, 0, 3, 0, 0);
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
