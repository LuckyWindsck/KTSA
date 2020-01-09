<template>
  <nav>
    <div class="nav_row" v-for="([url, text], i) in this.nav" :key="i">
      <router-link :to="url">{{ text }}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        ['/home', 'HOME'],
        ['/news', 'NEWS'],
        ['/about-us', 'ABOUT US'],
        ['/members', 'MEMBERS'],
        ['/events', 'EVENTS'],
        ['/campus', 'CAMPUS'],
        ['/contact', 'CONTACT'],
        ['/admin', 'ADMIN'],
      ].slice(0, process.env.NODE_ENV === 'development' ? undefined : -1),
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.nav_row:nth-child(1) {
  background-color: #b7bdca;
  font-weight: bold;
  @mixin ktsa_nav 1, false;
}
.nav_row:nth-child(2n + 2) {
  background-color: #e4e4e4;
  @mixin ktsa_nav;
}
.nav_row:nth-child(2n + 3) {
  background-color: #e9e1b5;
  @mixin ktsa_nav;
}
</style>
