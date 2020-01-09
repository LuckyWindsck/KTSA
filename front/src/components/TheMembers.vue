<template>
  <section class="ktsa-members">
    <div class="members-title">・MEMBERS</div>
    <article class="members-content">
      <div class="members-list" v-for="(row, r) in this.members" :key="r">
        <div class="members-cell" v-for="(col, c) in row" :key="c">
          <ktsa-member :member="col" />
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import members from '@/config/members';

export default {
  computed: {
    members() {
      const rows = Math.max(...members.map(({ row }) => row)) + 1;
      const cols = Math.max(...members.map(({ col }) => col)) + 1;
      const findMember = (member, row, col) => member.row === row && member.col === col;

      return Array(rows).fill()
        .map((_, row) => Array(cols).fill()
          .map((_, col) => members.find((member) => findMember(member, row, col))));
    },
  },
};
</script>

<style scoped>
.ktsa-members {
  color: var(--KTSA-fg-blue);

  @mixin ktsa_section;
}
.members-title {
  @mixin ktsa_page_title;
}
.members-content {
  @mixin ktsa_page_content;
}
.members-list {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1em;
}
</style>
