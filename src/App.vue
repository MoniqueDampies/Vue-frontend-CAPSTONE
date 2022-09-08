<template>
<Navbar/>
  <router-view/>
<!-- <Footer/>   -->

</template>
<script>
import Navbar from './components/Navbar.vue';
// import Footer from './components/Footer.vue';
export default {
  components: {
    Navbar
}
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Jomolhari&display=swap');


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

.btn{
	box-shadow: none !important
}

.btn-close {
	box-shadow: none !important
}

body{
  /* text-align: center; */
  background-color: black;
  color:#ffffff;
  overflow-x: hidden;
  font-family: 'Jomolhari', serif;
}

a{
  text-decoration: none;
  outline: none;
}

/* a:active{
  outline: none;
} */



</style>
