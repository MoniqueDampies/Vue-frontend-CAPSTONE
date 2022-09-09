<template>
    <section class="vh-100 gradient-custom">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-12 col-lg-9 col-xl-7">
                    <section>
                        <div class="card-body">
                            <h2 class=" mb-5 text-center">BECOME A PART OF THE ART MART COMMUNITY!
                            </h2>
                            <form id="contact-form" name="contact-form" action="https://formspree.io/f/myyvknyd"
                                method="POST">

                                <div class="input-group">
                                    <input required="" type="text" name="fullName" autocomplete="off" class="input">
                                    <label class="user-label">Full Name</label>
                                </div>
<br>
                                <div class="input-group">
                                    <input required="" type="email" name="email" autocomplete="off" class="input">
                                    <label class="user-label">Email Address</label>
                                </div>
<br>
                                <div class="input-group">
                                    <input required="" type="text" name="phone" maxlength="10" minlength="10"
                                        autocomplete="off" class="input">
                                    <label class="user-label">Contact number</label>
                                </div>
<br>
                                <div class="input-group">
                                    <input required="" type="text" name="comment" class=" input"
                                        autocomplete="off">
                                    <label class="user-label">Comments</label>
                                </div>
<br>
                                <div class="text-center col-md-12">
                                    <button type="submit" target="_blank" class="btn ">Submit</button>
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
section {
    position: relative;
    top: -5rem;
}

#footer {
    position: relative;
    bottom: 10rem;
    /* padding-top: 16rem; */
    z-index: -5;
}

i.input-group {
    /* position: relative; */
    /* left: 36rem; */
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding-top: 1rem;
    /* top: 1rem; */

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

button:hover {
    background-color: #000000;
    color: #ffffff;
    border-color: #ffffff !important;
}

form {
    outline: none !important;
}
</style>