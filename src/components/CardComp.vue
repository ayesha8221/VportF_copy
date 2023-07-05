<template>
    <!-- <router-link :to= "{name: 'testimonials', params: {id:'testimonial.id'}}"  class="card" style="width: 18rem">
  <img :src="testimonial.image" class="card-img-top" :alt="testimonial.name"/>
  <div class="card-body">
    <h5 class="card-title">{{ testimonial.name }}</h5>
    <p class="card-text">{{ testimonial.desc }}</p>
  </div>
</router-link> -->
<div class="container">
      <div class="card card-all">
        <div class="info">
          <h1>{{ testimonial.desc }}</h1>
          <ul>
            <li><h1>{{ testimonial.name }}</h1></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    props: ["testimonial"],
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: black;
}

.body {
  background: url(https://i.postimg.cc/hvsKWnMG/c12-okuhle-gwotiwe-1-720.jpg) no-repeat center fixed;
  background-size: cover;
  /* background-blend-mode: multiply; */
  /* background-color: rgba(0, 0, 0, 0.1);  */
  /* background-color: black; */
  font-family: "Catamaran", sans-serif;
  font-family: "DM Sans", sans-serif;
  font-family: "Hind Siliguri", sans-serif;
  font-family: "Signika Negative", sans-serif;
  font-family: "Ubuntu", sans-serif;
}


.card-all {
  display: inline-block;
  margin: 60px 0 0 3.2%;
  width: 300px;
  overflow: hidden;
  height: 500px;
  box-shadow: rgba(83, 83, 83, 0.3) 0px 19px 38px,
    rgba(62, 62, 62, 0.22) 0px 15px 12px;
}

.info {
  margin-top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
}

.card-all.h1  {
  color: white;
}

.card-all.h1 {
  font-size: 55px;
  text-decoration: underline;
}

.card-all.li {
  font-size: 32px;
  padding: 10px 0 0 20px;
}

.card {
  background-position: center;
  background: url(https://i.postimg.cc/hvsKWnMG/c12-okuhle-gwotiwe-1-720.jpg);
  transition: 0.7s ease-in-out;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.2);
}

.card1 {
  background: url(https://i.postimg.cc/hvsKWnMG/c12-okuhle-gwotiwe-1-720.jpg);
  transition: 0.7s ease-in-out;
  background-position: -150px;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.2);
}

/* Hover effect for all */

.card-all:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.card-all:hover .info {
  opacity: 1;
}

.card:hover {
  background: url(https://i.postimg.cc/hvsKWnMG/c12-okuhle-gwotiwe-1-720.jpg);
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.3);
}

/* Hover effect only for Mercedes */
.card1:hover {
  background: url(https://i.postimg.cc/hvsKWnMG/c12-okuhle-gwotiwe-1-720.jpg);
  background-position: -150px;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}

</style>