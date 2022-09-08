<template>
     <div  id="bigNavbar" class="container w-100">
        <div class="row w-100">
            <nav class="navbar container navbar-fixed-top">
                <a class="navbar-brand" href="/home"><img class="img-fluid w-25"
                        src="https://i.postimg.cc/FKcn9MZw/M-letter-removebg-preview.png"></a>
                <router-link to="/">HOME</router-link>
                <router-link to="/allproducts">SHOP ART SUPPLIES</router-link>
                <router-link to="/allpaintings">SHOP ARTWORKS</router-link>
                 <router-link to="/about">ABOUT</router-link>
                <router-link to="/contact">CONTACT US</router-link> 
                <!-- admin table -->
                <div v-if="user">
                    <router-link v-if="user.isAdmin == 'True'" to="/admin">ADMIN</router-link>
                </div>
                <!-- admin table -->
                <router-link to="/register">REGISTER</router-link>
                <router-link to="/login">LOGIN</router-link>
                <router-link to="/account"><i class="fa-solid fa-user"></i></router-link>
                <div class="cart">
                        <cart id="cart" />
                </div>
            </nav>
        </div>
    </div>
    <div id="smallNavbar" class="container w-100">
        <div class="row w-100">
            <nav class="navbar  container navbar-fixed-top">
                <!-- button to open to offcanvas navbar -->
                <button class="btn btn-white text-black" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Navbar</button>
                <!--  offcanvas navbar -->
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                        <!--  button to close offcanvas navbar -->
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <!-- body of offcanvas navbar -->
                    <div id="nav-body" class="offcanvas-body text-center">
                        <router-link class="links" to="/">HOME</router-link> <br>
                        <router-link class="links" to="/allproducts">SHOP ART SUPPLIES</router-link><br>
                        <router-link class="links" to="/allpaintings">SHOP ARTWORKS</router-link><br>
                        <router-link class="links" to="/about">ABOUT</router-link><br>
                        <router-link class="links" to="/contact">CONTACT US</router-link><br>
                        <router-link class="links" to="/admin">ADMIN</router-link><br>
                        <router-link class="links" to="/register">REGISTER</router-link> <br>
                        <router-link class="links" to="/login">LOGIN</router-link> <br>
                    </div>
                </div>
                <!--  navbar brand image-->
                <a class="navbar-brand" href="/"><img class="img-fluid w-25"
                        src="https://i.postimg.cc/FKcn9MZw/M-letter-removebg-preview.png"></a>

                <!-- button to open to offcanvas cart -->
                <button class="btn btn-black text-black" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">CART</button>
                <!--offcanvas cart -->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <!-- <h5 class="text-black" id="offcanvasRightLabel">CART</h5> -->
                        <button type="button" class="btn-close text-black text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <!--  offcanvas cart body-->
                    <div class="offcanvas-body text-black">
                        <h5>Your cart is currently empty</h5>
                    </div>
                </div>
            </nav>
        </div>
    </div>

</template>

<script>
import cart from '@/components/Cart.vue'
export default {
    name: 'Navbar',
    
    components: {
        cart
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jomolhari&display=swap');



.cart{
    position: relative;
    right: 5rem;
    z-index: 10;
}

#nav-body{
    display: block;
    /* border: 2px solid red; */
    font-size: 1.7rem;
    /* padding: 2rem; */
    /* line-height: 2rem; */
    position: relative;
    left: 3rem;
    top: 3rem;
    margin-bottom: 10rem;
}

/* .links{
    text-align: center;
    line-height: 2rem;
    margin-bottom: 10rem;
} */

.navbar{
    z-index: 100;
    overflow: hidden;
    max-width: 100vh;
}

nav {
    /* padding: 30px; */
    height: 10rem!important;
    text-align: center;
    object-fit: fill;
    padding-bottom: 6rem!important ;
    /* border: 3px solid red; */
    z-index: 20;
    position: relative;
    width: 100%;
    right: 10rem;
    /* bottom: 1rem; */
    font-family: 'Jomolhari', serif;

}

.row {
    width: 113rem !important;
    height: 7rem !important;
    z-index: 20;
    /* border: 3px solid blue; */
}

.container {
    background-color: white;
    /* border: 3px solid blue; */
    color: black;
    max-width: 96rem !important;
    max-height:7rem !important;
    z-index: 1;
}

a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    margin-right: 1rem;
    position: relative;
    right: 3rem;
}

a:hover {
    color: black;
}

nav a.router-link-exact-active {
    color: #585c5f;
    font-weight: 600;
}

.navbar-brand {
    width: 18rem;
    /* padding: 1rem; */
    z-index: 10;
    /* border: 3px solid blue; */
    /* position: relative; */
    /* left: 5rm; */
}

#smallNavbar{
        visibility: hidden;
    }


@media only screen and (max-width: 1350px) {
    #smallNavbar{
        visibility: visible;
    }
    #bigNavbar{
        visibility: hidden;
    }
}
</style>