<template>
  <main class="error-page">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <NuxtLink to="/" class="btn-home">Go back home Hello</NuxtLink>
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
  background-color: #007acc;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-home:hover {
  background-color: #005fa3;
}
</style>