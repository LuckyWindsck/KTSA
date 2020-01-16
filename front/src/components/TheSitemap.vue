<template>
  <section class="ktsa-sitemap">
    <div class="sitemap-title">・SITEMAP</div>
    <article class="sitemap-content">
      <ul>
        <li v-for="([url, text], i) in sitelinks" :key="i">
          <router-link class="nav-link" :to="url">{{ text }}</router-link>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>

export default {
  data() {
    return {
      sitelinks: [
        [{ name: 'home' }, 'HOME'],
        [{ name: 'news' }, 'NEWS'],
        [{ name: 'about-us' }, 'ABOUT US'],
        [{ name: 'members' }, 'MEMBERS'],
        [{ name: 'events' }, 'EVENTS'],
        [{ name: 'contact' }, 'CONTACT'],
        [{ name: 'privacy' }, 'Privacy Policy'],
        [{ name: 'sitemap' }, 'Site Map'],
      ],
    };
  },
};
</script>

<style scoped>
.ktsa-sitemap {
  color: var(--KTSA-fg-blue);

  @mixin ktsa_section;
}
.sitemap-title {
  @mixin ktsa_page_title;
}
.sitemap-content {
  font-size: 1.5em;
  line-height: 2em;

  @mixin ktsa_page_content;
}
</style>
