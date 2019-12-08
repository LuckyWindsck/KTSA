/**
 * Recursively scan this directory for the Vue components and automatically
 * register them with their "basename".
 *
 * Eg. ./components/Example.vue -> <example></example>
 * Eg. ./components/ExampleComponent.vue -> <example></example>
 */

export default {
  install(vue) {
    const files = require.context('@/components', true, /\.vue$/i);
    files.keys().forEach((key) => {
      vue.component(
        key.replace(/.*\/(.*?)((Component)?)\.vue/, '$1') // Get the component name
          .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert to kebab-case
          .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
          .toLowerCase(), // Convert to lowercase
        files(key).default,
      );
    });
  }
};
