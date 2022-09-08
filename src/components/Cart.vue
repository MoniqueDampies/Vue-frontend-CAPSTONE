<template>
    <!-- cart button -->
    <button class="btn btn-black text-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"><i class="fa-solid fa-bag-shopping"></i></button>

    <!-- CART BODY -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <!-- <h5 class="text-black" id="offcanvasRightLabel">CART</h5> -->
            <button type="button" class="btn-close text-black text-reset" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body text-black">
            <div id="cart" v-for="(product, index) in cart" :key="index">
               <strong> {{ product.productData[0].title }}</strong> <br>
                <img :src="product.productData[0].img" class="card-image w-50 img-fluid" alt="image" />

                R{{ product.productData[0].price }}.00 <br>
                {{ product.productData[0].category }} <br>
                <button id="delete" class="b bg-transparent btn-layout" @click="deleteCartItem(product.cart_id)">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            <!-- <button id="delete" class="b bg-transparent text-danger btn-layout" @click="clearCart(cart_id)">
                    <i class="fa-solid fa-trash"></i>
                </button> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'cart',
    mounted() {
        this.$store.dispatch('getUser');
    },
    computed: {
        cart() {
            return this.$store.state.cart
        },
        user() {
            return this.$store.state.user
        }
    },
    methods: {
        deleteCartItem(id) {
            this.$store.dispatch("deleteCartItem", id)
        },
        clearCart(id) {
            this.$store.dispatch("clearCart", id)
        }

    }
}
</script>

<style scoped>


#delete{
    border:none;
}

#cart{
    border: 1px solid black;
    margin-bottom: 10px;
}

.offcanvas{
    z-index: 100;
}

#offcanvasRight{
    z-index: 20;
}
</style>