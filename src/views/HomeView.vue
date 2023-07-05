<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
  <div class="bgImg">
            <div class="container overlay w-100 h-100">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                      <div class="bgtext"><div class="wrapper">
    <div class="bgText">
      Hi! I'm Ayesha Galant.<br>
      I am an aspiring software developer.
    </div>
    <div>
      <router-link to="/projects">
        <button class="btnp">Projects</button>
      </router-link>
      <router-link to="/contact">
        <button class="btnc">Contact</button>
      </router-link>
    
    </div>
</div>
</div>
                      
                  </div>
                    </div>
                </div>
            </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>

::-webkit-scrollbar {
  display: none;
}

.bgImg {
  background-image: url(https://i.postimg.cc/wBPLvM9f/nikita-kachanovsky-OVbe-SXRk-9-E-unsplash-1-1.jpg);
    position: relative;
    background-size: cover;
    height: 100vh;
    width: auto;
    background-attachment: fixed;
    background-repeat: no-repeat;
}

/* .container.overlay {
backdrop-filter: blur(3px);

} */

.wrapper {
  padding-top: 270px;
  /* height: 100vh; */
  /*This part is important for centering*/
  display: grid;
  place-items: center;
  
}

.ul {
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


.bgText {
  /* background-color: rgb(0, 0, 0); */
    /* background-color: rgb(0, 0, 0, 0.4); */
    color: rgb(156, 156, 156);
  width: 47ch;
  /* border: 1px solid rgb(224, 193, 154); */
  animation: typing 2s steps(22), blink 1s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  transform: translate(-50%, -50%);
  /* border-right: 1px solid; */
  font-family: monospace;
  font-size: 2em;
  text-align: center;
}

@keyframes typing {
  from {
    width: 0
  }
}

.btnp {
  color: rgb(255, 255, 255);
  background-color: blueviolet;
  border: solid blueviolet;
  margin-right: 100px;
}
.btnc {
  color: white;
  background-color: blueviolet;
  border: solid blueviolet;
  margin-right: 800px;
}
    
/* @keyframes blink {
  50% {
    border-color: transparent
  }
} */

</style>

