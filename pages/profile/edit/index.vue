<template>
    <v-layout column align-center justify-center>
        <v-container grid-list-lg fluid>
            <v-card v-if='items.length < 1'>
                <v-card-title primary-title>
                    <h1>Oops! No items yet :(</h1>
                    <v-spacer></v-spacer>
                    <v-btn centered class='white--text' color='#D50000' to='/create'>Create Advertisement <v-icon>create</v-icon></v-btn>
                </v-card-title>
            </v-card>
            <v-layout row wrap v-else>
                <v-flex v-for='(item, index) in items' :key='index' xs12 sm6 md4 lg3 text-xs-center>
                    <v-card hover max-width='500px'>
                        <v-card-media>
                            <v-img
                            :src='"http://localhost:1337" + item.image.url'
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
                        <v-card-title class='headline font-weight-bold'>
                            {{ item.name }}
                        </v-card-title>
                        <v-divider class='mx-5' color="#D50000"></v-divider>
                        <v-card-text>
                            Amount: {{ item.amount }} <br>Price: {{ item.price }} - {{ item.category }}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class='white--text' block ripple color="green" :to='"/profile/edit/item/" + item._id'><v-icon>edit</v-icon></v-btn>
                            <v-spacer></v-spacer>
                            <v-btn class='white--text' block ripple color="#D50000" @click='deleteItem(item._id, index)'><v-icon>delete</v-icon></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
    //TODO: Implement user items to be stored in vuex
    import Strapi from 'strapi-sdk-javascript/build/main'
    const apiUrl = process.env.API_URL || 'http://localhost:1337'
    const strapi = new Strapi(apiUrl)
    export default {

        head: {
            title: 'Al-Dokkaan - Profile | Edit',
            meta: [
                { hid: 'description', name: 'description', content: 'Edit your Information.' }
            ]
        },

        data() {
            return {
                items: [],
                err: '',
            }
        },

        methods: {
            async deleteItem(id, index) {
                try {
                    const response = await strapi.request('delete', '/items/' + id)
                    this.items.splice(index,1)
                    this.$toast.success('Successfully deleted item.', {icon: 'done', duration: 2000})
                } catch (err) {
                    this.$toast.error(err.message || 'Item deletion failed!', {icon: 'error', duration: 3000})
                    this.err = err;
                }
            }
        },

        computed: {
            user() {
                return this.$store.getters['auth/user']
            }
        },

        async created() {
            try  {
                const response = await strapi.request('post', '/graphql', {
                    data: {
                        query: `query{
                            items(where: {user: "${this.$store.getters['auth/user']._id}"}){
                                _id
                                name
                                price
                                amount
                                category
                                image{
                                    url
                                }
                            }
                        }`
                    }
                })
                response.data.items.forEach(item => this.items.push(item))
            } catch(err) {
                return this.err = err
            }
        }

    }
</script>
