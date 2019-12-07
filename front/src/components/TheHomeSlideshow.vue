<template>
  <section>
    <div class="slide-container">
      <div class="slide">
        <img class="slide-image" :src="slideSrc" />
      </div>
      <a class="btn-prev-slide" @click="slideChange(-1)">&#10094;</a
      ><a class="btn-next-slide" @click="slideChange(1)">&#10095;</a>
    </div>
    <div class="slide-menu">
      <div class="slide-caption">{{ slideTitle }}</div>
      <span
        class="btn-slide-dot"
        :class="dotClass(i)"
        v-for="(e, i) in slides"
        :key="i"
        @click="slideJump(i)"
      ></span>
    </div>
  </section>
</template>

<style scoped>
.slide-container {
  max-width: 1000px;
  position: relative;
}
.slide {
  display: block;

  /* use grid to calculate width and height */
  /* width : height = 1 : 2 */
  width: calc(7 / 12 * 100vw);
  height: calc(3.5 / 12 * 100vw);
  overflow: hidden;
  animation-name: fade;
  animation-duration: 1.5s;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.slide-image {
  display: block;
  max-width: 100%;
}
.btn-prev-slide,
.btn-next-slide {
  width: auto;
  position: absolute;
  top: 50%;
  padding: 16px;
  border-radius: 0 3px 3px 0;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  cursor: pointer;
  user-select: none;
}
.btn-next-slide {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.btn-prev-slide:hover,
.btn-next-slide:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.slide-menu {
  background-color: var(--KTSA-bg-caption);
  display: grid;
  grid-template-columns: 16fr 1fr 1fr 1fr;
  align-items: center;
}
.slide-caption {
  position: relative;
  width: calc(100% - 3rem);
  color: white;
  font-size: 1.5rem;
  margin-left: 1em;
}
.btn-slide-dot {
  margin: 0 2px;
  border-radius: 50%;

  height: 1rem;
  width: 1rem;

  background-color: white;

  display: inline-block;

  cursor: pointer;
  transition: background-color 0.6s ease;
}

.active,
.btn-slide-dot:hover {
  background-color: var(--KTSA-fg-blue);
}
</style>

<script>
export default {
  data() {
    return {
      slides: this.$settings.slideshow.slides,
      changeInterval: this.$settings.slideshow.changeInterval,
      index: 0,
      timer: 0,
    };
  },
  computed: {
    currentSlide() {
      return this.slides[this.index];
    },
    slideSrc() {
      return this.currentSlide.url;
    },
    slideTitle() {
      return this.currentSlide.title;
    },
    dotClass() {
      return this.dotHighlight;
    },
  },
  methods: {
    dotHighlight(i) {
      return i === this.index ? 'active' : '';
    },
    slideStart() {
      this.slideStop();
      this.timer = setTimeout(this.slideChange, this.changeInterval, -1);
    },
    slideStop() {
      clearInterval(this.timer);
    },
    slideChange(indexIncrement) {
      this.index = (this.index + indexIncrement + this.slides.length) % this.slides.length;
      this.slideStart();
    },
    slideJump(index) {
      this.index = index;
      this.slideStart();
    },
  },
  mounted() {
    this.slideStart();
    this.$once('hook:beforeDestroy', this.slideStop);
  },
};
</script>
