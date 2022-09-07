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
        this.$store.commit("getSinglePaintings", null);
    },
    components: {
        Loader
    }
}
</script>

<style scoped>
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
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
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