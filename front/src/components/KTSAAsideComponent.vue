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
      a(:href="this.$setting.ktsa.contact.line")
        img.ktsa-KTSAAside_Line(:src="this.$images.HOME['line-zh_tw']")
      a(:href="this.$setting.ktsa.contact.facebook")
        img.ktsa-KTSAAside_Facebook(:src="this.$images.HOME['fb-zh_tw']")
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
  padding: 1rem 0;
  line-height: 1.5em;
  font-size: 1.5rem;

  @mixin vertical_align_center;
  flex-direction: column;
}
.ktsa-KTSAAside_SNS {
  padding: 0 1rem;
  line-height: 1.5em;
  font-size: 1.25rem;

  @mixin vertical_align_center;
  flex-direction: column;
}
.ktsa-KTSAAside_Line {
  width: 100%;

  /* https://bennettfeely.com/clippy/
  Shape: Bevel */
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
}
.ktsa-KTSAAside_Facebook {
  width: 100%;

  /* https://bennettfeely.com/clippy/
  Shape: Bevel */
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
}
</style>

<script>
export default {};
</script>
