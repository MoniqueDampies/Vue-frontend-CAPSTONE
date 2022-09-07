<template>
    
    <div id="allproducts" class="headerImage">
        <img src="https://i.postimg.cc/d35GkSXm/vienna-1652804-1920.jpg">
    </div>
    <div class="main">
        <h1 class="text-center">ALL PRODUCTS PAGE</h1>
        <ProductCard />
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
export default {
    name: '/allproducts',
    components: {
        ProductCard
    },
    

    mounted() {
        this.$store.dispatch("getProducts");
        this.$store.commit("setSingleProduct", null);
        // this.$store.dispatch('clearSingleProduct');
    }

}
</script>

<style scoped>
.main{
    /* z-index: 1; */
    position: relative;
    top: 5rem;
    margin-top: -57rem;
}

h1{
    position: relative;
    bottom: 3rem;
}

img {
    width: 98rem !important;
    left: 1rem;
    /* z-index: -1; */
}
</style>