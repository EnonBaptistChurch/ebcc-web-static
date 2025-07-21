<template>
  <div
    id="edenParallax_page_section"
    class="edenParallax-zone"
    :data-speed="speed"
    :data-image-src="image"
    :style="{ backgroundImage: `url(${image})` }"
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
    image: {
      type: String,
      required: true,
    },
    verseText: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
    speed: {
      type: String,
      default: "0.3",
    },
  },
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
}

@supports (-webkit-overflow-scrolling: touch) {
  .edenParallax-zone {
    background-attachment: scroll;
  }
}

/* Increase height on landscape to give more vertical space */
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
