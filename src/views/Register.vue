<template>
    <h1>REGISTER PAGE</h1>
    <form @submit.prevent="Registerform" method="POST">
        <div class="input-group">
            <input required="" type="text"  v-model="firstName"  name="firstName" autocomplete="off" class="input">
            <label class="user-label">First Name</label>
        </div>

        <div class="input-group">
            <input required="" type="text"  v-model="lastName" name="lastName" autocomplete="off" class="input">
            <label class="user-label">Last Name</label>
        </div>

        <div class="input-group">
            <input required="" type="email" v-model="email"  name="email" autocomplete="off" class="input">
            <label class="user-label">Email</label>
        </div>

        <div class="input-group">
            <input required="" type="text"  v-model="phone" name="phone" maxlength="10" minlength="10" autocomplete="off" class="input">
            <label class="user-label">Phone number</label>
        </div>

        <div class="input-group">
            <input required="" type="text"  v-model="country" name="country" autocomplete="off" class="input">
            <label class="user-label">Country</label>
        </div>

        <div class="input-group">
            <input required="" type="text"  v-model="province" name="province" autocomplete="off" class="input">
            <label class="user-label">Province</label>
        </div>

        <div class="input-group">
            <input required="" type="password" v-model="password"  name="password" autocomplete="off" class="input">
            <label class="user-label">Password</label>
        </div>
        <div>
            <button v-on:click="submit">CREATE MY ACCOUNT</button>
        </div>
    </form>

</template>

<script>
export default {
    name: 'register',
    data(){
        return {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            province: "",
            password: "",
        };
    },
    methods: {
        Registerform() {
            this.$store.dispatch("Registerform", {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone,
                country: this.country,
                province: this.province,
                password: this.password,
            });
        }
    }

}
</script>

<style scoped>
/* From uiverse.io by @alexruix */
.input-group {
    position: relative;
    left: 36rem;
    padding-top: 1rem;
    top: 1rem;

}

.input {
    border: solid 1.5px #f5f5f5;
    /* border-radius: 10rem; */
    background: none;
    padding: 1rem;
    /* padding-top: 1rem; */
    width: 23rem;
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

/* 
.container {
    width: 80%;
    margin: 0 auto;
} */

button {
    position: relative;
    top: 2rem;
    margin: 0 auto;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    display: block;
    background-color: #ffffff;
    border: 1px solid transparent;
    color: #000000;
    font-weight: 300;
    width: 23rem;
    border-radius: 2px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

button:hover {
    background-color: #000000;
    color: #ffffff;
    border-color: #ffffff;
}
</style>