<template>
<Navbar/>
  <router-view/>
</template>
<script>
import Navbar from './components/Navbar.vue';
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
}


body{
  text-align: center;
  background-color: black;
  color:#ffffff;
  overflow-x: hidden;
  font-family: 'Jomolhari', serif;
}


</style>
