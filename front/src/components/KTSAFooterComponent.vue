<template lang="pug">
  footer
    img.ktsa-KTSAFooter_Watermark(:src="this.$images.LAYOUT.Watermark", alt="KTSA Watermark")
    section.ktsa-KTSAFooter_Contact
      address.ktsa-KTSAFooter_Email
        a(:href="`mailto:${this.mail}`") {{ this.mail }}
      div.ktsa-KTSAFooter_SiteMap
        a(href="") Site Map
      div.ktsa-KTSAFooter_PrivacyPolicy
        a(href="") Privacy Policy
      div.ktsa-KTSAFooter_SitePolicy
        a(href="") Site Policy
      div.ktsa-KTSAFooter_Search
        input.ktsa-KTSAFooter_SearchBox(type="text")
        button.ktsa-KTSAFooter_SearchButton Search
</template>

<style scoped>
.ktsa-KTSAFooter_Watermark {
  grid-column: 1;

  position: relative;
  top: -6.5vmin;

  width: calc(100vmin / 3);
}
.ktsa-KTSAFooter_Contact {
  grid-column: 2;

  display: grid;
  grid-template-columns: repeat(25, 1fr);
  /* Chrome Warning: Deprecate percentage */
  grid-template-rows: repeat(21, calc(100% / (525 / 25)));
}
.ktsa-KTSAFooter_Contact a {
  color: var(--KTSA-fg-blue);
  text-decoration-line: none;
  font-size: 1.5rem;
  font-style: normal;
}
.ktsa-KTSAFooter_Email {
  grid-column: 2 / span 13;
  grid-row: 4 / span 2;

  @mixin vertical_align_center;
}
.ktsa-KTSAFooter_SiteMap {
  grid-column: 2 / span 7;
  grid-row: 9 / span 2;

  @mixin vertical_align_center;
}
.ktsa-KTSAFooter_PrivacyPolicy {
  grid-column: 2 / span 7;
  grid-row: 11 / span 2;

  @mixin vertical_align_center;
}
.ktsa-KTSAFooter_SitePolicy {
  grid-column: 2 / span 7;
  grid-row: 13 / span 2;

  @mixin vertical_align_center;
}
.ktsa-KTSAFooter_Search {
  grid-column: 12 / span 10;
  grid-row: 10 / span 3;

  @mixin vertical_align_center;
  justify-content: space-evenly;
}
.ktsa-KTSAFooter_SearchBox {
  height: calc(100% * 2 / 3);
  width: 75%;

  @mixin ktsa_search;
  box-shadow: inset 0 0.25rem 0.25rem 0 var(--KTSA-bg-blue);
}
.ktsa-KTSAFooter_SearchButton {
  height: calc(100% * 2 / 3);
  width: 20%;

  @mixin ktsa_search;
  box-shadow: inset 0 0.25rem 0.25rem 0 rgba(255, 255, 255, 0.3);

  background-color: var(--KTSA-fg-blue);

  color: white;
  font-size: 1.5vw;
}
</style>

<script>
export default {
  data() {
    return {
      mail: this.$setting.ktsa.contact.mail
    };
  }
};
</script>
