<template>
    <div class="container w-100">
        <div class="row w-100">
            <nav class="navbar container navbar-fixed-top">
                <a class="navbar-brand" href="/landing"><img class="img-fluid w-25" src="https://i.postimg.cc/FKcn9MZw/M-letter-removebg-preview.png"></a>
        <router-link to="/">HOME</router-link> 
        <router-link to="/allproducts">SHOP ART SUPPLIES</router-link>
        <router-link to="/allpaintings">SHOP ARTWORKS</router-link>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/contact">CONTACT US</router-link>
        <router-link to="/admin">ADMIN</router-link>
        <router-link to="/register">REGISTER</router-link>
        <router-link to="/login">LOGIN</router-link>
        <button class="btn btn-black text-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">CART</button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <!-- <h5 class="text-black" id="offcanvasRightLabel">CART</h5> -->
                <button type="button" class="btn-close text-black text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body text-black">
                <h5>Your cart is currently empty</h5>
            </div>
        </div>
    </nav>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Jomolhari&display=swap');

nav {
    padding: 30px;
    text-align: center;
    object-fit: fill;
    position: relative;
    right: 10rem;
    bottom: 2.3rem;
    font-family: 'Jomolhari', serif;

}

.container{
    background-color: white;
    color: black;
    z-index: 1;
    max-width: 96rem!important;
    max-height: 6rem!important;
}

a {
    font-weight: bold;
    color: black;
    text-decoration: none;
}

a:hover {
    color: black;
}

nav a.router-link-exact-active {
    color: #585c5f;
    font-weight: 600;
}

.navbar-brand{
    width: 20rem;
    padding: 1rem;
    z-index: -1;
    position: relative;
    left: 5rem;
}

</style>