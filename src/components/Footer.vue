<template>
    <footer id="footer">
        <div class="container bg-black">
            <hr>
            <div class="row">

                <div id="OP" class="col col-lg-3 col-sm-6  order-first">
                    <ul class="policies">
                        <li>OUR POLICIES</li>
                        <a href="/privacypolicy">
                            <li>Privacy Policy</li>
                        </a>
                        <a href="/refund">
                            <li>Refund Policy</li>
                        </a>
                        <a href="/shipping">
                            <li>Shipping Policy</li>
                        </a>
                        <a href="/tos">
                            <li>Terms of Service</li>
                        </a>
                    </ul>
                </div>
                <div id="CS" class="col col-lg-3 col-sm-6">
                    <ul class="customer1">
                        <li>CUSTOMER SUPPORT</li>
                        <li>FAQs</li>
                      <a href="/contact"> <li>Contact Us</li></a> 
                        <a href="/tos">
                            <li>Terms of Service</li>
                        </a>
                        <a href="/refund">
                            <li>Refund policy</li>
                        </a>
                    </ul>
                </div>
                <div id="OC" class="col col-lg-3 col-sm-6">
                    <ul class="commitment">
                        <li>OUR COMMITMENT</li>
                        <li>✓ 100% Satisfaction Guarantee </li>
                        <li>✓ Premium Quality Products</li>
                        <li>✓ Cruelty-Free</li>
                        <li>✓ Handcrafted</li>
                    </ul>
                </div>
                <div id="SM" class="col order-last">
                    <ul class="social media  text-center">
                        <li>FOLLOW OUR SOCIAL MEDIA</li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-linkedin"></i></li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="row text-center">
                <h5>2022 &copy; Monique Dampies</h5>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style scoped>
a{
    text-decoration: none;
    color: white;
}

#footer {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    z-index: 2;
    /* padding-top: 10rem; */
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
