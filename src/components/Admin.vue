<template>
    <section class="pt--3">
        <h1 class="text-white text-center">ADMIN</h1>
        <nav class="text-center justify-content-center">
            <router-link to="/adminproducts"><button class="btn mb-2 btn-black fw-6 text-white w-25">
                    PRODUCTS
                </button>
            </router-link>
            <router-link to="/adminpaintings"><button class="btn mb-2 btn-black fw-6 text-white w-25">
                    PAINTINGS
                </button>
            </router-link>
            <router-link to="/adminusers"><button class="btn mb-2 btn-black fw-6 text-white w-25">
                    USERS
                </button>
            </router-link>
        </nav>
    </section>
</template>

<script>
export default {
    name: 'AdminNav'

}
</script>

<style>
section{
    position: relative;
    top: -5rem;
}

.btn {
    margin-left: 1rem;
    border: 1px solid #e8e8e8;

}
</style>