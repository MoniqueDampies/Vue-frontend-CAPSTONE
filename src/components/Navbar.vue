<template>
    <div class="container w-100">
        <div class="row w-100">
            <nav class="navbar container navbar-fixed-top">
                <a class="navbar-brand" href="/landing"><img class="img-fluid w-25"
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
                <router-link to="/login"><i class="fa-solid fa-user"></i></router-link>
                <button>
                    <cart />
                </button>
            </nav>
        </div>
    </div>

</template>

<script>
import cart from '@/components/Cart.vue'
export default {
    name: 'Navbar',
    computed: {
        cart() {
            return this.$store.state.cart
        },
        user() {
            return this.$store.state.user
        }
    },
    mounted() {
        this.$store.dispatch('getUser');
    },
    components: {
        cart
    }
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

.container {
    background-color: white;
    color: black;
    max-width: 96rem !important;
    max-height: 6rem !important;
    z-index: 1;
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

.navbar-brand {
    width: 20rem;
    padding: 1rem;
    z-index: -1;
    position: relative;
    left: 5rem;
}

button {
    outline: none;
}

.offcanvas-body {
    color: grey;
}
</style>