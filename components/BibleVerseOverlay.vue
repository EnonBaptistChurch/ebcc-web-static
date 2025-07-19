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
        “{{ verseText }}” {{ reference }} {{ ( version ) ? `(${version})` : '' }}
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
  height: 400px;
}

.edenParallax-wrap {
  position: relative;
  width: 100%;
  height: 100%;
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
  position: relative;
  font-weight: 300;
  text-align: center;
  padding: 100px 10%;
  font-size: 40px;
  line-height: 55px;
  color: #fff;
  z-index: 2;
}
</style>
