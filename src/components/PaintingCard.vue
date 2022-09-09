<template>
    <section class="paintings bg-black">
        <div class="container">
            <div v-if="paintings" class="row mx-auto justify-content-center">
                <input id="search" type="text" placeholder="Search Paintings" class="w-75 search bg-black text-white"
                    v-model="search">
                <div class="col-sm-12">
                    <div class="row  mx-auto  justify-content-center">
                        <div class="col-sm-12">
                        </div>
                        <div class="col-sm-5 text-end">
                            <button id="filter" class="bg-black  text-white" @click="priceLtoH"><i class="fas fa-sort-amount-up"></i></button>
                        </div><br>
                        <div class="col-sm-5 text-start">
                            <button id="filter" class="bg-black text-white" @click="priceHtoL">
                                <i class="fas fa-sort-amount-down"></i></button>
                        </div>
                    </div>
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
        priceHtoL() {
            const price = this.$store.state.paintings;
            price.sort((a, b) => {
                if (a.price < b.price) return -1;
                {
                }
            });
        },
        priceLtoH() {
            const price = this.$store.state.paintings;
            price.sort((b, a) => {
                if (a.price < b.price) return -1;
                {
                }
            });
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

   
button {
        margin-top: 1rem;
        /* padding: 1rem; */
        /* width: 5rem; */
        border: 1px solid #e8e8e8;
    } 
#search{
    padding: 1rem;
    margin-top: -5rem;
        width: 90%!important;
}
    #filter{
        /* width: 110%!important; */
        margin-bottom: 2rem;
        padding: 1rem;
        /* margin-right: 10rem!important; */
    }
a {
    text-decoration: none;
    color: white;
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
    /* min-height: 42rem; */

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


.card {
    height: 46rem;
    width: 40rem;
    /* margin-bottom: 4rem; */
    padding: 1rem;
    padding-bottom: 1rem;
    /* border: 1px solid #e8e8e8; */
    /* padding-top: 1rem; */
}

h5 {
    padding-top: 1rem;
}

@media only screen and (max-width: 500px) {
    h5 {
    padding-top: 1rem;
    font-size: 1rem;
}
    img{
        height: 20rem!important;
        width: 100!important;
    }
    ::placeholder {
        text-align: center;
        color: white;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .card {
        margin-bottom: -5rem;
        padding: 1rem;
        
        /* padding-bottom: 3rem; */
        /* border: 1px solid #e8e8e8; */
        /* padding-top: 1rem; */
    }

    input {
        position: relative;
        /* bottom: 5rem; */
        padding: 1rem;
        /* width: 5rem; */
        border: 1px solid #e8e8e8;
    }

    button {
        position: relative;
        bottom: 5rem;
        padding: 1rem;
        width: 5rem;
        border: 1px solid #e8e8e8;
    }

    #search{
        position: relative;
        bottom: 14rem;
        width: 90%!important;
        margin-bottom: 2rem;
    }
    #filter{
        position: relative;
        bottom: 14rem;
        width: 100%!important;
        margin-bottom: 2rem;
    }

.card{
    position: relative;
    bottom: 13rem;
}


}


@media only screen and (max-width: 1026px) {
    ::placeholder {
        text-align: center;
        color: white;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .card {
        /* padding: 4rem; */
        /* border: 2px solid white; */
        min-height: 42rem;
    }

    .card {
        /* margin-bottom: 4rem; */
        padding: 1rem;
        /* padding-bottom: 3rem; */
        /* border: 1px solid #e8e8e8; */
        /* padding-top: 1rem; */
    }

    input {
        position: relative;
        bottom: 5rem;
        padding: 1rem;
        width: 5rem;
        /* border: 1px solid #e8e8e8; */
    }

    button {
        position: relative;
        bottom: 5rem;
        padding: 1rem;
        width: 5rem;
        /* border: 1px solid #e8e8e8; */
    }



}
</style>