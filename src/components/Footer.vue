<template>
    <v-footer color="primary lighten-1" padless>
        <v-row justify="center" no-gutters>
            <div class="container">
                <div class="row">
                    <div class="col order-last">
                        <ul class="b">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Coca Cola</li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class="b">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Coca Cola</li>
                        </ul>
                    </div>
                    <div class="col order-first">
                        <ul class="b">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Coca Cola</li>
                        </ul>
                    </div>
                </div>
            </div>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: 'footer'
};
</script>

<style scoped>
ul.b {
  list-style-type: square;
}
</style>
