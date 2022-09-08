<template>

    <div class="headerImage" id="imgbg">
        <img src="https://i.postimg.cc/d35GkSXm/vienna-1652804-1920.jpg">
    </div>
    <div class="main">
        <h1 class="text-center">ALL PRODUCTS PAGE</h1>
        <ProductCard />
    </div>
    
    <Footer id="footer" />
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'allproducts',
    components: {
        ProductCard, Footer
    }
}
</script>

<style scoped>
#footer {
    position: relative;
    bottom: 10rem;
    padding-top: 16rem;
    z-index: -5;
}

#imgbg {
    /* background-image: url('https://i.postimg.cc/d35GkSXm/vienna-1652804-1920.jpg'); */
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    /* background-position: center bottom; */
    /* width: 110%;
  height: 100%; */
    z-index: -10;
    overflow: hidden;
    animation: 50s scale 1ms linear infinite;
    -webkit-animation: 50s slide 5ms ease-in-out infinite;
    /* overflow:hidden; */
    backface-visibility: hidden;
}

@-webkit-keyframes scale {
    0% {
        transform: scale(1)
    }

    50% {
        transform: scale(1.5)
    }

    100% {
        transform: scale(1)
    }
}

@keyframes slide {
    0% {
        transform: translate3d(0, 0, 0) scale(1);
    }

    50% {
        transform: translate3d(-100px, 0, 0) scale(1.2);
    }

    100% {
        transform: translate3d(0, 0, 0) scale(1);
    }

}

#footer{
    position: relative;
    bottom: 10rem;
    padding-top: 16rem;
    z-index: -5;
} 

.headerImage {
    position: relative;
    bottom: 10rem;
    /* right: 2rem; */
}

.main {
    z-index: 1;
    position: relative;
    top: 5rem;
    margin-top: -60rem;
    min-height: 100vh;
}

h1 {
    position: relative;
    bottom: 6rem;
}

img {
    width: 100rem !important;
    /* left: 1rem; */
    z-index: -1;
    position: relative;
    /* top: 2rem; */
    height: 63rem;
}

@media only screen and (max-width: 300px),
(max-width: 500px) {
    #imgbg {
        overflow: hidden;
        animation: 60s scale 3ms linear infinite;
        -webkit-animation: 60s slide 3ms ease-in-out infinite;
        /* overflow:hidden; */
        backface-visibility: hidden;
    }

    @-webkit-keyframes scale {
        0% {
            transform: scale(1)
        }

        50% {
            transform: scale(1.1)
        }

        100% {
            transform: scale(1)
        }
    }

    @keyframes slide {
        0% {
            transform: translate3d(0, 0, 0) scale(1);
        }

        50% {
            transform: translate3d(-10px, 0, 0) scale(1.2);
        }

        100% {
            transform: translate3d(0, 0, 0) scale(1);
        }

    }

    .headerImage {
        position: relative;
        bottom: 5rem;
        z-index: -1;
        width: 21rem;
        left: -1rem;
    }

    .main {
        z-index: 1;
        position: relative;
        /* top: 5rem; */
        /* margin-top: -60rem; */
    }

    /* all products page title */
    h1 {
        position: relative;
        bottom: 1rem;
    }

    img {
        width: 98rem !important;
        /* left: 1rem; */
        z-index: -1;
        position: relative;
        /* top: 2rem; */
        height: 63rem;
    }
}
</style>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
You have no unread notifications