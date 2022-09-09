<template>
<Navbar/>
  <router-view/>
<Footer/>  

</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Navbar,
    Footer
}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jomolhari&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Balinese&display=swap');
/* @media only screen and (max-width: 1350px) {
  
    section {
        margin-top: 6rem;
    }
    
  } */
  
  
    section {
        margin-top: 6rem;
    }
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  /* font-family: 'Montserrat', sans-serif; */
  font-family: 'Montserrat', sans-serif;
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
.btn{
	box-shadow: none !important
}
.btn-close {
	box-shadow: none !important
}
.nav-link{
  color: black;
  text-decoration: none;
}

.nav-link:hover{
  color: black;
}

</style>
