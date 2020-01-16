<template>
  <section class="slideshow">
    <div class="slide-container">
      <div><img class="slide-image" :src="slideSrc" /></div>
      <div class="btn-prev-slide" @click="slideChange(-1)">&#10094;</div>
      <div class="btn-next-slide" @click="slideChange(1)">&#10095;</div>
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

<script>
import settings from '@/config/settings';

export default {
  data() {
    return {
      slides: [
        {
          title: '一夜台北',
          url: this.$images.EVENTS['20190125_一夜台北']['0'],
        },
        {
          title: '慶早交流活動',
          url: this.$images.EVENTS['20190622_慶早交流活動']['0'],
        },
        {
          title: '三田祭台灣屋台',
          url: this.$images.EVENTS['20191121-24_三田祭台灣屋台']['0'],
        },
      ],
      index: 0,
      timer: 0,
    };
  },
  computed: {
    changeInterval() {
      return settings.slideshow.changeInterval;
    },
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
      this.timer = setTimeout(this.slideChange, this.changeInterval, 1);
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

<style scoped>
.slideshow {
  display: grid;

  grid-template-rows: 20fr 3fr;

  @mixin ktsa_section;
}
.slide-container {
  position: relative;
}
.slide-image {
  display: block;

  max-width: 100%;
}
.btn-prev-slide,
.btn-next-slide {
  position: absolute;
  top: 50%;

  margin-top: -1em;
  padding: 1em;

  cursor: pointer;
  user-select: none;
  transition: 0.6s ease;
}
.btn-next-slide {
  right: 0;
}
.btn-prev-slide:hover,
.btn-next-slide:hover {
  background-color: var(--KTSA-bg-blue);
}
.slide-menu {
  display: grid;
  align-items: center;

  background-color: var(--KTSA-bg-caption);

  grid-template-columns: 16fr 1fr 1fr 1fr;
}
.slide-caption {
  position: relative;

  width: calc(100% - 3rem);
  margin-left: 1em;

  color: white;

  font-size: 1.5rem;
}
.btn-slide-dot {
  display: inline-block;

  width: 1rem;
  height: 1rem;

  cursor: pointer;
  transition: background-color 0.6s ease;

  border-radius: 50%;
  background-color: white;
}

.active,
.btn-slide-dot:hover {
  background-color: var(--KTSA-fg-blue);
}
</style>
