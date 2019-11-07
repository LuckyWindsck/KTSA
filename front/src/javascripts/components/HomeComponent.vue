<template lang="pug">
  section.ktsa-KTSAHome
    section.ktsa-KTSAHome_Main
      slideshow.ktsa-KTSAHome_SlideShow
      home-news.ktsa-KTSAHome_HomeNews
    ktsa-aside.ktsa-KTSAHome_Aside
</template>

<style>
.ktsa-KTSAHome {
  grid-column: span 9;

  display: grid;
  grid-template-columns: 7fr 2fr;
  grid-column-gap: 1rem;
}
.ktsa-KTSAHome_Main {
  grid-column: 1;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1rem;
}
.ktsa-KTSAHome_SlideShow {
  @mixin ktsa_section;

  display: grid;
  grid-template-rows: 20fr 3fr;
}
.ktsa-KTSAHome_HomeNews {
  @mixin ktsa_section;
}
.ktsa-KTSAHome_Aside {
  grid-column: 2;

  display: table;
  border: 0.1rem solid var(--KTSA-fg-blue);

  color: var(--KTSA-fg-blue);
  text-align: center;
}
</style>

<script>
export default {};
</script>
