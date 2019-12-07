<template>
  <section>
    <div class="slide-container">
      <div class="slide" v-for="([name, src], i) in this.slides" :key="i">
        <img class="slide-image" :src="src" />
      </div>
      <a class="btn-prev-slide" @click="plusSlides(-1)">&#10094;</a>
      <a class="btn-next-slide" @click="plusSlides(1)">&#10095;</a>
    </div>
    <div class="slide-menu">
      <div class="slide-caption">{{ this.slides[slideIndex][0] }}</div>
      <span class="btn-slide-dot" v-for="(e, i) in [1,2,3]" :key="i" @click="currentSlide(i)"></span>
    </div>
  </section>
</template>

<style scoped>
.slide-container {
  max-width: 1000px;
  position: relative;
}
.slide {
  display: none;

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
      slides: [
        [
          "20190125-一夜台北",
          this.$images.EVENTS["20190125-一夜台北"]["20190125-一夜台北1"]
        ],
        [
          "20181013-SFC秋祭",
          this.$images.EVENTS["20181013-SFC秋祭"]["20181011"]
        ],
        [
          "20190622-慶早交流活動",
          this.$images.EVENTS["20190622-慶早交流活動"]["20190622慶早交流"]
        ]
      ],
      slideIndex: 0,
      timer: 0
    };
  },
  methods: {
    plusSlides(n) {
      this.slideIndex += n;
      this.showSlides(this.slideIndex);
    },
    currentSlide(n) {
      this.slideIndex = n;
      this.showSlides(this.slideIndex);
    },
    showSlides(n) {
      clearInterval(this.timer);
      const slides = Array.from(document.getElementsByClassName("slide"));
      const dots = Array.from(document.getElementsByClassName("btn-slide-dot"));

      this.slideIndex = (this.slideIndex + slides.length) % slides.length;

      slides.forEach(slide => slide.style.setProperty("display", "none"));
      dots.forEach(dot => dot.classList.remove("active"));

      slides[this.slideIndex].style.setProperty("display", "block");
      dots[this.slideIndex].classList.add("active");
      this.timer = setTimeout(this.plusSlides, this.$setting.slide.time, 1);
    }
  },
  mounted() {
    this.showSlides(this.slideIndex);
  }
};
</script>
