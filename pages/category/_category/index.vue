<template>
    <v-layout column>
        <v-container grid-list-lg fluid>
                <v-card v-if='itemsList.length < 1'>
                    <v-card-title primary-title>
                        <h1>Oops! No items yet :(</h1>
                        <v-spacer></v-spacer>
                        <v-btn class='white--text' color='#D50000' to='/create'>Create Advertisement <v-icon>create</v-icon></v-btn>
                    </v-card-title>
                </v-card>
            <v-layout row wrap v-else>
                <v-flex v-for="(item, index) in itemsList" :key='index' xs12 sm6 md4 lg3>
                    <v-card hover>
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
                        <v-card-title class='headline font-weight-bold' primary-title>
                            {{ item.name }}
                        </v-card-title>
                        <v-divider class='mx-5' color="#D50000"></v-divider>
                        <v-card-text>
                            Amount: {{ item.amount }} <br>Price: {{ item.price }}
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <nuxt-link style='text-decoration:none;' :to='`/user/${item.user.username}`'>
                                <v-chip  color="#D50000" text-color="white">
                                    <v-avatar>
                                        <v-icon color='white'>account_circle</v-icon>
                                    </v-avatar>
                                    {{ item.user.username }}
                                </v-chip>
                            </nuxt-link>
                            <v-spacer></v-spacer>
                            <!-- <v-btn class='white--text' round ripple color="#D50000" :to='"/category/item/" + item._id'>View</v-btn> -->
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
    import Strapi from 'strapi-sdk-javascript/build/main'
    const apiUrl = process.env.API_URL || 'http://localhost:1337'
    const strapi = new Strapi(apiUrl)
    import { mapMutations } from 'vuex'
    export default {
        head: {
            title: 'Al-Dokkaan - Browse Category',
            meta: [
                { hid: 'description', name: 'description', content: 'Check out all the items listed.' }
            ]
        },
        computed: {
            itemsList() {
                return this.$store.getters['items/list']
            }
        },
        async fetch({ store, params }) {
            store.commit('items/emptyList')
            const response = await strapi.request('post', '/graphql', {
                data: {
                    query: `query{
                        items(where: {category: "${params.category}"}){
                            _id
                            name
                            price
                            amount
                            user{
                                _id
                                username
                                userType
                            }
                        }
                    }`
                }
            })
            response.data.items.forEach(item => {
                store.commit('items/add', {
                    id: item.id || item._id,
                    ...item
                })
            })
        }
    }
</script>
