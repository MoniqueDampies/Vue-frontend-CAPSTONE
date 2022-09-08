<template>
    <section v-if="paintings" class="painting">
        <h2 class="h2">painting</h2>
        <div class="container">
            <div class="card bg-black">
                <img :src="paintings.img" class="card-img-top spin img-fluid center" alt="image">
                <div class="card-body bg-black">
                    <h2 class="card-title1">{{ paintings.title }}</h2>
                    <h2 class="card-title">R{{ paintings.price }}</h2>
                    <!-- <h2 class="card-title">{{painting.description}}</h2> -->
                    <button class="btn btn-black text-white text-black">Purchase</button>
                </div>
            </div>
        </div>
    </section>
    <div v-else>
        <Loader />
    </div>
    <Footer/>
</template>

<script>
import Loader from '@/components/Loader.vue';
import Footer from '@/components/Footer.vue';

export default {
    // name: 'singlepainting',
    computed: {
        paintings() {
            return this.$store.state.painting;
        }
    },
    mounted() {
        this.$store.dispatch("getSinglePaintings", this.$route.params.id);
    },
    methods: {},
    
    components: {
        Loader,Footer
    }
};
</script>

<style scoped>
section{
    position: relative;
    top: -5rem;
}

button {
    position: relative;
    top: 2rem;
    margin: 0 auto;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    /* display: block; */
    background-color: #ffffff;
    border: 1px solid transparent;
    color: #000000;
    font-weight: 300;
    width: 100%;
    border-radius: 2px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

button:hover {
    background-color: #000000;
    color: #ffffff;
    border-color: #ffffff;
}

nav {
    display: flex;
    justify-content: center;
}


.card {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e8e8e8;
    width: 25rem;
    position: relative;
    left: 28rem;
}

.card-title {
    padding-bottom: 1px;
}

img {
    object-fit: cover;
    height: 35rem;
    width: 25rem;
    align-items: center;
}
</style>