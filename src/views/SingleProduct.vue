<template>
    <section v-if="product">
        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-4">
                    <img class="mt-5 w-100 picture " :src="product.img" />
                </div>
                <div class="sec-box mt-4  col-lg-4">
                    <h3 class="title">
                        {{ product.title }}
                    </h3>
                    <h3 class="price h2 p-1 pt-4">
                        R {{ product.price }}.00
                    </h3>
                    <!-- <button type="button" class="btn w-50 buynow  btn-black text-white">
                        COUNTER
                    </button> -->
                    <button type="button" class="btn w-75 addtocart  btn-black text-white">
                        Add to Cart
                    </button>
                    <button type="button" class="btn w-75 buynow  btn-black text-white">
                        Buy Now
                    </button>
                </div>
                <div class="col-lg-4 ">
                    <dl class="desc-box  p-1">

                        <dd class="h4 desc">
                            {{product.description}}
                        </dd>
                        <dd class="h5 py-4 desc mx-2">
                            category: {{product.category}}
                        </dd>

                    </dl>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-12">
                    <h3 class="text-center sec-title">
                        YOU MAY ALSO LIKE
                    </h3>
                </div>
            </div>
            <div class="container bg-black">
                <div v-if="suggestedproducts" class="row">

                    <div v-for="(product,index) in suggestedproducts" :key="index"
                        class="card row mx-2 text-center bg-black">
                        <div class="card-body">
                            <div class="bg-black card-info">
                                <img :src="product.img" class="card-image img-fluid" alt="image" />
                                <h5 class="card-title">{{ product.title }}</h5>
                                <h5 class="card-category">{{ product.category }}</h5>
                                <h5>R {{ product.price }}.00</h5>
                                <router-link :to="{
                                    name: 'singleproduct',
                                    params: { id: product.id },
                                }">
                                    <div>
                                        <button @click="addCart" class="btn btn-black text-white text-black">Add to
                                            Cart</button>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
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
            return this.$store.state.product;
        },
        user() {
            return this.$store.state.user;
        }
    },
    mounted() {
        this.$store.dispatch("getSingleProducts", this.$route.params.id);
        this.$store.commit("setSingleProduct", null)
        // this.$store.dispatch('getUser');
    },
    methods: {
        addCart() {
            const payload = {
                id: this.product.id
            }
            this.$store.dispatch("addCart", payload)
        }
    },
    components: {
        Loader
    }
};
</script>

<style scoped>
.desc-box {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2rem;
    /* width: 30rem; */
    position: relative;
    top: 2.3rem;
    left: 2rem;
    /* border: 1px solid white; */

}


.desc {
    /* text-align: left; */
    font-size: 1.4rem;
    letter-spacing: 1px;
    width: 29rem;
    text-transform: uppercase;
    /* border: 5px solid rgb(255, 78, 78); */
    padding: 10px;
}


.sec-box {
    /* border: 5px solid rgb(120, 53, 53); */
    position: relative;
    width: 25rem;
    left: 2rem;
    text-align: center;
    top: 1rem;
    padding: 1rem;
    letter-spacing: 3.5px;
    /* border: 1px solid white; */
}

.btn {
    display: block;
    margin: auto;
    padding: 1.1rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    border-radius: 0%;
}

.title {
    font-size: 2.1rem;
    text-align: center;
}

.picture {
    position: relative;
    /* right: 2rem; */
    height: 27rem;
    width: 27rem !important;
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


/* .card {
    display: flex;
    border: 1px solid #e8e8e8;
    justify-content: center;
    align-items: center;
    width: 25rem;
    position: relative;
    left: 28rem;
} */

.card-title {
    padding-bottom: 1px;
}

.card-body {
    border: 1px solid white;
    height: 25rem;
    width: 25rem;
}

img {
    object-fit: cover;
    /* border: 1px solid red; */
    /* height: 25rem;
    width: 25rem; */
    /* align-items: center; */
}

/*///////////////////////////// MEDIA QUERIES //////////////////////////////////////*/
@media only screen and (max-width: 1075px) {
    .desc-box {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2rem;
    width: 50rem;
    position: relative;
    top: 2.3rem;
    /* margin-right: 3rem; */
    left: -1rem;
    /* border: 1px solid white; */

}


.desc {
    /* text-align: left; */
    font-size: 1.4rem;
    letter-spacing: 1px;
    width: 29rem;
    text-transform: uppercase;
    /* border: 5px solid rgb(255, 78, 78); */
    padding: 10px;
}


.sec-box {
    /* border: 5px solid rgb(120, 53, 53); */
    position: relative;
    width: 25rem;
    left: 5rem;
    margin-left: 6rem ;
    text-align: center;
    top: 4rem;
    padding: 1rem;
    letter-spacing: 3.5px;
    /* border: 1px solid white; */
}

.btn {
    display: block;
    margin: auto;
    padding: 1.1rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    border-radius: 0%;
}

.title {
    font-size: 2.1rem;
    text-align: center;
}

.picture {
    position: relative;
    /* right: 2rem; */
    height: 30rem;
    width: 30rem !important;
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


/* .card {
    display: flex;
    border: 1px solid #e8e8e8;
    justify-content: center;
    align-items: center;
    width: 25rem;
    position: relative;
    left: 28rem;
} */

.card-title {
    padding-bottom: 1px;
}

.card-body {
    border: 1px solid white;
    height: 25rem;
    width: 25rem;
}

img {
    object-fit: cover;
    /* border: 1px solid red; */
    /* height: 25rem;
    width: 25rem; */
    /* align-items: center; */
}

}

@media only screen and (max-width: 994px) {
    .desc-box {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2rem;
    width: 39rem;
    display: block;
    margin-left: auto;
    margin-right: auto;

    position: relative;
    top: 2.3rem;
    /* margin-right: 3rem; */
    /* left: -1rem; */
    /* border: 1px solid white; */

}


.desc {
    /* text-align: left; */
    font-size: 1.4rem;
    letter-spacing: 1px;
    width: 39rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-transform: uppercase;
    /* border: 5px solid rgb(255, 78, 78); */
    padding: 20px;
}


.sec-box {
    /* border: 5px solid rgb(120, 53, 53); */
    /* position: relative; */
    width: 35rem;
    /* left: 5rem; */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-right: 10rem ;
    text-align: center;
    top: 1rem;
    padding: 1rem;
    /* margin-bottom: 5rem; */
    letter-spacing: 3.5px;
    /* border: 1px solid white; */
}

.btn {
    display: block;
    margin: auto;
    padding: 1.1rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    border-radius: 0%;
}

.title {
    font-size: 2.1rem;
    text-align: center;
}

.picture {
    position: relative;
    right: -2rem;
    height: 40rem;
    width: 40rem !important;
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


/* .card {
    display: flex;
    border: 1px solid #e8e8e8;
    justify-content: center;
    align-items: center;
    width: 25rem;
    position: relative;
    left: 28rem;
} */

.card-title {
    padding-bottom: 1px;
}

.card-body {
    border: 1px solid white;
    height: 25rem;
    width: 25rem;
}

img {
    object-fit: cover;
    /* border: 1px solid red; */
    /* height: 25rem;
    width: 25rem; */
    /* align-items: center; */
}
}

@media only screen and (max-width: 600px) {
    .desc-box {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2rem;
    width: 39rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
        text-align: center;
    position: relative;
    top: 2.3rem;
    /* margin-right: 3rem; */
    /* left: -1rem; */
    /* border: 1px solid white; */

}


.desc {
    /* text-align: left; */
    font-size: 1.4rem;
    letter-spacing: 1px;
    width: 30rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    left: -2rem;
    text-transform: uppercase;
    /* border: 5px solid rgb(255, 78, 78); */
    padding: 20px;
}


.sec-box {
    /* border: 5px solid rgb(120, 53, 53); */
    position: relative;
    width: 35rem;
    left: 0.1rem;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-right: 15rem ;
    text-align: center;
    top: 1rem;
    padding: 1rem;
    /* margin-bottom: 5rem; */
    letter-spacing: 3.5px;
    /* border: 1px solid white; */
}

.btn {
    display: block;
    margin: auto;
    padding: 1.1rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    border-radius: 0%;
}

.title {
    font-size: 2.1rem;
    text-align: center;
}

.picture {
    position: relative;
    right: 1rem;
    height: 34rem;
    width: 34rem !important;
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


/* .card {
    display: flex;
    border: 1px solid #e8e8e8;
    justify-content: center;
    align-items: center;
    width: 25rem;
    position: relative;
    left: 28rem;
} */

.card-title {
    padding-bottom: 1px;
}

.card-body {
    border: 1px solid white;
    height: 25rem;
    width: 25rem;
}

img {
    object-fit: cover;
    /* border: 1px solid red; */
    /* height: 25rem;
    width: 25rem; */
    /* align-items: center; */
}

}

@media only screen and (max-width: 500px) {
    .desc-box {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2rem;
    width: 30rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    position: relative;
    top: 2.3rem;
    /* margin-right: 3rem; */
    /* left: -1rem; */
    /* border: 1px solid white; */

}


.desc {
    /* text-align: left; */
    font-size: 1.4rem;
    letter-spacing: 1px;
    width: 30rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    left: 0.1rem;
    text-transform: uppercase;
    /* border: 5px solid rgb(255, 78, 78); */
    padding: 20px;
}


.sec-box {
    /* border: 5px solid rgb(120, 53, 53); */
    position: relative;
    width: 35rem;
    left: 0.1rem;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-right: 15rem ;
    text-align: center;
    top: 1rem;
    padding: 1rem;
    /* margin-bottom: 5rem; */
    letter-spacing: 3.5px;
    /* border: 1px solid white; */
}

.btn {
    display: block;
    margin: auto;
    padding: 1.1rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    border-radius: 0%;
}

.title {
    font-size: 2.1rem;
    text-align: center;
}

.picture {
    position: relative;
    right: 1rem;
    height: 30rem;
    width: 30rem !important;
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


/* .card {
    display: flex;
    border: 1px solid #e8e8e8;
    justify-content: center;
    align-items: center;
    width: 25rem;
    position: relative;
    left: 28rem;
} */

.card-title {
    padding-bottom: 1px;
}

.card-body {
    border: 1px solid white;
    height: 25rem;
    width: 25rem;
}

img {
    object-fit: cover;
    /* border: 1px solid red; */
    /* height: 25rem;
    width: 25rem; */
    /* align-items: center; */
}

}

@media only screen and (max-width: 470px) {

    .desc-box {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2rem;
    width: 27rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    position: relative;
    top: 2.3rem;
    /* margin-right: 3rem; */
    /* left: -1rem; */
    /* border: 1px solid white; */

}


.desc {
    /* text-align: left; */
    font-size: 1.4rem;
    letter-spacing: 1px;
    /* width: 30rem; */
    width: 27rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    left: 0.1rem;
    text-transform: uppercase;
    /* border: 5px solid rgb(255, 78, 78); */
    padding: 20px;
}

}

@media only screen and (max-width: 320px) {
    .desc-box {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2rem;
    width: 30rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    position: relative;
    top: 2.3rem;
    /* margin-right: 3rem; */
    /* left: -1rem; */
    /* border: 1px solid white; */

}


.desc {
    /* text-align: left; */
    font-size: 1.4rem;
    letter-spacing: 1px;
    width: 30rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    left: 0.1rem;
    text-transform: uppercase;
    /* border: 5px solid rgb(255, 78, 78); */
    padding: 20px;
}


.sec-box {
    /* border: 5px solid rgb(120, 53, 53); */
    position: relative;
    width: 35rem;
    left: 0.1rem;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-right: 15rem ;
    text-align: center;
    top: 1rem;
    padding: 1rem;
    /* margin-bottom: 5rem; */
    letter-spacing: 3.5px;
    /* border: 1px solid white; */
}

.btn {
    display: block;
    margin: auto;
    padding: 1.1rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    border-radius: 0%;
}

.title {
    font-size: 2.1rem;
    text-align: center;
}

.picture {
    position: relative;
    right: -1rem;
    margin-left: 1rem;
    height: 20rem !important;
    width: 10rem !important;
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


/* .card {
    display: flex;
    border: 1px solid #e8e8e8;
    justify-content: center;
    align-items: center;
    width: 25rem;
    position: relative;
    left: 28rem;
} */

.card-title {
    padding-bottom: 1px;
}

.card-body {
    border: 1px solid white;
    height: 25rem;
    width: 25rem;
}

img {
    object-fit: cover;
    /* border: 1px solid red; */
    /* height: 25rem;
    width: 25rem; */
    /* align-items: center; */
}
}

@media only screen and (max-width: 372px) {
    .desc-box {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2rem;
    width: 30rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    position: relative;
    top: 2.3rem;
    /* margin-right: 3rem; */
    /* left: -1rem; */
    /* border: 1px solid white; */

}


.desc {
    /* text-align: left; */
    font-size: 1.4rem;
    letter-spacing: 1px;
    width: 30rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    left: 0.1rem;
    text-transform: uppercase;
    /* border: 5px solid rgb(255, 78, 78); */
    padding: 20px;
}


.sec-box {
    /* border: 5px solid rgb(120, 53, 53); */
    position: relative;
    width: 35rem;
    left: 0.1rem;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-right: 15rem ;
    text-align: center;
    top: 1rem;
    padding: 1rem;
    /* margin-bottom: 5rem; */
    letter-spacing: 3.5px;
    /* border: 1px solid white; */
}

.btn {
    display: block;
    margin: auto;
    padding: 1.1rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    border-radius: 0%;
}

.title {
    font-size: 2.1rem;
    text-align: center;
}

.picture {
    position: relative;
    right: 1rem;
    height: 10rem;
    width: 10rem !important;
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


/* .card {
    display: flex;
    border: 1px solid #e8e8e8;
    justify-content: center;
    align-items: center;
    width: 25rem;
    position: relative;
    left: 28rem;
} */

.card-title {
    padding-bottom: 1px;
}

.card-body {
    border: 1px solid white;
    height: 25rem;
    width: 25rem;
}

img {
    object-fit: cover;
    /* border: 1px solid red; */
    /* height: 25rem;
    width: 25rem; */
    /* align-items: center; */
}
}












@media only screen and (max-width: 300px),
(max-width: 375px) {

    .desc-box {
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 2rem;
        width: 31rem;
        position: relative;
        top: 2.3rem;
        left: 1rem;
        border: none;
        border: 1px solid rgb(255, 178, 178);

    }


    .desc {
        text-align: left;
        font-size: 1.4rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        /* border: 1px solid white; */
    }


    .sec-box {
        /* border: 5px solid white; */
        position: relative;
        width: 29rem;
        left: 6rem;
        top: 1rem;
        /* padding: 1rem; */
        letter-spacing: 3.5px;
    }

    .btn {
        display: block;
        margin: auto;
        padding: 1.1rem;
        margin-bottom: 1rem;
        margin-top: 2rem;
        border-radius: 0%;
    }

    .title {
        /* border: 1px solid white; */
        /* font-size: 2.8rem;
        width: 29rem;
        position: relative;
        left: -6rem; */
    }

    .picture {
        position: relative;
        right: -0.2rem;
        height: 29rem;
        /* border: 4px solid rgb(177, 28, 28); */
        width: 29rem !important;
    }

    .price {
        font-size: 2.3rem;
    }

    .sec-title {
        position: relative;
        right: -4rem;
        width: 21rem;
        font-size: 1.7rem;

    }


    button {
        /* color: #090909; */
        padding: 0.7em 1.7em;
        font-size: 29px;
        min-width: 10rem;
        text-decoration: none !important;
        border-radius: 0.5em;
        /* background: #e8e8e8; */
        border: 1px solid white;
        /* transition: all .3s; */
        /* box-shadow: 6px 6px 12px #c5c5c5,
        -6px -6px 12px #ffffff; */
    }

    button:active {
        color: #666;
        box-shadow: inset 4px 4px 12px #c5c5c5,
            inset -4px -4px 12px #ffffff;
    }

    nav {
        display: none;
    }


    /* .card {
    display: flex;
    border: 1px solid #e8e8e8;
    justify-content: center;
    align-items: center;
    width: 25rem;
    position: relative;
    left: 28rem;
} */

    .card-title {
        padding-bottom: 5px;
    }

    .card-body {
        /* border: 5px solid white; */
        height: 50rem;
        position: relative;
        /* left: -3rem; */
        /* font-size: 2rem; */
        margin-top: 4rem;
        min-width: 32rem;
        border: none;
    }

    img {
        object-fit: cover;
        /* border: 1px solid red; */
        height: 31rem;
        width: 29rem;
        padding: 1rem;
        /* align-items: center; */
    }

    .card-info h5 {
        font-size: 1.6rem;
        letter-spacing: 1px;
    }
}

@media only screen and (max-width: 400px) {
    .desc-box {
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 2rem;
        width: 30rem;
        position: relative;
        top: 2.3rem;
        left: -0.3rem;
        border: none;
        /* border: 1px solid rgb(255, 178, 178); */

    }


    .desc {
        text-align: left;
        font-size: 1.4rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        /* border: 1px solid white; */
    }


    .sec-box {
        /* border: 5px solid white; */
        position: relative;
        width: 29rem;
        left: 6rem;
        top: 1rem;
        /* padding: 1rem; */
        letter-spacing: 3.5px;
    }

    .btn {
        display: block;
        margin: auto;
        padding: 1.1rem;
        margin-bottom: 1rem;
        margin-top: 2rem;
        border-radius: 0%;
    }

    .title {
        /* border: 1px solid white; */
        font-size: 2.8rem;
        width: 29rem;
        position: relative;
        left: -6rem;
    }

    .picture {
        position: relative;
        right: -0.2rem;
        height: 29rem;
        /* border: 4px solid rgb(177, 28, 28); */
        width: 29rem !important;
    }

    .price {
        font-size: 2.3rem;
    }

    .sec-title {
        position: relative;
        right: -4rem;
        width: 21rem;
        font-size: 1.7rem;

    }


    button {
        /* color: #090909; */
        padding: 0.7em 1.7em;
        font-size: 29px;
        min-width: 10rem;
        text-decoration: none !important;
        border-radius: 0.5em;
        /* background: #e8e8e8; */
        border: 1px solid white;
        /* transition: all .3s; */
        /* box-shadow: 6px 6px 12px #c5c5c5,
        -6px -6px 12px #ffffff; */
    }

    button:active {
        color: #666;
        box-shadow: inset 4px 4px 12px #c5c5c5,
            inset -4px -4px 12px #ffffff;
    }

    nav {
        display: none;
    }


    /* .card {
    display: flex;
    border: 1px solid #e8e8e8;
    justify-content: center;
    align-items: center;
    width: 25rem;
    position: relative;
    left: 28rem;
} */

    .card-title {
        padding-bottom: 5px;
    }

    .card-body {
        /* border: 5px solid white; */
        height: 50rem;
        position: relative;
        left: -3rem;
        /* font-size: 2rem; */
        margin-top: 4rem;
        min-width: 32rem;
        border: none;
    }

    img {
        object-fit: cover;
        /* border: 1px solid red; */
        height: 31rem;
        width: 29rem;
        padding: 1rem;
        /* align-items: center; */
    }

    .card-info h5 {
        font-size: 1.6rem;
        letter-spacing: 1px;
    }
}
</style>