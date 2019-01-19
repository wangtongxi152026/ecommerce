<template>
    <carousel></carousel>
</template>

<script>
    import Carousel from '~/components/Carousel.vue'
    export default {
        head: {
            title: 'Al-Dokkaan - About Us',
            meta: [
                { hid: 'description', name: 'description', content: 'Know about our services & team members here.' }
            ]
        },
        components: {
            Carousel
        }
    }
</script>

