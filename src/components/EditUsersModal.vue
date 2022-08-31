<template>
    <button class="bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="text-white fas fa-pen"></i></button>


    <!-- Modal1 -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">EDIT USER FORM</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row justify-content-center">

                            <div class="col-sm-8">

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
                                        Edit New User Information
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
name: 'EditUsersModal';
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