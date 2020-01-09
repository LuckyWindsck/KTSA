<template>
  <figure class="member-figure">
    <img class="member-image" :src="photoSrc" alt="" />
    <figcaption>
      <p>{{ role }}</p>
      <p>{{ nameCampus }}</p>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: ['member'],
  computed: {
    role() {
      const { role } = this.member;
      return role.join(' & ');
    },
    nameCampus() {
      const { name, otherName, campus } = this.member;
      const wholeName = [name, otherName].filter((e) => e).join(' / ');
      return `${wholeName} (${campus})`;
    },
    photoSrc() {
      const { photoName } = this.member;
      return this.$images.MEMBERS[photoName || 'Default'];
    },
  },
};
</script>

<style scoped>
.member-figure {
  width: 100%;

  text-align: center;
}
.member-image {
  width: 100%;
}
</style>
