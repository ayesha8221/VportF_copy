<template>
  <div class="container">
    <img :src="testimonial.image" :alt="testimonial.name" id="testimonial-imgs">
           <h4 class="title">{{ testimonial.name }}</h4>
            <p class="desc">{{ testimonial.desc }}</p>
            </div>
</template>
<script>
export default {
  props: ["testimonial"]
}
</script>
<style scoped>

body {
  padding-top: 60px;
}

#testimonial-imgs {
  padding-top: 60px;
  height: 300px;
  width: auto;
}

.butt {
  width: auto;
  height: 40px;
  text-decoration: none;
  text-underline-offset: none;
}

.container {
  /* padding-top: 60px; */
   width: 450px;
   height:auto;
   border: solid blueviolet;
  
}
  
</style>