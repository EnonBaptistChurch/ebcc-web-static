<template>
  <div
    id="edenParallax_page_section"
    class="edenParallax-zone"
    :data-speed="speed"
    :style="{ backgroundImage: `url(${currentImage})` }"
  >
    <div class="edenParallax-wrap">
      <div class="edenParallax-screen"></div>
      <div class="verse-content">
        “{{ verseText }}” {{ reference }} {{ version ? `(${version})` : '' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BibleVerseParallax",
  props: {
    verseText: { type: String, required: true },
    reference: { type: String, required: true },
    version: { type: String, default: '' },
    speed: { type: String, default: "0.3" },
    images: { 
      type: Object, 
      default: () => ({
        small: '/images/field-320.webp',
        medium: '/images/field-768.webp',
        large: '/images/field-1440.webp',
        xlarge: '/images/field-1920.webp',
      })
    }
  },
  data() {
    return {
      currentImage: this.images.large,
    };
  },
  mounted() {
    this.updateImage();
    window.addEventListener('resize', this.updateImage);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateImage);
  },
  methods: {
    updateImage() {
      const width = window.innerWidth;
      if (width >= 1440 && this.images.xlarge) this.currentImage = this.images.xlarge;
      else if (width >= 1024 && this.images.large) this.currentImage = this.images.large;
      else if (width >= 768 && this.images.medium) this.currentImage = this.images.medium;
      else if (this.images.small) this.currentImage = this.images.small;
    }
  }
};
</script>

<style scoped>
.edenParallax-zone {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 300px; /* default height for portrait */
  overflow: hidden;
  transition: background-image 0.3s ease-in-out;
}

/* Safari/iOS fallback for fixed backgrounds */
@supports (-webkit-overflow-scrolling: touch) {
  .edenParallax-zone {
    background-attachment: scroll;
  }
}

/* Increase height on landscape */
@media (orientation: landscape) {
  .edenParallax-zone {
    height: 400px;
  }
}

.edenParallax-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
}

.edenParallax-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  opacity: 0.1;
  z-index: 1;
}

.verse-content {
  z-index: 2;
  color: #fff;
  text-align: center;
  font-weight: 300;
  padding: 0 5%;
  font-size: clamp(16px, 4vw, 32px);
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-height: 100%;
  overflow: hidden;
}
</style>
