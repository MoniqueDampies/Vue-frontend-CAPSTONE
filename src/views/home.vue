<template>

  <!-- <Header/> -->
  <!-- <HomeProds/> -->

</template>

<script>
//   import Header from '../components/landingHeader.vue'
// import HomeProds from '../components/HomeProds.vue'
export default {
  name: 'home',
  props: ["product"],
  computed: {
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.commit("setSingleProduct", null);

  },
  components: {
    // Header,
    // HomeProds
}

};
</script>
<style scoped>
/* The hero image */
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  /* background-image: url("https://i.postimg.cc/7YZwzHSJ/ceiling-painting-4912734-1920.jpg"); */

  /* Set a specific height */
  height: 50%;
  z-index: -1;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  width: 80rem;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

img {
  width: 98rem !important;
  left: 1rem;
}

.container {
  /* max-width: 120rem !important; */
  min-height: 50vh;
  min-width: 95rem !important;
  /* margin-bottom: 5rem; */
  /* margin-top: 2rem; */
  /* padding-top: 12rem; */
  /* border: 5px solid red; */
  z-index: 1;
  position: relative;
  bottom: 10rem;
  /* right: 1rem; */
}

.head-btn {
  border-radius: 0;
  padding: 1rem;
  position: relative;
  top: 5rem;
}

.view-btn{
  margin-top: 2rem;
  position: relative;
  top: 2rem;
  letter-spacing: 1px;
  padding: 10px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.card-image {
  object-fit: cover;
  height: 27rem;
  width: 17rem;
  border-radius: 1px;
  border: 1px;
  padding-bottom: 1rem;
}

.card {
  position: relative;
  left: 5rem;
  height: 31rem;
  width: 20rem;
  padding: 0;
  margin-bottom: 10px;
  padding-bottom: 3rem;
}

h4, h3{
  letter-spacing: 2px;

}
</style>
