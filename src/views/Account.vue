<template>
    <section id="section">
    <div v-if="user" class="container w-100 ">
        <div id="logout" class="row mt-5 w-25">
            <button @click=reloadPage()> @LOGOUT</button>
        </div>
        <section>
            <div id="account" class="row py-5">
                <hr>
                <h3 class="mb-5">MY ACCOUNT</h3>
                <h4>Welcome back {{user.firstName}} {{user.lastName}}!</h4>
 
            </div>
            <div class="row">
                <hr>
                <div id="orders" class="col-md-8">
                   
                    <h3 class="orders">MY ORDERS</h3>
                    <h5>You haven't placed any orders yet
                    </h5>
                </div>
                <div id="address" class="col-md-4">
                    <h3>PRIMARY ADDRESS</h3>
                    <h5>{{user.firstName}} {{user.lastName}}</h5>
                    <h5>{{user.province}}</h5>
                    <h5>{{user.country}}</h5>
                    <button  @click="deleteUser(user.id), reloadPage()" id="delete">delete account</button>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <h1 class="text-center my-5 pb-5">Please log in</h1>
    </div>
</section>
</template>
 
<script>

 
export default {
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        reloadPage() {
            window.location.reload();
        },
       
        deleteUser(id) {
            console.log("User was deleted");
            return this.$store.dispatch("deleteUser", id);
 
        }
    }
}
</script>
 
<style scoped>


#footer {
    position: relative;
    bottom: 10rem;
    padding-top: 16rem;
    z-index: -5;
}
 
.container {
    position: relative;
    bottom: 3rem;
    /* border: 2px solid white; */
}
 
h3 {
    text-decoration: underline;
    margin-block: 1rem;
}
 
.orders {
    width: 20rem;
}
 
#orders {
    /* border: 2px solid white; */
    height: 15rem;
}
 
#address {
    /* border: 2px solid white; */
    height: 15rem;
}
 
button {
    /* position: relative;
    top: 2rem; */
    margin: 0 auto;
    font-size: 1rem;
    padding: 1rem 2rem;
    /* display: block; */
    background-color: #ffffff;
    border: 1px solid transparent;
    color: #000000;
    font-weight: 300;
    width: 100%;
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