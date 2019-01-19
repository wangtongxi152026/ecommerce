<template>
    <v-layout column>
        <v-container grid-list-lg fluid>
            <v-card hover max-width='500px'>
                <v-card-media>
                    <v-img
                    src='/default_item_img.svg'
                    :aspect-ratio="1.1"
                    class='white'
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
                </v-card-media>
                <v-card-title class='headline' primary-title>
                    {{ item.name }}
                </v-card-title>
                <v-divider class='mx-5' color="#D50000"></v-divider>
                <v-card-text>
                    Amount: {{ item.amount }} <br>Price: {{ item.price }}
                </v-card-text>
            </v-card>
        </v-container>
    </v-layout>
</template>

<script>
    import Strapi from 'strapi-sdk-javascript/build/main'
    const apiUrl = process.env.API_URL || 'http://localhost:1337'
    const strapi = new Strapi(apiUrl)
    export default {
        data() {
            return {
                item: '',
                err: ''
            }
    },
    async created() {
        try  {
            const response = await strapi.request('post', '/graphql', {
                data: {
                    query: `query{
                        items(where: {id: "${this.$route.params.id}"}){
                            _id
                            name
                            price
                            amount
                        }
                    }`
                }
            })
            this.item = response.data.items[0]
        } catch(err) {
            return this.err = err
        }
    }
}
</script>
