<template>

    <AdminNav />

    <router-view />

</template>

<script>
import AdminNav from '@/components/Admin.vue';

export default {
    name: 'admin',
    props: ["products"],
    props: ["adminproducts"],
    props: ["adminpaintings"],
    props: ["adminusers"],
    mounted() {
        this.$store.dispatch("getProducts"),
            this.$store.dispatch("getPaintings"),
            this.$store.dispatch("getUsers");
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        paintings() {
            return this.$store.state.paintings;
        },
        users() {
            return this.$store.state.users;
        },
    },
    components: {
        AdminNav
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

.img-fluid {
    width: 10rem;
}
</style>