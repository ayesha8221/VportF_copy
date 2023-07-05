<template>
  <!-- <div class="cardd" style="width: 18rem;">
  <img class="card-img-top" :src="project.image" :alt="project.title">
  <div class="card-body">
    <button>
    <a href="https://github.com/">Github</a>
  </button>
  <button>
    <a href="http://">{{ project. }}</a>
  </button>

  </div>
</div>
  <div :to= "{name: 'projects', params: {id: 'project.id'}}" id="exampleModal" class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ project.title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>{{ project.desc }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
  </div> -->
  <div class="container">
    <div class="cardd">
      <div class="content">
        <h2>01</h2>
        <h3>Card One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit modi impedit quisquam quae, fuga fugit.</p>
        <a href="">Read More</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["project"]
}
</script>
<style>

/* .cardd {
  padding-top: 60px;
} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #161620;
  font-family: "Poppins", sans-serif;
}

.body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(#f00, #f0f); */
  /* clip-path: circle(30% at right 70%); */
}

.body::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(#2196f3, #e91e63); */
  /* clip-path: circle(20% at 10% 10%); */
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  z-index: 1;
}

.cardd {
  position: relative;
  width: 280px;
  height: 400px;
  margin: 30px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}

.cardd:hover .content {
  transform: translatey(0);
  opacity: 1;
}

.content {
  margin-top: 20px;
  text-align: center;
  padding: 20px;
  transition: 0.5s;
  transform: translatey(100px);
  opacity: 0;
}

.h2 {
  pointer-events: none;
  font-size: 8em;
  position: absolute;
  top: -110px;
  right: 30px;
  color: rgba(255, 255, 255, 0.05);
}

.h3 {
  color: #fff;
  font-size: 1.8em;
  z-index: 1;
  margin-top: 20px;
}

.p {
  font-weight: 300;
  font-size: 1em;
  color: #fff;
}

.a {
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  background: #fff;
  padding: 8px 20px;
  margin-top: 15px;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.2);
}
  
</style>