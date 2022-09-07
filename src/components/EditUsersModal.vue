<template>
    <button class="bg-transparent" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + user.id">
        <i class="text-white fas fa-pen"></i></button>
    <!-- Modal1 -->
    <div class="modal fade" :id="'exampleModal' + user.id" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
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

                                <form @submit.prevent="editUser" method="POST" class="justify-content-center">

                                    <label for="title">User First Name:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="user.firstName"
                                        placeholder="Enter User First Name" required /><br />

                                    <label for="category">User Last Name:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="user.lastName"
                                        placeholder="Enter User Last Name" required /><br />

                                    <label for="price">User Email:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="user.email"
                                        placeholder="Enter User Email" required /><br />

                                    <label for="description">User Password:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="user.password"
                                        placeholder="Enter User Password" required /><br />

                                    <label for="description">User Phone:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="user.phone"
                                        maxlength="10" minlength="10" placeholder="Enter User Phone" required /><br />

                                    <label for="description">User Province:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="user.province"
                                        placeholder="Enter User Province" required /><br />

                                    <label for="description">User Country:</label><br />
                                    <input class="w-100 bg-black text-white" type="text" v-model="user.country"
                                        placeholder="Enter User Country" required /><br />

                                    <label for="description">User Admin:</label><br />
                                    <select class="w-100 bg-black text-white" v-model="user.isAdmin" id="category">
                                        <option value="False">False</option>
                                        <option value="True">True</option>
                                    </select><br />
                                    <button class="mt-4 w-100 btn-layout bg-black text-white" data-bs-dismiss="modal"
                                        @click="submit">
                                        Edit User Information
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
    name: 'EditUsersModal',
    props: ["users"],
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            province: "",
            password: "",
        }
    },
    computed: {
        user() {
            return this.$store.state.users;
        },
    },
    methods: {
        editUser() {
          return this.$store.dispatch("editUser", this.user)
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