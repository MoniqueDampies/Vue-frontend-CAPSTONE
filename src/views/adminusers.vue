<template>
    <AdminNav />
    <div>
        <h4 class="text-white mt-2 text-center">USERS</h4>
    </div>
    <section v-if="users" class="admin mt-4 vh-100">
        <table class="table align-middle mb-0 text-white table-black container" style="overflow-x:auto;">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone</th>
                    <th>Province</th>
                    <th>Country</th>
                    <th>Admin</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{ user.id }}</td>
                    <td>{{ user.firstName }} {{ user.lastName }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.password }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.province }}</td>
                    <td>{{ user.country }}</td>
                    <td>{{ user.isAdmin }}</td>
                    <td>
                        <EditUsersModal :users="user" />
                    </td>
                    <td> <button id="delete" class="b btn-layout bg-transparent" @click="deleteUser(user.id)">
                            <i class="text-white fas fa-trash"></i>
                        </button></td>
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
import AdminNav from '@/components/Admin.vue';
import Loader from '@/components/Loader.vue';
import EditUsersModal from '@/components/EditUsersModal.vue';


export default {
    name: 'adminusers',
    props: ["EditUsersModal"],
    mounted() {
        this.$store.dispatch("getUsers");
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
    },
    components: {
        AdminNav,
        Loader,
        EditUsersModal
    },
    methods: {
        editUser() {
            return this.$store.dispatch("editUser", this.user)
        },
        deleteUser(id) {
            console.log("User was deleted");
            return this.$store.dispatch("deleteUser", id);

        }
    }

};
</script>

<style scoped>
div {
    position: relative;
    top: -5rem;
}

section {
    position: relative;
    top: -6rem;
    overflow-x: auto;
}

.img-fluid {
    width: 10rem;
}

button {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>