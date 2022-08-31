<template>
    <section v-if="product" class="product">
        <h2 class="h2">Product</h2>
        <div class="container">
            <div class="card bg-black">
                <img :src="product.img" class="card-img-top spin img-fluid center" alt="image">
                <div class="card-body bg-black text-white">
                    <h2 class="card-title1">{{ product.title }}</h2>
                    <h2 class="card-title">R{{ product.price }}</h2>
                    <!-- <h2 class="card-title">{{product.description}}</h2> -->
                    <button class="btn btn-black text-white text-black">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
    <div v-else>
        <Loader />

    </div>
</template>
<script>
import Loader from '@/components/Loader.vue';

export default {
    computed: {
        product() {
            return this.$store.state.singleproduct;
        }
    },
    mounted() {
        this.$store.dispatch("getSingleProducts", this.$route.params.id);
    },
    methods: {},
    
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
    left: 46rem;
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

button {
    /* color: #090909; */
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    /* background: #e8e8e8; */
    border: 1px solid #e8e8e8;
    transition: all .3s;
    /* box-shadow: 6px 6px 12px #c5c5c5,
        -6px -6px 12px #ffffff; */
}

button:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5,
        inset -4px -4px 12px #ffffff;
}

nav {
    display: flex;
    justify-content: center;
}


.card {
    display: flex;
    border: 1px solid #e8e8e8;
    justify-content: center;
    align-items: center;
    width: 25rem;
    position: relative;
    left: 28rem;
}

.card-title {
    padding-bottom: 1px;
}

img {
    object-fit: cover;
    height: 25rem;
    width: 25rem;
    align-items: center;
}
</style>