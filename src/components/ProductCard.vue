<template>
    <section class="products bg-black">
        <div class="container">
            <div v-if="products" class="row justify-content-center">
                <input type="search" placeholder="Search Products" class="search w-75  bg-black text-white mt-4 mb-3"
                    v-model="search">
                <div class="col-sm-2 text-start  mt-4 mb-3">
                    <select class="w-100" v-model="search">
                        <option></option>
                        <option value="Acrylic">Acrylic</option>
                        <option value="Oil">Oil</option>
                        <option value="Watercolour">Watercolour</option>
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
.search {
    padding: 0.1rem;
}

::placeholder {
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

router-link {
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

select {
    color: white;
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