<template>
  <section
    id="edenParallax_page_section"
    class="edenParallax-zone"
    :data-speed="speed"
    :data-image-src="image"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="edenParallax-wrap">
      <div class="edenParallax-screen"></div>
      <div class="verse-content">
        “{{ verseText }}”
        <div class="reference">
          {{ reference }}
          <span class="version">({{ version }})</span>
        </div>
      </div>
    </div>
  </section>
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
      default: "NKJV",
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
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

@media (min-width: 600px) {
  .edenParallax-zone {
    min-height: 400px;
  }
}

@media (min-width: 1024px) {
  .edenParallax-zone {
    min-height: 500px;
  }
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
  z-index: 2;
  text-align: center;
  padding: 3rem 1rem;
  font-weight: 300;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.6;
}

@media (min-width: 600px) {
  .verse-content {
    font-size: 1.6rem;
    line-height: 2.2rem;
    padding: 4rem 2rem;
  }
}

@media (min-width: 1024px) {
  .verse-content {
    font-size: 2rem;
    line-height: 2.8rem;
    padding: 5rem 4rem;
  }
}

.reference {
  display: block;
  margin-top: 1rem;
  font-size: 0.95em;
  font-style: italic;
}

.version {
  margin-left: 0.5em;
  font-size: 0.9em;
}
</style>
