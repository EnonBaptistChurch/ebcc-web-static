<template>
  <main >
    
    <BibleVerseParallaxOverlay
    image="/images/field.webp"
      verseText="And you will seek Me and find Me, when you search for Me with all your heart."
      reference="Jeremiah 29:13"
      version="NKJV" />
      <div class="text-content">
    <h5>This page wandered off — like a sheep without a shepherd.</h5>
    <NuxtLink to="/" class="btn-home">Return home</NuxtLink>
    </div>
    <br />
  
  </main>
</template>

<script setup>
// No special logic needed here for 404 page in static mode
</script>

<style scoped>
.error-page {
  max-width: 600px;
  margin: 6rem auto;
  padding: 2rem;
  text-align: center;
  font-family: var(--font-family, sans-serif);
  color: var(--color-text, #333);
}

.error-page h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-page p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.btn-home {
  display: inline-block;
  background-color: var(--nav-bar-bg-color, #007bff);
  color: #000;
  padding: 0.5rem 0.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-home:hover {
  background-color: #005fa3;
  color: #ffffff
}
</style>