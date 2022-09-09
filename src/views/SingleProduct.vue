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
                    <button @click="addCart" class="btn ">Add to Cart</button>
                    <button type="button" class="btn buynow ">
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
        </div>
    </section>

    <div v-else>
        <Loader />
    </div>
    <footer>
        <Footer id="footer" /></footer>
</template>
<script>
import Loader from '@/components/Loader.vue';
import Footer from '@/components/Footer.vue';
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
        Loader, Footer
    }
};
</script>

<style scoped>
section {
    position: relative;
    top: -6rem;
}
#footer {
    position: relative;
    bottom: 10rem;
    padding-top: 16rem;
    z-index: -5;
}
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

button {
    position: relative;
    top: 2rem;
    /* left: 0.5rem; */
    margin: 0 auto;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    display: block;
    background-color: black;
    border: 1px solid white;
    color: #ffffff;
    font-weight: 400;
    width: 100%;
    /* border-radius: 2px; */
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

button:hover {
    background-color: #ffffff!important;
    color: #000000!important;
    border: 1px solid black!important;
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
    footer{

    }
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
        margin-left: 6rem;
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


}
@media only screen and (max-width: 1000px) {
    .desc-box {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 2rem;
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        position: relative;
        top: 2.3rem;
        /* margin-right: 3rem; */
        /* position: relative;
        left: 0.5rem; */
        /* border: 1px solid white; */

    }


    .desc {
        /* text-align: left; */
        font-size: 1.4rem;
        letter-spacing: 1px;
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        /* position: relative; */
        /* left: -2rem; */
        text-transform: uppercase;
        /* border: 5px solid rgb(255, 78, 78); */
        /* padding: 20px; */
    }


    .sec-box {
        /* border: 5px solid rgb(120, 53, 53); */
        position: relative;
        width: 100%;
        left: 0.1rem;
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-right: 15rem;
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
        /* position: relative; */
        /* right: 1rem; */
        height: 36rem;
        width: 39rem !important;
        display: block;
        margin-right: auto;
        margin-left: auto;
    }


    button {
        /* color: #090909; */
        display: block;
        margin-right: auto;
        margin-left: auto;
        padding: 0.7em 1.7em;
        font-size: 18px;
        border-radius: 0.5em;
        /* background: #e8e8e8; */
        border: 1px solid #e8e8e8;
        transition: all .3s;
        /* box-shadow: 6px 6px 12px #c5c5c5,
        -6px -6px 12px #ffffff; */
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

  

    img {
        object-fit: cover;
        /* border: 1px solid red; */
        /* height: 27rem;
    width: 37rem; */
        /* align-items: center; */
    }

}

@media only screen and (max-width: 900px) {
    .desc-box {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 2rem;
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        position: relative;
        top: 2.3rem;
        /* margin-right: 3rem; */
        position: relative;
        left: 0.5rem;
        /* border: 1px solid white; */

    }


    .desc {
        /* text-align: left; */
        font-size: 1.4rem;
        letter-spacing: 1px;
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        /* position: relative; */
        /* left: -2rem; */
        text-transform: uppercase;
        /* border: 5px solid rgb(255, 78, 78); */
        /* padding: 20px; */
    }


    .sec-box {
        /* border: 5px solid rgb(120, 53, 53); */
        position: relative;
        width: 100%;
        left: 0.1rem;
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-right: 15rem;
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
        /* position: relative; */
        /* right: 1rem; */
        height: 36rem;
        width: 39rem !important;
        display: block;
        margin-right: auto;
        margin-left: auto;
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

  

    img {
        object-fit: cover;
        /* border: 1px solid red; */
        /* height: 27rem;
    width: 37rem; */
        /* align-items: center; */
    }

}

@media only screen and (max-width: 777px) {
    .desc-box {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 2rem;
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        position: relative;
        top: 2.3rem;
        /* margin-right: 3rem; */
        /* position: relative;
        left: 0.5rem; */
        /* border: 1px solid white; */

    }


    .desc {
        /* text-align: left; */
        font-size: 1.4rem;
        letter-spacing: 1px;
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        /* position: relative; */
        /* left: -2rem; */
        text-transform: uppercase;
        /* border: 5px solid rgb(255, 78, 78); */
        /* padding: 20px; */
    }


    .sec-box {
        /* border: 5px solid rgb(120, 53, 53); */
        /* position: relative; */
        width: 100%;
        left: 0.1rem;
        display: block;
        margin-right: auto;
        margin-left: auto;
        /* margin-right: 15rem; */
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

   

}

@media only screen and (max-width: 600px) {
    .desc-box {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 2rem;
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        position: relative;
        top: 2.3rem;
        /* margin-right: 3rem; */
        position: relative;
        left: 0.5rem;
        /* border: 1px solid white; */

    }


    .desc {
        /* text-align: left; */
        font-size: 1.4rem;
        letter-spacing: 1px;
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        /* position: relative; */
        /* left: -2rem; */
        text-transform: uppercase;
        /* border: 5px solid rgb(255, 78, 78); */
        /* padding: 20px; */
    }


    .sec-box {
        /* border: 5px solid rgb(120, 53, 53); */
        position: relative;
        width: 35rem;
        left: 0.1rem;
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-right: 15rem;
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
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        position: relative;
        /* top: 2.3rem; */
        /* margin-right: 3rem; */
        /* left: -1rem; */
        /* border: 1px solid white; */

    }


    .desc {
        /* text-align: left; */
        font-size: 1.4rem;
        letter-spacing: 1px;
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        /* position: relative; */
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
        margin-right: 15rem;
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

@media only screen and (max-width: 400px) {

    .desc-box {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 2rem;
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        position: relative;
        top: 2.3rem;
        /* margin-right: 3rem; */
        position: relative;
        left: -0.3rem;
        /* border: 1px solid white; */

    }


    .desc {
        /* text-align: left; */
        font-size: 1.4rem;
        letter-spacing: 1px;
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        /* position: relative; */
        /* left: -2rem; */
        text-transform: uppercase;
        /* border: 5px solid rgb(255, 78, 78); */
        /* padding: 20px; */
    }


    .sec-box {
        /* border: 5px solid rgb(120, 53, 53); */
        position: relative;
        width: 35rem;
        left: 0.1rem;
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-right: 15rem;
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
        /* position: relative; */
        /* right: 1rem; */
        height: 29rem;
        width: 29rem !important;
        display: block;
        margin-right: auto;
        margin-left: auto;
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

    /* .card-body {
        border: 1px solid white;
        height: 25rem;
        width: 25rem;
    } */

    img {
        object-fit: cover;
        /* border: 1px solid red; */
        /* height: 25rem;
    width: 25rem; */
        /* align-items: center; */
    }



}

@media only screen and (max-width: 320px) {
    .desc-box {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 2rem;
        width: 100%;
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
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        /* left: 0.1rem; */
        text-transform: uppercase;
        /* border: 5px solid rgb(255, 78, 78); */
        padding: 20px;
    }


    .sec-box {
        /* border: 5px solid rgb(120, 53, 53); */
        position: relative;
        width: 100%;
        /* left: 0.1rem; */
        display: block;
        margin-right: auto;
        margin-left: auto;
        /* margin-right: 15rem; */
        text-align: center;
        top: 1rem;
        /* padding: 1rem; */
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


    .picture {
        position: relative;
        right: 1rem;
        height: 10rem;
        width: 20rem !important;
        display: block;
        margin-right: auto;
        margin-left: auto;
    }
}


</style>