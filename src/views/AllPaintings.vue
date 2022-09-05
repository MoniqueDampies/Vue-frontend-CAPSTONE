<template>
    
    <div class="headerImage">
        <img src="https://i.postimg.cc/wjCFSFCw/pexels-pixabay-159862.jpg">
    </div>
    
    <div class="main">
        <h1 class="text-center">ALL PAINTINGS PAGE</h1>
    <PaintingCard/>
    </div>
</template>

<script>
import PaintingCard from '@/components/PaintingCard.vue';
export default {
    name: 'Paintings',
    components: {
        PaintingCard
    },
    

}
</script>

<style scoped>
    .main{
    z-index: 1;
    position: relative;
    top: 5rem;
    margin-top: -54rem;
}

h1{
    position: relative;
    bottom: 3rem;
}

img {
    width: 98rem !important;
    left: 1rem;
    z-index: -1;
}
</style>