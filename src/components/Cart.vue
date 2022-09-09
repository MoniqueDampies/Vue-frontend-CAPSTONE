<template>
    <!-- Button trigger modal -->
    <button class="btn btn-black text-black" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <i class="fa-solid fa-bag-shopping"></i>
    </button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="cart" v-for="(product, index) in cart" :key="index">
                        <h4> {{ product.productData[0].title }} </h4>
                        <img :src="product.productData[0].img" class="card-image w-50 img-fluid" alt="image" />

                       <h3> R{{ product.productData[0].price }}.00 </h3>
                       <h5>{{ product.productData[0].category }} </h5> 
                        <button id="delete" class="b bg-transparent btn-layout"
                            @click="deleteCartItem(product.cart_id)">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <hr>
                    </div>
                
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark text-white" data-bs-dismiss="modal"  @click="clearCart()" ><i class="fa-solid fa-trash"></i>  Clear cart</button>
                    <button type="button" class="btn btn-dark text-white">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cart',
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
#cart{
    color: black;
    display: block;
    margin-right: 0;
    margin-left: 0;
}



button{
    border: none;
}
</style>