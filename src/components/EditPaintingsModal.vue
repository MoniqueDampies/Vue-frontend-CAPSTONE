<template>
    <button class="bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="text-white fas fa-pen"></i></button>


    <!-- Modal1 -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">EDIT PAINTINGS FORM</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row justify-content-center">

                            <div class="col-sm-8">

                                <form @submit.prevent="addPaintings" method="POST" class="justify-content-center">

                                    <label for="title">Title</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="title"
                                        placeholder="Enter Painting Title" required /><br />

                                    <label for="category">Painting Category:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="category"
                                        placeholder="Enter Painting Category" required /><br />

                                    <label for="price">Painting Price:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="price"
                                        placeholder="Enter Painting Price" required /><br />

                                    <label for="description">Painting Description:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="description"
                                        placeholder="Enter Painting Description" required /><br />

                                    <label for="img">Painting Image:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="img"
                                        placeholder="Add Painting postimage direct link" required /><br />

                                    <button class="mt-4 w-100 btn-layout bg-black text-white" @click="submit">
                                        Add Painting
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
name: 'EditPaintingsModal';
export default {
    data() {
        return {
            Prod_name: '',
            category: '',
            price: '',
            description: '',
            img1: '',
            img2: '',
            dateAdded: ''
        }
    },
    methods: {
        addProduct() {
            this.$store.dispatch('addProduct', {
                Prod_name: this.Prod_name,
                category: this.category,
                price: this.price,
                description: this.description,
                img1: this.img1,
                img2: this.img2,
                dateAdded: this.dateAdded
            })

        }
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
</style>