<template>
<div>
    <div class="text-content">
    <h2>Find Us</h2>
        <p>We are located at: Enon Baptist Church, Skinner Street, Chatham, ME4 5RF, UK</p>
    <div class ="mapcontainer">
    </div>
    </div>
    <iframe
        :src="mapUrl"
        width="100%"
        height="300px"
        style="border:0;"
        allowfullscreen=""
        loading="eager"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
</div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.338154880195!2d0.5245410153408684!3d51.378462827943984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8cd053f801537%3A0x39e4cda4ed625544!2sEnon+Baptist+Church!5e0!3m2!1sen!2suk!4v1485452280704'; // your Google Maps embed URL
const preloadMap = ref(false);

onMounted(() => {
  // Start preloading map after page is interactive
  setTimeout(() => {
    preloadMap.value = true;
  }, 1000); // adjust delay as needed
});
</script>
