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
  background-color: var(--KTSA-bg-blue);

  font-weight: bold;
  @mixin ktsa_nav 1, false;
}
.nav_row:nth-child(2n + 2) {
  background-color: var(--KTSA-bg-layout);
  @mixin ktsa_nav;
}
.nav_row:nth-child(2n + 3) {
  background-color: var(--KTSA-bg-yellow);
  @mixin ktsa_nav;
}
</style>
