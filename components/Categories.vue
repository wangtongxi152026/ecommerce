<template>
    <v-layout column>
        <v-flex xs12 sm8 md6>
            <v-container grid-list-lg fluid>
                <v-layout row wrap>
                    <v-flex v-for="(cat, key) in categories" :key="key" xs12 md6 lg4>
                        <v-card raised hover style='border-radius: 15px;'>
                            <v-responsive>
                                <v-img
                                :src='cat.img'
                                :aspect-ratio="16/9"
                                :alt='cat.name'
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
                            <v-card-title primary-title>
                                <h3 class="headline mb-0">{{ cat.name }}</h3>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn :to="cat.link" style='border-radius: 15px;' color='#D50000' class='white--text' :aria-label="`View all ${cat.name}`" value='Browse' hover block raised>Browse</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    name: 'Shoes',
                    img: '/images/categories/shoes.webp',
                    link: '/category/Shoes'
                },
                {
                    name: 'Shirts',
                    img: '/images/categories/apparel-top.webp',
                    link: '/category/Shirts'
                },
                {
                    name: 'Pants',
                    img: '/images/categories/apparel-bottom.webp',
                    link: '/category/Pants'
                },
                {
                    name: 'Smartphones',
                    img: '/images/categories/smartphone.webp',
                    link: '/category/Smartphones'
                },
                {
                    name: 'Laptops',
                    img: '/images/categories/laptop-pc.webp',
                    link: '/category/Laptops'
                },
                {
                    name: 'Desktops',
                    img: '/images/categories/desktop-pc.webp',
                    link: '/category/Desktops'
                }
            ]
        }
    }
}
</script>



