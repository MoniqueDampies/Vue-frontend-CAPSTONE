<template>
    <nav class="navbar navbar-expand-lg navbar-white bg-white">
        <div class="container-fluid">
            <a id="logo" class="navbar-brand" href="/">
                <img class="img-fluid" src="https://i.postimg.cc/FKcn9MZw/M-letter-removebg-preview.png">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03"
                aria-controls="navbarColor03" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse show" id="navbarColor03">
                <ul class="navbar-nav " style="margin: auto;">
                    <li class="nav-item">
                        <router-link class="nav-link mx-2" to="/">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link mx-2" to="/allproducts">SHOP ART SUPPLIES</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link mx-2" to="/allpaintings">SHOP ARTWORKS</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link mx-2" to="/about">ABOUT</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link mx-2" to="/contact">CONTACT US</router-link>
                    </li>
                    <div class="nav-item" v-if="user">
                        <router-link v-if="user.isAdmin == 'True'"  class="nav-link mx-2" to="/admin">ADMIN</router-link>
                    </div>
                    <li class="nav-item">
                        <router-link class="nav-link mx-2" to="/register">REGISTER</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link mx-2" to="/login">LOGIN</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link mx-2" to="/account"><i class="fa-solid fa-user"></i></router-link>
                    </li>
                    <li class="cart mx-1">
                        <Cart />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import Cart from '@/components/Cart.vue'
export default {
    name: 'Navbar',
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    components: {
        Cart
    }


}
</script>

<style scoped>

a{
  
    font-weight: 600;  
}

#logo{
    /* border: 2px solid red; */
    width: 15vh;
    height: 15vh;
}

#logo img{
    width: 15vh;
    height: 15vh;
}
    /* Style the active class (and buttons on mouse-over) */

/* From uiverse.io by @WhiteNervosa */
 .router-link-exact-active {
    font-size: 17px;
    color: #000;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    /* text-transform: uppercase; */
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
}



.router-link-exact-active:focus:after,
.router-link-exact-active:hover:after {
    width: 100%;
    left: 0%;
} 


/* .router-link-exact-active {
    border-bottom: 4px solid black;
    transition: 1s;
} */

.router-link-exact-active:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 0%;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #000;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
}

.cart {
    float: right;
}
@media only screen and (max-width: 600px) {
  
  #logo {
      width: 50%;
  }
  
  
}
@media only screen and (max-width: 991px) {
  
    .navbar{
        text-align: center
    }
  
}

@media only screen and (max-width: 1136px) {
  
    #logo{
    /* border: 2px solid red; */
    width: 10vh;
    height: 10vh;
}

#logo img{
    width: 10vh;
    height: 10vh;

}
.navbar a{
    font-size:0.81rem ;
}


}

@import url('https://fonts.googleapis.com/css2?family=Jomolhari&display=swap');
</style>