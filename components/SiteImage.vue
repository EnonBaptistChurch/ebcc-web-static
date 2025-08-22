<template>
  <img
    :src="src"
    :srcset="srcset"
    :sizes="sizes"
    :alt="alt"
    :class="cls"
  />
</template>

<script setup>
const props = defineProps({
  src: String,
  sizes: String,
  alt: { type: String, default: '' },
  cls: String
});

const widths = [320, 480, 640, 768, 1024, 1280, 1440, 1920];

const srcset = widths
  .map(w => `${props.src}?w=${w} ${w}w`)
  .join(', ')
</script>