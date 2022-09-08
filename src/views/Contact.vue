<template>
    <section class="vh-100 gradient-custom">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-12 col-lg-9 col-xl-7">
                    <section>
                        <div class="card-body">
                            <h2 class="pt--5 mb-5 text-center">BECOME A PART OF THE ART MART COMMUNITY!
                            </h2>
                            <form id="contact-form" name="contact-form" action="https://formspree.io/f/myyvknyd"
                                method="POST">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="name" id="name" name="name" class="form-control"
                                                placeholder="Enter Your Fullname" required>
                                        </div>
                                    </div>
                                    <br>
                                    <br>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="email" id="email" name="email" class="form-control"
                                                placeholder="Enter Email Address" required>
                                        </div>
                                    </div>
                                    <br>
                                    <div id="con" class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="number" id="number" name="number" maxlength="10" minlength="10"
                                                autocomplete="off" class="form-control"
                                                placeholder="Enter Contact Number">
                                        </div>
                                    </div>
                                    <br>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form">
                                            <textarea type="commit" id="comment" name="comment" rows="2"
                                                class="form-control md-textarea" placeholder="Your Comments"
                                                autocomplete="off"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="text-center col-md-12">
                                    <button type="submit" class="btn ">Submit</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
    <Footer id="footer" />
</template>
    
<script>
import Footer from '@/components/Footer.vue';
export default {
    components: { Footer }
}
</script>
    
<style scoped>

section{
    position: relative;
    top: -2rem;
}

#footer {
    position: relative;
    bottom: 10rem;
    /* padding-top: 16rem; */
    z-index: -5;
}

input,
textarea {
    border-radius: 0;
    color: white;
    background: black;
    border: 1px solid white;
    padding: 1rem;
    outline: none !important;
    box-shadow: none;
}

input:focus {
    border-radius: 0;
    color: white;
    background: black;
    border: 1px solid white;
    padding: 1rem;
    outline: none !important;
    box-shadow: none;

}

textarea:focus {
    border-radius: 0;
    color: white;
    background: black;
    border: 1px solid white;
    padding: 1rem;
    outline: none !important;
    box-shadow: none;

}

::placeholder {
    color: white;
}

button {
    text-transform: uppercase;
    border-radius: 0;
    border: 1px solid white;
    color: rgb(0, 0, 0);
    font-size: 1.3rem;
    width: 100%;
    background: rgb(255, 255, 255);

}

form {
    outline: none !important;
}
</style>