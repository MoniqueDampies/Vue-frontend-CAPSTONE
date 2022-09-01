<template>
    <section class="paintings bg-black">
        <div class="container">
            <div v-if="paintings" class="row mx-auto justify-content-center">
                <input type="text" placeholder="Search Paintings" class="w-75 search mt-5 bg-black text-white mb-5" v-model="search">
                <div v-for="paintings in paintings" :key="paintings.id" class="card row  mx-auto px-4 bg-black">
                    <div class="card-body bg-black">
                        <div class="bg-black">
                            <img :src="paintings.img" class="card-image img-fluid" alt="image" />
                            <h5 class="card-title">{{ paintings.title }}</h5>
                            <router-link :to="{
                                name: 'singlepainting',
                                params: { id: paintings.id },
                            }"><button class="btn btn-black text-white w-5">
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
import Loader from '@/components/Loader.vue'

export default {
    name: 'PaintingCard',
    props: ["painting"],
    data() {
        return {
            search: ''
        }
    },
    computed: {
        paintings() {
            return this.$store.state.paintings?.filter(paintings => { let isMatch = true; if (!paintings.title.toLowerCase().includes(this.search.toLowerCase())) { isMatch = false; } return isMatch });
        },
    },
    mounted() {
        this.$store.dispatch("getPaintings")
        this.$store.commit("setSinglePainting", null);
    },
    components: {
        Loader
    }
}
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

select{
    padding: 0.2rem;
}

::placeholder{
    text-align: center;
}

.card {
    padding: 4rem;
    padding-left: 2rem;
    /* background: rgb(236, 236, 236); */
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

button {
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: 18px;
    /* border-radius: 0.5em; */
    /* background: #e8e8e8; */
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
    /* box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff; */
}

button:active {
    color: #666;
    /* box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff; */
}

.search{
    height: 2rem;
}


.card-image {
    object-fit: cover;
    height: 25rem;
    width: 25rem;
    border-radius: 1px;
}

section {
    margin-top: 100px;
    /* padding-bottom: 100px; */
}

.card {
    height: 37rem;
    width: 33rem;
    margin-bottom: 10px;
    padding: 1rem;
    padding-bottom: 3rem;
    /* border: 1px solid #e8e8e8; */
    padding-top: 1rem;
}

h5 {
    padding-top: 1rem;
}
</style>