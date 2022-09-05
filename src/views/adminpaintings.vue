<template>
    <AdminNav />
    <h5 class="text-white mt-2 text-center">PAINTINGS</h5>
    <router-link to="/addPaintings">
        <button class="btn btn-black text-white w-25">
            ADD PAINTINGS
        </button>
    </router-link>

    <section v-if="paintings" class="admin mt-4 vh-100">
        <table class="table align-middle mb-0 table-black text-white  container" style="overflow-x:auto;">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="paintings in paintings" :key="paintings.id">
                    <td>{{ paintings.id }}</td>
                    <td>{{ paintings.title }}</td>
                    <td class="w-25">{{ paintings.category }}</td>
                    <td class="w-25">{{ paintings.description }}</td>
                    <td class="w-25"><img :src="paintings.img" class="img-fluid" alt="" defer /></td>
                    <td class="w-25">R {{ paintings.price }}.00</td>
                    <td>
                        <EditPaintingsModal :paintings="paintings" />
                    </td>
                    <td> <button id="delete" class="b btn-layout bg-transparent"
                            v-on:click="$store.dispatch('deletePainting', paintings.id,)">
                            <i class="text-white fa-solid fa-trash"></i>
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
import EditPaintingsModal from '@/components/EditPaintingsModal.vue';

export default {
    name: 'adminpaintings',
    props: ["paintings"],
    mounted() {
        this.$store.dispatch("getPaintings");
    },
    computed: {
        paintings() {
            return this.$store.state.paintings;
        },
    },
    components: {
        AdminNav,
        Loader,
        EditPaintingsModal
    },
    methods: {
        editpainting() {
            return this.$store.dispatch("editpainting", this.paintings)
        },
        deletePainting(id) {
            console.log("Painting was deleted");
            return this.$store.dispatch("deletePainting", id);

        }
    }

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

.img-fluid {
    width: 10rem;
}

button {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>