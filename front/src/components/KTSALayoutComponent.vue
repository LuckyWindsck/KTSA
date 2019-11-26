<template lang="pug">
  div
    ktsa-header
    ktsa-main.ktsa-KTSALayout_Main
    ktsa-footer.ktsa-KTSALayout_Footer
</template>

<style>
.ktsa-KTSALayout_Main {
  position: relative;
  z-index: 1;

  padding: 0.5rem;

  background-color: var(--KTSA-bg-layout);

  display: grid;
  grid-template-columns: 3fr 9fr;
  grid-column-gap: 1rem;

  overflow: visiblw;
}
.ktsa-KTSALayout_Footer {
  height: 50vmin;

  background-color: var(--KTSA-bg-blue);

  display: grid;
  grid-template-columns: 7fr 17fr;
}
</style>

<script>
export default {};
</script>
