<template>
    <AdminNav />
    <div>
        <h5 class="text-white mt-2 text-center">PAINTINGS</h5>
        <router-link to="/addPaintings">
            <button class="btn btn-black text-white w-25">
                ADD PAINTINGS
            </button>
        </router-link>
    </div>

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
                <tr v-for="painting in paintings" :key="painting.id">
                    <td>{{ painting.id }}</td>
                    <td>{{ painting.title }}</td>
                    <td class="w-25">{{ painting.category }}</td>
                    <td class="w-25">{{ painting.description }}</td>
                    <td class="w-25"><img :src="painting.img" class="img-fluid" alt="" defer /></td>
                    <td class="w-25">R {{ painting.price }}.00</td>
                    <td>
                        <EditPaintingsModal :painting="painting" />
                    </td>
                    <td> <button id="delete" class="b btn-layout bg-transparent" @click="deletePainting(painting.id)">
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
            return this.$store.dispatch("editpainting", this.painting)
        },
        deletePainting(id) {
            console.log("Painting was deleted");
            return this.$store.dispatch("deletePainting", id);

        }
    }

};
</script>

<style scoped>
section {
    position: relative;
    top: -6rem;
}

.img-fluid {
    width: 10rem;
}

button {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

div{
    position: relative;
    top: -5rem;
}
</style>