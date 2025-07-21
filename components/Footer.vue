<template>
    <div class="footer-section">
        
        <p class="left-align-section">© Enon Baptist Church 2025</p>
        <p class="right-align-section">Enon Baptist Church, Skinner Street, Chatham, ME4 5RF, UK (<NuxtLink href="/find-us">Find Us</NuxtLink>)</p>
    
    </div>
        
</template>

<style>
.footer {
    background-color: var(--nav-bar-bg-color);
    color: var(--body-text-color);
    padding: 0px;
    display: flex;
    flex-direction: row; /* Horizontal layout for desktop */
  
  height: 25px; /* Adjust for your footer height */

}

.footer-section {
    background-color: var(--nav-bar-bg-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 auto; /* Add some padding for aesthetics */
}

.left-align-section {
 margin:0px;
 display: flex; /* Visible on desktop */
    justify-content: flex-start;
    flex-grow: 1; /* Allow this section to take available space */
    text-align: left;
    padding-left: 10px; /* Add some padding for aesthetics */
}

.right-align-section {
    margin:0px;
    text-align: right;
    display: flex; /* Visible on desktop */
    justify-content: flex-end;
}
</style>