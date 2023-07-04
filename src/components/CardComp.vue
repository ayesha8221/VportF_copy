<template>
    <router-link to= "{name: 'testimonial', params: {{id:'testimonial.id'}}}"  class="card" style="width: 18rem">
  <img :src="testimonial.image" class="card-img-top" :alt="testimonial.name"/>
  <div class="card-body">
    <h5 class="card-title">{{ testimonial.name }}</h5>
    <p class="card-text">{{ testimonial.desc }}</p>
  </div>
</router-link>
</template>
<script>
export default {
    props: ["testimonial"],
}
</script>
<style>
    
</style>