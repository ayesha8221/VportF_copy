<template>
    <!-- <div class="container justify-content-start align-items-start d-flex">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24">
    </a> -->
  <!-- </div> -->
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link to="/" class="nav-link">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/about" class="nav-link">About</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/projects" class="nav-link">Projects</router-link>
  </li>
  <li class="nav-item">
    <router-link to="" class="nav-link">Resume</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/contact" class="nav-link">Contact</router-link>
  </li>
    </ul>  
</template>
<script>
export default {
    
}
</script>
<style>
ul {
  background-image: none;
  background-color: transparent; /* Make the menu become transparent */
  border-radius: 0px;
  border: 0;
  box-shadow: none;
  padding: 10px;
  position: absolute; /* Make the menu out of the document flow so it can placed anywhere without disturbing other widgets */
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; /* If you delete this line, your menu link won't be clicked because it is behind the background. Applying this code bring the menu in front of the background */
}

a.nav-link {
  color: blueviolet !important;
}

    
</style>