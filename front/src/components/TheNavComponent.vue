<template lang="pug">
  nav
    div.ktsa-KTSANav_Row
      router-link(to='/home').ktsa-KTSANav_Home HOME
    div.ktsa-KTSANav_Row
      router-link(to='/news').ktsa-KTSANav_News NEWS
    div.ktsa-KTSANav_Row
      router-link(to='/about-us').ktsa-KTSANav_AboutUs ABOUT US
    div.ktsa-KTSANav_Row
      router-link(to='/members').ktsa-KTSANav_Members MEMBERS
    div.ktsa-KTSANav_Row
      router-link(to='/events').ktsa-KTSANav_Events EVENTS
    div.ktsa-KTSANav_Row
      router-link(to='/campus').ktsa-KTSANav_Campus CAMPUS
    div.ktsa-KTSANav_Row
      router-link(to='/contact').ktsa-KTSANav_Contact CONTACT
    div.ktsa-KTSANav_Row(v-if="this.env === 'development'")
      router-link(to='/admin').ktsa-KTSANav_Admin ADMIN
</template>

<style scoped>
.ktsa-KTSANav_Row {
  display: table-row;

  &:nth-child(1) {
    background-color: #b7bdca;
  }
  &:nth-child(2n + 2) {
    background-color: #e4e4e4;
  }
  &:nth-child(2n + 3) {
    background-color: #e9e1b5;
  }
}
.ktsa-KTSANav_Home {
  @mixin ktsa_nav 1, false;
}
.ktsa-KTSANav_News {
  @mixin ktsa_nav;
}
.ktsa-KTSANav_AboutUs {
  @mixin ktsa_nav;
}
.ktsa-KTSANav_Members {
  @mixin ktsa_nav;
}
.ktsa-KTSANav_Events {
  @mixin ktsa_nav;
}
.ktsa-KTSANav_Campus {
  @mixin ktsa_nav;
}
.ktsa-KTSANav_Contact {
  @mixin ktsa_nav;
}
.ktsa-KTSANav_Admin {
  @mixin ktsa_nav;
}
</style>

<script>
export default {
  data() {
    return {
      env: process.env.NODE_ENV
    };
  }
};
</script>
