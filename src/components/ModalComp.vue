<template>
  <div class="container">
    <img :src="project.image" :alt="project.name" id="project-imgs">
           <h4 class="title">{{ project.title }}</h4>
            <p class="desc">{{ project.desc }}</p>
             <button class="butt">
              <a :href="project.link">{{ project.title }}</a>
            </button>
             <button class="butt">
              <a href="https://github.com/" target="_blank">Github</a>
              </button>
            </div>
</template>
<script>
export default {
  props: ["project"]
}
</script>
<style scoped>

body {
  padding-top: 60px;
}

#project-imgs {
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