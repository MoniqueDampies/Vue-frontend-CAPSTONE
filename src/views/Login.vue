<template>
    <section>
        <h1 class=" pb-4 text-center">LOGIN</h1>
        <form @submit.prevent="login" method="POST">
            <!-- email -->
            <div class="input-group">
                <input required="" type="email" v-model="email" name="email" autocomplete="off" class="input">
                <label class="user-label">Email</label>
            </div>
            <!-- password -->
            <div class="input-group">
                <input required="" type="password" v-model="password" name="password" autocomplete="off" class="input">
                <label class="user-label">Password</label>
            </div>
            <div>
                <button v-on:click="submit">LOGIN</button>
            </div>
        </form>
    </section>
    <!-- <Footer /> -->
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
    name: 'login',
    data() {
        return {
            email: "",
            password: "",
        };
    }, components: { Footer },
    methods: {
        login() {
            const payload = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login', payload)
        }
    }
}

</script>

<style scoped>
section{
    position: relative;
    top: -3rem;
}

.input-group {
    position: relative;
    /* left: 37rem; */
    padding-top: 1rem;
    top: 1rem;

}

.input {
    border: solid 1.5px #f5f5f5;
    /* border-radius: 10rem; */
    background: none;
    padding: 1rem;
    /* padding-top: 1rem; */
    width: 100%;
    font-size: 1rem;
    color: #f5f5f5;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.user-label {
    position: absolute;
    left: 15px;
    color: #e8e8e8;
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus,
input:valid {
    outline: none;
    border: 1.5px solid #f5f5f5;
}

.input:focus~label,
input:valid~label {
    transform: translateY(-50%) scale(0.8);
    background-color: #000000;
    padding: 0 .2em;
    color: #f5f5f5;
}


button {
    position: relative;
    top: 2rem;
    /* left: 0.5rem; */
    margin: 0 auto;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    display: block;
    background-color: #ffffff;
    border: 1px solid transparent;
    color: #000000;
    font-weight: 400;
    width: 100%;
    /* border-radius: 2px; */
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

button:hover {
    background-color: #000000;
    color: #ffffff;
    border-color: #ffffff;
}

form {

    /* border: 2px solid white; */
    width: 28%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    height: 20rem;
}
</style>