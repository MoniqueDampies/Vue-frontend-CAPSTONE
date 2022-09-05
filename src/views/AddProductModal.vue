<template>
    <section class="vh-100">
        <div class="container">
            <div class="justify-content-center">
                <h3 class="text-center">Add A New Product</h3>
                <form @submit.prevent="addProducts" method="POST" class="justify-content-center">
                    <label for="title">Title</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="title" placeholder="Enter Product Title" required /><br />
                    <label for="category">Product Category:</label><br />
                    <select class="w-100 bg-black text-white" v-model="category" name="category" id="category">
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
                    <input class="w-100 bg-black text-white" type="number" v-model="price" placeholder="Enter Product Price" required /><br />

                    <label for="description">Product Description:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="description" placeholder="Enter Product Description"
                        required /><br />

                    <label for="img">Product Image:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="img" placeholder="Add Product postimage direct link"
                        required /><br />

                    <button class="mt-4 w-100 btn-layout bg-black text-white" @click="submit">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "addProducts",
    props: ["products"],
    data() {
        return {
            title: "",
            price: "",
            category: "",
            description: "",
            img: "",
        };
    },
    methods: {
        addProducts() {
            this.$store.dispatch("addProducts", {
                title: this.title,
                price: this.price,
                category: this.category,
                description: this.description,
                img: this.img,
            });
        },
    },
};
</script>

<style scoped>

form{
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

form input{
    height: 2rem;
    text-align: center;
    border: 1px solid white;
    padding: 0.5rem;
}

form label{
    margin-top: 1rem;
    text-transform: uppercase;
    color: white;
}

button {
    border: 1px solid white;
    padding: 0.5rem;
}

</style>