<template>
    <v-layout column justify-center align-center>
        <v-responsive width='100%' id='responsive_header'>
            <v-parallax
            style='border: none;'
            height='600'
            dark
            >
                <v-layout
                align-center
                column
                justify-center
                >
                <h1 class="display-2 font-weight-thin mb-3">Al-Dokkaan</h1>
                <h4 class="subheading">1000 stores in your pocket - Buy & Sell Securely!</h4>
                <v-btn to='/register' color='#D50000' class='white--text px-5' round red raised ripple large>Begin your journey</v-btn>
                </v-layout>
            </v-parallax>
        </v-responsive>
        <!-- <v-responsive width='100%'>
            <v-img
            dark
            height='640'
            src='/images/banner.webp'
            alt='Mainpage'
            :aspect-ratio='16/9'
            >
                <v-layout
                slot="placeholder"
                fill-height
                align-center
                justify-center
                ma-0
                >
                    <v-progress-circular indeterminate color="#D50000"></v-progress-circular>
                </v-layout>
            </v-img>
        </v-responsive> -->
        <categories class='my-5'/> 
    </v-layout>
</template>

<script>
    import Categories from '~/components/Categories.vue'
    export default {
        head: {
            title: 'Al-Dokkaan - Buy & Sell Securely!',
            meta: [
                { hid: 'description', name: 'description', content: '1000 stores in your pocket - Buy & Sell Securely!' }
            ]
        },
        components: {
            Categories
        }
    }
</script>

<style scoped>
#responsive_header{
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg %3E%3Cpolygon fill='%23b30707' points='100 57.1 64 93.1 71.5 100.6 100 72.1'/%3E%3Cpolygon fill='%23d90909' points='100 57.1 100 72.1 128.6 100.6 136.1 93.1'/%3E%3Cpolygon fill='%23b30707' points='100 163.2 100 178.2 170.7 107.5 170.8 92.4'/%3E%3Cpolygon fill='%23d90909' points='100 163.2 29.2 92.5 29.2 107.5 100 178.2'/%3E%3Cpath fill='%23ff0a0a' d='M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z'/%3E%3Cpolygon fill='%23717171' points='0 157.1 0 172.1 28.6 200.6 36.1 193.1'/%3E%3Cpolygon fill='%23898989' points='70.7 200 70.8 192.4 63.2 200'/%3E%3Cpolygon fill='%23a1a1a1' points='27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5'/%3E%3Cpolygon fill='%23898989' points='200 157.1 164 193.1 171.5 200.6 200 172.1'/%3E%3Cpolygon fill='%23717171' points='136.7 200 129.2 192.5 129.2 200'/%3E%3Cpolygon fill='%23a1a1a1' points='172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200'/%3E%3Cpolygon fill='%23717171' points='129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0'/%3E%3Cpolygon fill='%23a1a1a1' points='200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2'/%3E%3Cpolygon fill='%23898989' points='63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0'/%3E%3Cpolygon fill='%23a1a1a1' points='0 63.2 63.2 0 27.8 0 0 27.8'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat;
    background-attachment: fixed;
}
</style>


