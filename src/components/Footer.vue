<template>
    <div id="footer">
        <div class="container bg-black">
            <hr>
            <div class="row">

                <div id="OP" class="col col-lg-3 col-sm-6  order-first">
                    <ul class="policies">
                        <li>OUR POLICIES</li>
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                        <li>Shipping Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div id="CS" class="col col-lg-3 col-sm-6">
                    <ul class="customer1">
                        <li>CUSTOMER SUPPORT</li>
                        <li>Search</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                        <li>Terms of Service</li>
                        <li>Refund policy</li>
                    </ul>
                </div>
                <div id="OC" class="col col-lg-3 col-sm-6">
                    <ul class="commitment">
                        <li>OUR COMMITMENT</li>
                        <li>✓ 100% Satisfaction Guarantee </li>
                        <li>✓ Customer Support </li>
                        <li>✓ Premium Quality Products</li>
                        <li>✓ Cruelty-Free</li>
                        <li>✓ Handcrafted</li>
                    </ul>
                </div>
                <div id="SM" class="col order-last">
                    <ul class="social media">
                        <li>FOLLOW OUR SOCIAL MEDIA</li>
                        <li>INSTAGRAM</li>
                        <li>FACEBOOK</li>
                        <li>TWITTER</li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="row text-center">
                <h5>2022 &copy; Monique Dampies</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style scoped>
#footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    z-index: 2;
    /* Footer height */
}

ul {
    list-style-type: none;
    font-size: 1rem;
}

li {
    font-size: 1rem;

}

h5 {
    font-size: 1rem;
}

@media only screen and (max-width: 375px) {
    #OP {
        min-width: 15rem;
    }

    #CS {
        min-width: 15rem;
    }

    #SM {
        min-width: 15rem;
    }

    #P {
        min-width: 15rem;
    }
}
</style>
