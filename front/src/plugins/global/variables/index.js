export default {
  install(vue) {
    vue.mixin({
      computed: {
        settings() {
          return this.$store.state.global.settings;
        },
        locale() {
          return this.$store.state.global.settings.locale;
        },
        news() {
          return this.$store.state.global.news;
        },
        images() {
          return this.$store.state.global.images;
        },
      },
    });
  },
};
