<template>
    <v-layout column justify-center align-center>
        <v-responsive width='100%'>
            <v-parallax
            id='responsive_header'
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
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23ff0000'/%3E%3Cstop offset='1' stop-color='%237d12ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23000000' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
</style>


