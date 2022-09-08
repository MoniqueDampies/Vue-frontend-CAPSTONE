<template>
    <section class="paintings bg-black">
        <div class="container">
            <div v-if="paintings" class="row mx-auto justify-content-center">
                <input type="text" placeholder="Search Paintings" class="w-75 search mt-4 bg-black text-white"
                    v-model="search">
                <div class="col-sm-2 text-start">
                    <select class="w-100" v-model="search">
                        <option></option>
                        <option value="Ascending">Lowest to Highest</option>
                        <option value="Descending">Highest to Lowest</option>
                    </select>
                </div>
                <div v-for="paintings in paintings" :key="paintings.id" class="card row  mx-auto px-4 bg-black">
                    <router-link :to="{
                        name: 'singlepainting',
                        params: { id: paintings.id },
                    }">
                        <div class="card-body bg-black">
                            <div class="bg-black">
                                <img :src="paintings.img" class="card-image img-fluid" alt="image" />
                                <h5 class="card-title">{{ paintings.title }}</h5>
                                <h4 class="card-price">R {{ paintings.price }}.00</h4>
                            </div>
                        </div>
                    </router-link>
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

a{
    text-decoration: none;
    color: white;
}
select {
    padding: 0.2rem;
}

::placeholder {
    text-align: center;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.card {
    padding: 4rem;
    /* border: 1px solid white; */
    min-height: 42rem;

}

button, input, select {
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;
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

/* .search {
    height: 2rem;
} */


.card-image {
    object-fit: cover;
    height: 37rem;
    width: 35rem;
    border-radius: 1px;
}

section {
    margin-top: 100px;
    /* padding-bottom: 100px; */
}

.card {
    height: 46rem;
    width: 40rem;
    /* margin-bottom: 4rem; */
    padding: 1rem;
    padding-bottom: 3rem;
    /* border: 1px solid #e8e8e8; */
    /* padding-top: 1rem; */
}

h5 {
    padding-top: 1rem;
}


select {
    color: white;
    background-color: #090909;
    padding: 0.49rem;
    position: relative;
    right: 2rem;
    top: 1.3rem;
}
</style>