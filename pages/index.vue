<template>
    <v-layout column justify-center align-center>
        <v-responsive width='100%'>
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
        </v-responsive>
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

