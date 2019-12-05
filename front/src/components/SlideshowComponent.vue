<template lang="pug">
  section
    div.ktsa-Slideshow_Container
      div.ktsa-Slideshow_Slides(v-for="([name, src], i) in this.slides", :key="i")
        img(:src="src")
      a.ktsa-Slideshow_Prev(@click="plusSlides(-1)") &#10094;
      a.ktsa-Slideshow_Next(@click="plusSlides(1)") &#10095;
    div.ktsa-Slideshow_Menu
      div.ktsa-Slideshow_Caption {{ this.slides[slideIndex][0] }}
      span.ktsa-Slideshow_Dot(v-for="(e, i) in [1,2,3]", :key="i", @click="currentSlide(i)")
</template>

<style>
.ktsa-Slideshow_Container {
  max-width: 1000px;
  position: relative;
}
.ktsa-Slideshow_Slides {
  display: none;

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
.ktsa-Slideshow_Slides img {
  display: block;
  width: 100%;
}
.ktsa-Slideshow_Prev,
.ktsa-Slideshow_Next {
  @mixin ktsa_aside_arrow;
}
.ktsa-Slideshow_Next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.ktsa-Slideshow_Prev:hover,
.ktsa-Slideshow_Next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.ktsa-Slideshow_Menu {
  background-color: var(--KTSA-bg-caption);
  display: grid;
  grid-template-columns: 16fr 1fr 1fr 1fr;
  align-items: center;
}
.ktsa-Slideshow_Caption {
  position: relative;
  width: calc(100% - 3rem);
  color: white;
  font-size: 1.5rem;
  margin-left: 1em;
}
.ktsa-Slideshow_Dot {
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
.ktsa-Slideshow_Dot:hover {
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
      const slides = Array.from(
        document.getElementsByClassName("ktsa-Slideshow_Slides")
      );
      const dots = Array.from(
        document.getElementsByClassName("ktsa-Slideshow_Dot")
      );

      this.slideIndex = (this.slideIndex + slides.length) % slides.length;

      slides.forEach(slide => slide.style.setProperty("display", "none"));
      dots.forEach(dot => dot.classList.remove("active"));

      slides[this.slideIndex].style.setProperty("display", "block");
      dots[this.slideIndex].classList.add("active");
    }
  },
  mounted() {
    this.showSlides(this.slideIndex);
    // this.timer = setInterval(this.plusSlides, this.$setting.slide.time, 1);
  }
};
</script>
