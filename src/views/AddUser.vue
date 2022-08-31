<template>
    <section class="vh-100">
        <div class="container">
            <div class="justify-content-center">
                <h3>Add A New User</h3>
                <form @submit.prevent="addPaintings" method="POST" class="justify-content-center">

                    <label for="title">User First Name:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="firstName"
                        placeholder="Enter User First Name" required /><br />

                    <label for="category">User Last Name:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="lastName"
                        placeholder="Enter User Last Name" required /><br />

                    <label for="price">User Email:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="email"
                        placeholder="Enter User Email" required /><br />

                    <label for="description">User Password:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="password"
                        placeholder="Enter User Password" required /><br />

                    <label for="description">User Phone:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="phone"
                        placeholder="Enter User Phone" required /><br />

                    <label for="description">User Province:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="province"
                        placeholder="Enter User Province" required /><br />

                    <label for="description">User Country:</label><br />
                    <input class="w-100 bg-black text-white" type="text" v-model="country"
                        placeholder="Enter User Country" required /><br />

                    <button class="mt-4 w-100 btn-layout bg-black text-white" @click="submit">
                        Add New User
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
            img: "",
        };
    },
    methods: {
        addPaintings() {
            this.$store.dispatch("addPaintings", {
                title: title,
                price: price,
                category: category,
                description: description,
                img: img,
            });
        },
    },
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