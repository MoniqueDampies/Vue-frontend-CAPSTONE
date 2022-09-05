<template>
    <section class="products bg-black">
        <div class="container">
            <div v-if="products" class="row justify-content-center">
                <input type="search" placeholder="Search Products" class="search w-75  bg-black text-white mt-4 mb-3" v-model="search">
                <div class="col-sm-2 text-start  mt-4 mb-3">
                    <select class="w-100" v-model="search">
                        <option></option>
                        <option value="Acrylic">Acrylic</option>
                        <option value="Oil">Oil</option>
                        <option value="Watercolour">
                            Watercolour
                        </option>
                        <option value="Paint">Paint</option>
                        <option value="Pencil">Pencil</option>
                        <option value="Markers">Markers</option>
                        <option value="Paper">Paper</option>
                    </select>
                </div>
                <div v-for="product in products" :key="product.id" class="card row mx-2  bg-black">
                    <div class="card-body">
                        <div class="bg-black">
                            <img :src="product.img" class="card-image img-fluid" alt="image" />
                            <h5 class="card-title">{{ product.title }}</h5>
                            <h5 class="card-category">{{ product.category }}</h5>
                            <h5>R {{ product.price }}.00</h5>
                            <router-link :to="{
                                name: 'singleproduct',
                                params: { id: product.id },
                            }">
                                <button class="btn btn-black text-center btn-outline-black text-white w-5">
                                    View
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <Loader />
            </div>
        </div>
    </section>
</template>

<script>
import Loader from '@/components/Loader.vue';
export default {
    name: 'ProductCard',
    props: ["product"],
    data() {
        return {
            search: ''
        }
    },

    computed: {
        products() {
            return this.$store.state.products?.filter(products => { let isMatch = true; if (!products.title.toLowerCase().includes(this.search.toLowerCase())) { isMatch = false; } return isMatch });
        },
        category() {
            return this.$store.state.products?.filter(products => { let isMatch = true; if (!products.category.toLowerCase().includes(this.search.toLowerCase())) { isMatch = false; } return isMatch })
        },
    },

    mounted() {
        this.$store.dispatch("getProducts");
        this.$store.commit("setSingleProduct", null);
        // this.$store.dispatch('clearSingleProduct');
    },

    components: {
        Loader
    }
};
</script>

<style scoped>
.dot-spinner {
    --uib-size: 2.8rem;
    --uib-speed: 0.9s;
    --uib-color: #183153;
    position: relative;
    left: 40rem;
    top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: var(--uib-size);
    width: var(--uib-size);
}

.dot-spinner__dot {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
}

.dot-spinner__dot::before {
    content: "";
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    opacity: 0.5;
    animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}

.dot-spinner__dot:nth-child(2) {
    transform: rotate(45deg);
}

.dot-spinner__dot:nth-child(2)::before {
    animation-delay: calc(var(--uib-speed) * -0.875);
}

.dot-spinner__dot:nth-child(3) {
    transform: rotate(90deg);
}

.dot-spinner__dot:nth-child(3)::before {
    animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot-spinner__dot:nth-child(4) {
    transform: rotate(135deg);
}

.dot-spinner__dot:nth-child(4)::before {
    animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot-spinner__dot:nth-child(5) {
    transform: rotate(180deg);
}

.dot-spinner__dot:nth-child(5)::before {
    animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot-spinner__dot:nth-child(6) {
    transform: rotate(225deg);
}

.dot-spinner__dot:nth-child(6)::before {
    animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot-spinner__dot:nth-child(7) {
    transform: rotate(270deg);
}

.dot-spinner__dot:nth-child(7)::before {
    animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot-spinner__dot:nth-child(8) {
    transform: rotate(315deg);
}

.dot-spinner__dot:nth-child(8)::before {
    animation-delay: calc(var(--uib-speed) * -0.125);
}

@keyframes pulse0112 {

    0%,
    100% {
        transform: scale(0);
        opacity: 0.5;
    }

    50% {
        transform: scale(1);
        opacity: 1;
    }
}

/* /////////////////////////////////////////////////////////////////////// */

.search{
    padding: 0.1rem;
}

::placeholder{
    text-align: center;
}

.card {
    background: rgb(0, 0, 0);
    /* border: 1px solid #e8e8e8; */
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

button {
    color: #090909;
    padding: 0.7em 1.7em;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    font-size: 18px;
    /* border-radius: 0.5em; */
    /* background: #e8e8e8; */
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
    /* box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff; */
}

router-link{
    text-decoration: none;
}

button:active {
    color: #666;
    /* box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff; */
}

nav {
    display: flex;
    justify-content: center;
} 


.card-image {
    object-fit: cover;
    height: 30rem;
    width: 30rem;
    border-radius: 1px;
    border: 1px;
    padding-bottom: 1rem;
}

section {
    margin-top: 100px;
    /* padding-bottom: 100px; */
}

select{
    color:white;
    background-color: #090909;
    padding: 0.16rem;
}

.card {
    height: 43rem;
    width: 25rem;
    padding: 0;
    margin-bottom: 10px;
    padding-bottom: 3rem;
}

.h2 {
    padding-top: 10px;
}
</style>