<template>
 <AdminNav/>
        <h5 class="text-white mt-2 text-center">USERS</h5>
    <router-link to="/addUsers">
        <button class="btn btn-black text-white w-25">
            ADD USERS
        </button>
    </router-link>
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
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="users in users" :key="users.id">
                    <td>{{ users.id }}</td>
                    <td>{{ users.firstName }}</td>
                    <td>{{ users.email }}</td>
                    <td>{{ users.password }}</td>
                    <td>{{ users.phone }}</td>
                    <td>{{ users.province }}</td>
                    <td>{{ users.country }}</td>
                    <td>{{ users.userRole }}</td>
                    <td><EditUsersModal/></td>
                    <td> <button id="delete" class="b btn-layout bg-transparent"
                            v-on:click="$store.dispatch('deleteUser', users.id,)">
                            <i class="text-white fas fa-trash" ></i>
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
                <Loader/>

    </div>


</template>

<script>
import AdminNav from '@/components/Admin.vue';
import Loader from '@/components/Loader.vue';
import EditUsersModal from '@/components/EditUsersModal.vue';


export default {
    name: 'adminusers',
    props: ["users"],
    mounted() {
        this.$store.dispatch("getUsers");
    },
    computed: {
        users(){
            return this.$store.state.users;
        },
    },
    components: {
    AdminNav,
    Loader,
    EditUsersModal
},

};
</script>

<style scoped>
.dot-spinner {
    --uib-size: 2.8rem;
    --uib-speed: 0.9s;
    --uib-color: #183153;
    position: relative;
    left: 46rem;
    top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: var(--uib-size);
    width: var(--uib-size);
}

.dot-spinner__dot {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
}

.dot-spinner__dot::before {
    content: "";
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    opacity: 0.5;
    animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}

.dot-spinner__dot:nth-child(2) {
    transform: rotate(45deg);
}

.dot-spinner__dot:nth-child(2)::before {
    animation-delay: calc(var(--uib-speed) * -0.875);
}

.dot-spinner__dot:nth-child(3) {
    transform: rotate(90deg);
}

.dot-spinner__dot:nth-child(3)::before {
    animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot-spinner__dot:nth-child(4) {
    transform: rotate(135deg);
}

.dot-spinner__dot:nth-child(4)::before {
    animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot-spinner__dot:nth-child(5) {
    transform: rotate(180deg);
}

.dot-spinner__dot:nth-child(5)::before {
    animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot-spinner__dot:nth-child(6) {
    transform: rotate(225deg);
}

.dot-spinner__dot:nth-child(6)::before {
    animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot-spinner__dot:nth-child(7) {
    transform: rotate(270deg);
}

.dot-spinner__dot:nth-child(7)::before {
    animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot-spinner__dot:nth-child(8) {
    transform: rotate(315deg);
}

.dot-spinner__dot:nth-child(8)::before {
    animation-delay: calc(var(--uib-speed) * -0.125);
}

@keyframes pulse0112 {

    0%,
    100% {
        transform: scale(0);
        opacity: 0.5;
    }

    50% {
        transform: scale(1);
        opacity: 1;
    }
}

.img-fluid{
    width: 10rem;
}
</style>