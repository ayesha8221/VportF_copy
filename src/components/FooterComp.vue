<template>
    <nav class="navbar fixed-bottom bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <div class="footer">
        <div class="social">
            <div class="icon">
                <a href="https://github.com/" target="_blank">
                <img src="https://i.postimg.cc/tT9J23BZ/6927665.png" alt="github">
            </a>
            </div>
            <div class="icon">
                <a href="https://www.linkedin.com/" target="_blank">
                <img src="https://i.postimg.cc/0y1mRwQn/1400486.png" alt="linkedin">
            </a>
            </div>
            <div class="icon">
                <a href="https://www.facebook.com/" target="_blank">
                <img src="https://i.postimg.cc/yNSwJ2Bs/1400477.png" alt="facebook"></a>
            </div>
            <div class="icon">
                <a href="https://twitter.com/" target="_blank">
                <img src="https://i.postimg.cc/Wp7w7S1V/2525779.png" alt="twitter">
            </a>
            </div>
    </div>
    <!--copyright-->
    <div id="copyright" class="text-center p-2">
            <p>@Copyrights Reserved by Ayesha Galant 2023.</p>
    </div>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    
}
</script>
<style>

.bg-body-tertiary {
  background-color: blueviolet !important;
}

.navbar.fixed-bottom.bg-body-tertiary {
  height: 40px;
  opacity: 0.5;
}

img{
    max-width: 50px;
}
.social{
    /* right: -80px; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    bottom: 50%;
    /* background-color: #A491B8; */
    translate: transform rotate -90deg
  }
  .social a :hover{
    transition: 0.3s;
    padding-inline: 5px;
  }
  #copyright{
    display: flex;
    justify-content: center;
    /* background-color: #A491B8; */
    font-family: 'Dancing Script', cursive;
    color:#361B57;
    font-size: 20px;
  }
    
</style>