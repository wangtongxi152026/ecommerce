<template>
    <v-container>
        <v-card class='mb-5'>
            <v-carousel hide-controls hide-delimiters interval='5000'>
                <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                >
                </v-carousel-item>
            </v-carousel>
        </v-card>
        <v-card class='mt-5 pa-3'>
            <v-timeline>
                <v-timeline-item
                v-for="n in 4"
                :key="n"
                color="#D50000"
                large
                >
                    <span slot="opposite">Tus eu perfecto</span>
                    <v-card hover flat>
                        <v-card-title class="headline">Title</v-card-title>
                            <v-card-text>
                            Here goes some long text describing something important we do!
                            </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-card>
    </v-container>
</template>


<script>
    export default {
        name: 'Carousel',
        data() {
            return {
                items: [
                    { src: 'https://images.unsplash.com/photo-1545239403-734e488cad95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
                    { src: 'https://images.unsplash.com/photo-1545254930-06c375090cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
                    { src: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' },
                    { src: 'https://images.unsplash.com/photo-1545210693-b30849045d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }
                ]
            }
        }
    }
</script>
