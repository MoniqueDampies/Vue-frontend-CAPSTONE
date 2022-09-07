<template>
    <button class="bg-transparent" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + paintings.id">
        <i class="text-white fas fa-pen"></i></button>


    <!-- Modal1 -->
    <div class="modal fade" :id="'exampleModal' + paintings.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                                <form @submit.prevent="editPainting" method="POST" class="justify-content-center">

                                    <label for="title">Title</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="paintings.title"
                                        placeholder="Enter Painting Title" required /><br />

                                    <label for="category">Painting Category:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="paintings.category"
                                        placeholder="Enter Painting Category" required /><br />

                                    <label for="price">Painting Price:</label><br />
                                    <input class="w-100 bg-black text-white" type="number" v-model="paintings.price"
                                        placeholder="Enter Painting Price" required /><br />

                                    <label for="description">Painting Description:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="paintings.description"
                                        placeholder="Enter Painting Description" required /><br />

                                    <label for="img">Painting Image:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="paintings.img"
                                        placeholder="Add Painting postimage direct link" required /><br />

                                    <button class="mt-4 w-100 btn-layout bg-black text-white" data-bs-dismiss="modal" @click="submit">
                                        Edit Painting Information
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
    name: "EditPaintingsModal",
    props: ["painting"],
    data() {
        return {
            title: '',
            price: '',
            category: '',
            description: '',
            size: '',
            img: ''
        }
    },
    methods: {
        editPainting() {
            console.log(this.painting)
            this.$store.dispatch('editPainting', this.painting);
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

::placeholder{
    text-align: center;
    color: white;
}

label{
    color: white;
    padding: 1rem;
}

.btn-layout {
    border: 1px solid white;
    border-radius: 2px;
}
</style>