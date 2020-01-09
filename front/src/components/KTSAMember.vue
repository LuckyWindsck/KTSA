<template>
  <figure class="member-figure">
    <img class="about-us-image" :src="photoSrc" alt="" />
    <figcaption>
      <p>{{ role }}</p>
      <p>{{ name }}</p>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: ['member'],
  computed: {
    role() {
      return this.member ? this.member.role.join(' & ') : '';
    },
    name() {
      return this.member ? [this.member.name, this.member.otherName].filter((e) => e).join(' / ') : '';
    },
    photoSrc() {
      return this.member ? this.$images.MEMBERS[this.member.photoName || 'Default'] : '';
    },
  },
};
</script>

<style scoped>
.member-figure {
  text-align: center;
}
</style>
