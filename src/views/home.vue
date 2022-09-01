<template>
  <div class="hero-image">
    <img src="https://i.postimg.cc/7YZwzHSJ/ceiling-painting-4912734-1920.jpg">
    <div class="hero-text">
      <h1>THE FLAIR OF EXQUISITE HANDCRAFTED ART SUPPLIES</h1>

      <router-link to="/allproducts"><button class="head-btn btn btn-black fw-6 bg-white text-black w-25">
          OUR STORE
        </button>
      </router-link>
    </div>
  </div>
  <div class="container bg-black">
    <div v-if="products" class="row">
      <h4 class="text-white mt-4 mb-3">ART MART'S FINEST</h4>
      <h3 class="text-white mb-4">COLLECTOR’S EDITION</h3>
      <div v-for="product in products" :key="product.id" class="card row mx-2 text-center bg-black">
        <div class="card-body">
          <div class="bg-black">
            <img :src="product.img" class="card-image img-fluid" alt="image" />
            <h5 class="card-title">{{ product.title }}</h5>
            <!-- <h5 class="card-category">{{ product.category }}</h5> -->
            <h5>R {{ product.price }}.00</h5>
          </div>
        </div>
      </div>
      
      <router-link to="/allproducts">
              <button class="view-btn btn btn-black mt-5 text-white">
                VIEW ALL PRODUCTS
              </button>
            </router-link>
    </div>
    
  </div>
  <!-- <div class="container w-100">
    <img src="https://i.postimg.cc/7YZwzHSJ/ceiling-painting-4912734-1920.jpg">
  </div>
  <div class="box bg-black vh-50">
    <h5 class="text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, harum?</h5>
  </div> -->
</template>

<script>
export default {
  name: 'home',
  props: ["product"],
  computed: {
    products() {
      let limit = this.$store.state.products;
      return limit.slice(0, 4)
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.commit("setSingleProduct", null);

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
  margin-top: 1rem;
  position: relative;
  top: 1rem;
  letter-spacing: 1px;
  padding: 10px;
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
