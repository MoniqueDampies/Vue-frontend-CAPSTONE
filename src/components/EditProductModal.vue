<template>
    <button class="bg-transparent" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + product.id">
        <i class="text-white fas fa-pen"></i></button>
    <!-- Modal1 -->
    <div class="modal fade" :id="'exampleModal' + product.id" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="#exampleModal">EDIT PRODUCT FORM</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row justify-content-center">

                            <div class="col-sm-8">
                                <form @submit.prevent="editProduct" method="POST" class="justify-content-center">

                                    <label for="title">Title:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="product.title"
                                        placeholder="Enter Product Title" required /><br />
                                        
                                    <label for="category">Product Category:</label><br />
                                    <select class="w-100 bg-black text-white" v-model="product.category" id="category">
                                        <option value=""></option>
                                        <option value="Acrylic Paint Brushes">Acrylic Paint Brushes</option>
                                        <option value="Oil Paint Brushes">Oil Paint Brushes</option>
                                        <option value="Watercolour Paint Brushes">
                                            Watercolour Paint Brushes
                                        </option>
                                        <option value="Oil Paint">Oil Paint</option>
                                        <option value="Acrylic Paint">Acrylic Paint</option>
                                        <option value="Watercolor Paint">Watercolor Paint</option>
                                        <option value="Colored Pencil">Colored Pencil</option>
                                        <option value="Markers">Markers</option>
                                        <option value="Paper">Paper</option>
                                    </select><br />

                                    <label for="price">Product Price:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="product.price"
                                        placeholder="Enter Product Price" required /><br />

                                    <label for="description">Product Description:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="product.description"
                                        placeholder="Enter Product Description" required /><br />

                                    <label for="img">Product Image:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="product.img"
                                        placeholder="Add Product postimage direct link" required /><br />

                                    <button class="mt-4 w-100 btn-layout bg-black text-white" data-bs-dismiss="modal"
                                        @click="submit">
                                        Edit Product Information
                                    </button>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'EditProductModal',
    props: ["product"],

    data() {
        return {
            title: '',
            price: '',
            category: '',
            description: '',
            img: ''
        }
    },
    methods: {
        editProduct() {
            console.log(this.product);
            this.$store.dispatch("editProduct", this.product);
        },
    }
}
</script>

<style scoped>
.modal-content {
    text-align: center;
    justify-content: center;
    background-color: black;
}

.btn-close {
    background-color: white;
}

::placeholder {
    text-align: center;
    color: white;
}

label {
    color: white;
    padding: 1rem;
}

.btn-layout {
    border: 1px solid white;
    border-radius: 2px;
}
</style>