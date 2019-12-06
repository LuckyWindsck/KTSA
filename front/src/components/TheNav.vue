<template lang="pug">
  nav
    div.nav_row
      router-link(to='/home') HOME
    div.nav_row
      router-link(to='/news') NEWS
    div.nav_row
      router-link(to='/about-us') US
    div.nav_row
      router-link(to='/members') MEMBERS
    div.nav_row
      router-link(to='/events') EVENTS
    div.nav_row
      router-link(to='/campus') CAMPUS
    div.nav_row
      router-link(to='/contact') CONTACT
    div.nav_row(v-if="this.dev")
      router-link(to='/admin') ADMIN
</template>

<style scoped>
.nav_row {
  &:nth-child(1) {
    @mixin ktsa_nav 1, false;
    background-color: #b7bdca;
  }
  &:nth-child(2n + 2) {
    @mixin ktsa_nav;
    background-color: #e4e4e4;
  }
  &:nth-child(2n + 3) {
    @mixin ktsa_nav;
    background-color: #e9e1b5;
  }
}
</style>

<script>
export default {
  data() {
    return {
      dev: process.env.NODE_ENV === "development"
    };
  }
};
</script>
