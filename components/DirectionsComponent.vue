<template>
    <div >
      <a @click.prevent="getDirections(location)" rel="nofollow" href="#" >
        <img class="directions" src="~/assets/icons/nav.svg" alt="Home Icon" />
        Get Directions
      </a>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const props = defineProps<{ location: string }>();
  
  // Function to get directions using the user's geolocation
  function getDirections(location: string) {
    // Request location permission and navigate if granted
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get the user's latitude and longitude
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;
  
          // Create the Google Maps directions link with the precise location
          const url = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLon}&destination=${encodeURIComponent(location)}`;
          window.open(url, '_blank');
        },
        (error) => {
          // Handle permission denied or error (e.g., user denied permission)
          alert('Please enable location access to get directions.');
        },
        {
        enableHighAccuracy: true, // Ensures the device uses GPS (if available) for better precision
        timeout: 5000,             // Timeout after 5 seconds if location is not available
        maximumAge: 0             // Do not use cached location data, always get fresh data
      }
      );
    } else {
      // If geolocation is not supported by the browser
      alert('Geolocation is not supported by your browser.');
    }
  }
  </script>
  
  <style scoped>
  .location-link a {
    text-decoration: none;
  }
  
  .map-link {
    display: flex;
    align-items: center;
  }
  
  .map-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  
  .directions {
    transform:rotate(45deg);
  }

  .directions img{
    z-index: 0;
  }
  </style>
  