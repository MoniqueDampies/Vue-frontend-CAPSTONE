<template>

    <div class="headerImage" id="imgbg">
        <img src="https://i.postimg.cc/wjCFSFCw/pexels-pixabay-159862.jpg">
    </div>

    <div class="main">
        <h1 class="text-center">ALL PAINTINGS PAGE</h1>
        <PaintingCard />
    </div>
    <Footer id="footer" />
</template>

<script>
import PaintingCard from '@/components/PaintingCard.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'Paintings',
    components: {
        PaintingCard, Footer
    },


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
    /* position: relative; */
    min-height: 100vh;
}

h1 {
    position: relative;
    bottom: 6rem;
}

img {
    width: 100rem !important;
    position: relative;
    height: 63rem;
    /* bottom: 8rem; */
    /* left: 1rem; */
    z-index: -1;
}
</style>