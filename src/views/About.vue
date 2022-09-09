<template>
    <section>
        <div class="container">
            <div class="row">
                <h1 class="text-center mb-4">ABOUT US <br>
                    OUR MISSION</h1>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <p>At Art Mart we aim on promoting Art. We aspire to make a community for artists, painters,
                        sketchers
                        and anyone who aims on creating things. The core of our business is customer centricity and
                        community building.
                    </p>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <p>We wish to empower the artist in you by providing you with the most premium handcrafted Art
                        Supplies.
                        The most beautiful thing about Art is that it doesn't need words to display emotions and
                        statements.
                        In a country like ours with so much beauty and people with so much talent, we pioneer to bring
                        all
                        of the talented artists together and provide them with a space to freely express themselves
                        through
                        the World of Paintings, Drawings and Sketching of various forms of Media.

                        All our products are hand manufactured in India through skilled craftsmen across the country. We
                        aim
                        on promoting and improving the livelihoods of the artisans who build these supplies.

                    </p>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <strong>The pillars of our business are : </strong>
                    <ul>
                        <li>Providing quality Art Products to exude the best work of an Artist.</li>
                        <li>Building a Community of Artists, Students, Professionals and Individuals who are interested
                            in
                            Art.</li>
                        <li>Improving the livelihoods of Craftsmen, Artisans and Unfortunate who work to deliver the
                            best
                            quality of products to our customers.</li>
                        <li>Promoting culture, beauty and the originality of expressions through Art.</li>
                    </ul>

                </div>
            </div>
        </div>
    </section>
    <!-- <Footer id="footer" /> -->
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
    name: "about",
    components: {
        Footer
    }
}
</script>

<style scoped>

section{
    position: relative;
    top: -5rem;
}

#footer {
    position: relative;
    bottom: 10rem;
    padding-top: 16rem;
    z-index: -5;
}
.container {
    display: block;
    margin-top: 1rem;
    margin-right: auto;
    margin-left: auto;
    /* width: 50%; */
}

@media only screen and (min-width: 1075px) {
    .container {
        display: block;
        margin-top: 1rem;
        margin-right: auto;
        margin-left: auto;
        width: 50%;
    }
}


/* @media only screen and (max-width: 1075px) {
    p {
        padding-left: 10px;
        font-size: 1.15rem;
    }

    #img {
        padding-bottom: 4vh;
        text-align: center;
        justify-content: center;
    }

}

@media only screen and (max-width: 994px) {
    p {
        padding-left: 10px;
        font-size: 1.1rem;
    }

    #img {
        padding-bottom: 4vh;
    }
}

@media only screen and (max-width: 600px) {
    #about {
        text-align: start;
        justify-content: center;
    }

    #img {
        padding-bottom: 4vh;
    }

}

@media only screen and (max-width: 500px) {
    img {
        height: 55vh;
    }

}

@media only screen and (max-width: 470px) {

    p {
        padding-left: 10px;
        font-size: 1rem;
    }
}

@media only screen and (max-width: 372px) {
    img {
        height: 50vh;
    }
} */
</style>