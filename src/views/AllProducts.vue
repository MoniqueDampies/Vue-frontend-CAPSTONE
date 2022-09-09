<template>

    <div class="headerImage" id="imgbg">
        <img src="https://i.postimg.cc/d35GkSXm/vienna-1652804-1920.jpg">
    </div>
    <div class="main">
        <h1 class="header-text text-center">ALL PRODUCTS PAGE</h1>
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

h1{
    font-size: 3.2rem;
}
#footer {
    position: relative;
    bottom: 10rem;
    padding-top: 16rem;
    z-index: -5;
}
.header-text {
    display: block;
    /* margin-top: -1.9rem; */
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
    margin-top: 2.8rem;
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


.headerImage {
    position: relative;
    bottom: 10rem;
    z-index: -5;
    /* right: 2rem; */
}

.main {
    z-index: 1;
    /* position: relative; */
    /* top: 5rem; */
    margin-top: -50rem;
    /* min-height: 100vh; */
}

h1 {
    position: relative;
    bottom: 5rem;
}

img {
    width: 100%;
    /* left: 1rem; */
    z-index: -1;
    /* position: relative; */
    /* top: 2rem; */
    /* height: 63rem; */
}

@media only screen and (max-width: 1025px){
    h1{
    font-size: 3.2rem;
}
#footer {
    position: relative;
    bottom: 10rem;
    padding-top: 16rem;
    z-index: -5;
}
.header-text {
    display: block;
    margin-top: -1.9rem;
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
    margin-top: 5rem;
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


.headerImage {
    position: relative;
    bottom: 21rem;
    z-index: -5;
    /* right: 2rem; */
}

.main {
    z-index: 1;
    /* position: relative; */
    /* top: 5rem; */
    margin-top: -40rem;
    /* min-height: 100vh; */
}

h1 {
    position: relative;
    bottom: 1rem;
}

img {
    width: 100%;
    /* left: 1rem; */
    z-index: -1;
    /* position: relative; */
    /* top: 2rem; */
    /* height: 63rem; */
}

}
@media only screen and (max-width: 900px){

}
@media only screen and (max-width: 800px){

    h1{
    font-size: 2rem;
}
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
    margin-top: 5rem;
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
        transform: scale(1.2)
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
    bottom: 21rem;
    z-index: -5;
    /* right: 2rem; */
}

.main {
    z-index: 1;
    /* position: relative; */
    /* top: 5rem; */
    margin-top: -30rem;
    /* min-height: 100vh; */
}

h1 {
    position: relative;
    bottom: -1rem;
}

img {
    width: 100%;
    /* left: 1rem; */
    z-index: -1;
    /* position: relative; */
    /* top: 2rem; */
    /* height: 63rem; */
}
}
@media only screen and (max-width: 700px){

}
@media only screen and (max-width: 600px){

}
@media only screen and (max-width: 500px){
  h1{
    font-size: 2rem;
}
#footer {
    position: relative;
    bottom: 10rem;
    padding-top: 16rem;
    z-index: -5;
}


#imgbg {
    background-image: url('https://i.postimg.cc/d35GkSXm/vienna-1652804-1920.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    width: 110%;
  height: 100%;
    z-index: -10;
    overflow: hidden;
    margin-top: 5rem;
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
        transform: scale(1.2)
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
        transform: translate3d(-50px, 0, 0) scale(1.2);
    }

    100% {
        transform: translate3d(0, 0, 0) scale(1);
    }

}


.headerImage {
    position: relative;
    bottom: 5rem;
    z-index: -5;
    /* right: 2rem; */
}

.main {
    z-index: 1;
    /* position: relative; */
    /* top: 5rem; */
    margin-top: -20rem;
    /* min-height: 100vh; */
}

h1 {
    position: relative;
    bottom: -1rem;
}

img {
    width: 100%;
    /* left: 1rem; */
    z-index: -1;
    position: relative;
    /* top: 2rem; */
    /* height: 63rem; */
}
}
@media only screen and (max-width: 400px){
  h1{
    font-size: 1.5rem;
}
#footer {
    position: relative;
    bottom: 10rem;
    padding-top: 16rem;
    z-index: -5;
}


#imgbg {
    background-image: url('https://i.postimg.cc/d35GkSXm/vienna-1652804-1920.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    width: 110%;
  /* height: 100%; */
    z-index: -10;
    overflow: hidden;
    margin-top: 5rem;
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
        transform: scale(1.2)
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
        transform: translate3d(-50px, 0, 0) scale(1.2);
    }

    100% {
        transform: translate3d(0, 0, 0) scale(1);
    }

}


.headerImage {
    position: relative;
    bottom: 5rem;
    z-index: -5;
    /* right: 2rem; */
}

.main {
    z-index: 1;
    /* position: relative; */
    /* top: 5rem; */
    margin-top: -20rem;
    /* min-height: 100vh; */
}

h1 {
    position: relative;
    bottom: -2rem;
}

img {
    width: 100%;
    /* left: 1rem; */
    z-index: -1;
    position: relative;
    /* top: 2rem; */
    /* height: 63rem; */
}
}

@media only screen and (max-width: 325px){
  h1{
    font-size: 1.5rem;
}
#footer {
    position: relative;
    bottom: 10rem;
    padding-top: 16rem;
    z-index: -5;
}


#imgbg {
    background-image: url('https://i.postimg.cc/d35GkSXm/vienna-1652804-1920.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    width: 110%;
  /* height: 100%; */
    z-index: -10;
    overflow: hidden;
    margin-top: 5rem;
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
        transform: scale(1.2)
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
        transform: translate3d(-50px, 0, 0) scale(1.2);
    }

    100% {
        transform: translate3d(0, 0, 0) scale(1);
    }

}


.headerImage {
    position: relative;
    bottom: 5rem;
    z-index: -5;
    /* right: 2rem; */
}

.main {
    z-index: 1;
    /* position: relative; */
    /* top: 5rem; */
    margin-top: -20rem;
    /* min-height: 100vh; */
}

h1 {
    position: relative;
    bottom: -4rem;
}

img {
    width: 100%;
    /* left: 1rem; */
    z-index: -1;
    position: relative;
    /* top: 2rem; */
    /* height: 63rem; */
}
}
</style>