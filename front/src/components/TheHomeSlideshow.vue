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

<script>
import settings from '@/config/settings';

export default {
  data() {
    return {
      slides: [
        {
          title: '20190125-一夜台北',
          url: this.$images.EVENTS['20190125-一夜台北']['20190125-一夜台北1'],
        },
        {
          title: '20181013-SFC秋祭',
          url: this.$images.EVENTS['20181013-SFC秋祭']['20181011'],
        },
        {
          title: '20190622-慶早交流活動',
          url: this.$images.EVENTS['20190622-慶早交流活動']['20190622慶早交流'],
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
.slide-container {
  position: relative;

  max-width: 1000px;
}
.slide {
  display: block;
  overflow: hidden;

  /* use grid to calculate width and height */
  /* width : height = 1 : 2 */
  width: calc(7 / 12 * 100vw);
  height: calc(3.5 / 12 * 100vw);

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
  position: absolute;
  top: 50%;

  width: auto;
  margin-top: -22px;
  padding: 16px;

  cursor: pointer;
  user-select: none;
  transition: 0.6s ease;

  color: white;
  border-radius: 0 3px 3px 0;

  font-size: 18px;
  font-weight: bold;
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
  margin: 0 2px;

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
