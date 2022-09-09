<template>
    <AdminNav />
    <div>
    <!-- subheading -->
    <h5 class="text-white mt-2 text-center">PRODUCTS</h5>
    <!-- add products modal button -->
    <router-link class="text-center" to="/addProducts">
        <button class="btn text-center btn-black text-white w-25">
            ADD PRODUCTS
        </button>
    </router-link>
</div>

    <section v-if="products" class="admin mt-4 vh-100">
        <table class="table align-middle mb-0 table-black text-white container" style="overflow-x:auto;">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="index">
                    <td>{{ product.id }}</td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.category }}</td>
                    <td class="w-25">{{ product.description }}</td>
                    <td><img :src="product.img" class="img-fluid" alt="" defer /></td>
                    <td>R {{ product.price }}.00</td>
                    <td>
                        <EditProductModal :product="product" />
                    </td>
                    <td> <button id="delete" class="b bg-transparent btn-layout" @click="deleteProduct(product.id)">
                            <i class="text-white fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <router-link to="/admin">
            <button class="btn btn-black mt-3 text-white w-25">
                BACK TO ADMIN
            </button>
        </router-link>
    </section>
    <div v-else>
        <Loader />
    </div>


</template>

<script>
import Loader from '@/components/Loader.vue';
import AdminNav from '@/components/Admin.vue';
import EditProductModal from '@/components/EditProductModal.vue';

export default {
    name: 'adminproducts',
    props: ["EditProductModal"],

    mounted() {
        this.$store.dispatch("getProducts");
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    components: {
        AdminNav,
        Loader,
        EditProductModal
    },
    methods: {
        editProduct() {
            return this.$store.dispatch("editProduct", this.product);

        },
        deleteProduct(id) {
            console.log("Product was deleted");
            return this.$store.dispatch("deleteProduct", id);

        }
    }

};
</script>

<style scoped>
div{
    position: relative;
    top: -5rem;
}

section {
    position: relative;
    top: -6rem;
    overflow-x: auto;
}

button {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.img-fluid {
    width: 10rem;
}

input .placeholder {
    text-align: center;
}
</style>