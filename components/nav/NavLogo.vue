<template>
  <div class="navlogo">
    <div class="navlogo-text">
      <NuxtLink to="/">Enon Baptist Church</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.navlogo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.navlogo-text {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700;   /* font-bold */
  color:var(--nav-bar-text-color); /* similar to text-white */
}

.navlogo-text a {
  text-decoration: none;
  color: inherit;
}
</style>
