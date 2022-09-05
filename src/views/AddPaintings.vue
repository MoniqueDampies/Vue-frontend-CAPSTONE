<template>
    <section class="vh-100">
        <div class="container">
            <div class="justify-content-center">
                <h3 class="text-center">Add A New Painting</h3>
                <form @submit.prevent="addPainting" method="POST" class="justify-content-center">

                    <label for="title">Title</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="title"
                        placeholder="Enter Painting Title" required /><br />

                    <label for="category">Painting Category:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="category"
                        placeholder="Enter Painting Category" required /><br />

                    <label for="price">Painting Price:</label><br />
                    <input class="w-100 bg-black text-white" type="number" v-model="price"
                        placeholder="Enter Painting Price" required /><br />

                    <label for="description">Painting Description:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="description"
                        placeholder="Enter Painting Description" required /><br />

                    <label for="description">Painting Size:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="size"
                        placeholder="Enter Painting Size eg: 10 x 10" required /><br />

                    <label for="img">Painting Image:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="img"
                        placeholder="Add Painting postimage direct link" required /><br />

                    <button class="mt-4 w-100 btn-layout bg-black text-white" @click="submit">
                        Add Painting
                    </button>

                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "addPaintings",
    data() {
        return {
            title: "",
            price: "",
            category: "",
            description: "",
            size: "",
            img: "",
        };
    },
    methods: {
        addPainting() {
            this.$store.dispatch('addPainting', {
                title: this.title,
                category: this.category,
                price: this.price,
                description: this.description,
                size: this.size,
                img: this.img
            })

        }
    }
};
</script>

<style scoped>
form {
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

form input {
    height: 2rem;
    text-align: center;
    border: 1px solid white;
    padding: 0.5rem;
}

form label {
    margin-top: 1rem;
    text-transform: uppercase;
}

button {
    border: 1px solid white;
    padding: 0.5rem;
}
</style>