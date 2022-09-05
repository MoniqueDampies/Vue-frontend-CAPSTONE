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
                <div v-for="(product, index) in cart" :key="index">
                    {{product.productData[0].title}} <br>
                    R{{product.productData[0].price}}.00 <br>
                    {{product.productData[0].category}} <br>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'cart',
    computed: {
        cart(){
            return this.$store.state.cart
        },
        user(){
            return this.$store.state.user
        }
    },
    mounted(){
        this.$store.dispatch('getUser');
    }
}
</script>

<style scoped>

</style>