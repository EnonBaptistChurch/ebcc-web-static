<template>
  <div class="footer">
    <div class="footer-section">
      <p class="left-align-section">© Enon Baptist Church 2025</p>
      <p class="right-align-section">
        Enon Baptist Church, Skinner Street, Chatham, ME4 5RF, UK
        (<NuxtLink href="/find-us">Find Us</NuxtLink>)
      </p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: var(--nav-bar-bg-color);
  color: var(--body-text-color);
  padding: 0px;
}

.footer-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.left-align-section,
.right-align-section {
  flex: 1 1 100%;
  margin: 5px 0;
}

.left-align-section {
  text-align: left;
  padding-left: 10px;
}

.right-align-section {
  text-align: right;
  padding-right: 10px;
}

/* Less than Laptop layout */
@media (max-width: 1024px) {
    .right-align-section {
        display: none;
    }
}

/* Desktop layout */
@media (min-width: 768px) {
  .footer-section {
    flex-direction: row;
  }

  .left-align-section,
  .right-align-section {
    flex: 1;
    margin: 0;
  }

  .left-align-section {
    text-align: left;
    padding-left: 10px;
  }

  .right-align-section {
    text-align: right;
    padding-right: 10px;
  }
}
</style>
