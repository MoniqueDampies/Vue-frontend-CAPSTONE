<template>
    <nav>
        <router-link to="/">HOME</router-link> |
        <router-link to="/allproducts">SHOP ART SUPPLIES</router-link>|
        <router-link to="/allpaintings">SHOP ARTWORKS</router-link>|
        <router-link to="/about">ABOUT</router-link>|
        <router-link to="/contact">CONTACT US</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
nav {
padding: 30px;
text-align: center;
}
a {
font-weight: bold;
color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #1f6ab5;
  font-weight: bold;
}

</style>