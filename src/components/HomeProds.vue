<template>
    <div class="container bg-black">
        <div v-if="products" class="row">
            <h4 class="text-center text-white mt-4 mb-3">ART MART'S FINEST</h4>
            <h3 class="text-center text-white mb-4">COLLECTOR’S EDITION</h3>
            <div v-for="product in products" :key="product.id" class="card row mx-2 bg-black">
                <div class="card-body">
                    <div class="bg-black">
                        <img :src="product.img" class="card-image img-fluid" alt="image" />
                        <h5 class="card-title">{{ product.title }}</h5>
                        <h5 class="card-category">{{ product.category }}</h5>
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
        <div v-else>
            <Loader />
        </div>

    </div>
</template>

<script>
import Loader from './Loader.vue';
export default {
    name: "HomeProds",
    computed: {
        products() {
            let limit = this.$store.state.products;
            return limit.slice(0, 4);
        }
    },
    mounted() {
        this.$store.dispatch("getProducts");
        this.$store.commit("setSingleProduct", null);
    },
    components: { Loader }
}
</script>

<style scoped>
.view-btn {
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

h4,
h3 {
    letter-spacing: 2px;

}
</style>