<template>
  <nav class="nav">
    <div class="nav-row" v-for="([url, text], i) in this.nav" :key="i">
      <router-link class="nav-link" :to="url">{{ text }}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        [{ name: 'home' }, 'HOME'],
        [{ name: 'news' }, 'NEWS'],
        [{ name: 'about-us' }, 'ABOUT US'],
        [{ name: 'members' }, 'MEMBERS'],
        [{ name: 'events' }, 'EVENTS'],
        [{ name: 'contact' }, 'CONTACT'],
      ],
    };
  },
};
</script>

<style scoped>
.nav {
  @mixin ktsa_section;
}
.nav-row:nth-child(1) {
  background-color: var(--KTSA-bg-blue);

  font-weight: bold;

  @mixin ktsa_nav 1, false;
}
.nav-row:nth-child(2n + 2) {
  background-color: var(--KTSA-bg-layout);

  @mixin ktsa_nav;
}
.nav-row:nth-child(2n + 3) {
  background-color: var(--KTSA-bg-yellow);

  @mixin ktsa_nav;
}
.nav-row:nth-child(n + 2) .nav-link.router-link-active,
.nav-row:nth-child(n + 2) .nav-link.router-link-active:before {
  color: var(--KTSA-fg-red);
}
.nav-link {
  text-decoration: none;
}
.nav-link:before {
  display: inline-block;

  width: 1rem;

  content: "\2022";

  color: black;

  font-weight: bold;
}
</style>
