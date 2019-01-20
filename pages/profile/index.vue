<template>
    <v-layout align-center justify-center column>
        <v-card width="100%" class="pa-5">
            <v-flex>
                <v-flex text-xs-center>
                    <v-badge overlap color='white'>
                        <v-icon dark color='#D50000' size='3em' slot='badge'>verified_user</v-icon>
                        <v-avatar
                        size='250'
                        >
                            <img src="/default_user_img.svg" :alt="user.username">
                        </v-avatar>
                    </v-badge>
                </v-flex>
                <v-flex text-xs-center>
                    <v-container grid-list-xs>
                        <h1>{{ user.username }} | {{ user.userType }}</h1>
                        <v-btn color='#D50000' class='white--text' to ='/profile/edit'>Edit Profile</v-btn>
                    </v-container>
                    <v-container grid-list-xs>
                        <h1 class='mb-4'>Credibility:</h1>
                        <v-progress-circular
                        size="100"
                        width="15"
                        max='10'
                        :value="user.rating * 10"
                        color="#D50000"
                        >
                        <h1>{{ user.rating }}</h1>
                        </v-progress-circular>
                    </v-container>
                    <!-- <v-container grid-list-xs>
                        <v-rating
                        v-model="user.rating"
                        background-color="indigo lighten-2"
                        color="#d50000"
                        half-increments='true'
                        length='10'
                        readonly
                        ></v-rating>
                    </v-container> -->
                </v-flex>
                <v-divider class='ma-5'></v-divider>
                <blockquote class="blockquote text-xs-center">
                    E-mail: {{ user.email }}
                </blockquote>
            </v-flex>
        </v-card>
    </v-layout>
</template>


<script>
    import Strapi from 'strapi-sdk-javascript/build/main'
    const apiUrl = process.env.API_URL || 'http://localhost:1337'
    const strapi = new Strapi(apiUrl)
    import { mapMutations } from 'vuex'
    export default {
        head: {
            title: 'Al-Dokkaan - Profile',
            meta: [
                { hid: 'description', name: 'description', content: 'Manage your Profile & Inventory.' }
            ]
        },
        middleware: ['auth'],
        computed: {
            user() {
                return this.$store.getters['auth/user']
            },
            token() {
                return this.$store.getters['auth/token']
            }
            // avatar() {
            //     return this.$store.getters['images/avatar'].avatars
            //
        }
        // async fetch({ store }) {
        //     store.commit('images/removeAvatar')
        //     const response = await strapi.request('post', '/graphql', {
        //         data: {
        //             query: `query{
        //                 avatars(where: {user: "${store.getters['auth/user']._id}"}){
        //                     image{
        //                         url
        //                     }
        //                 }
        //             }`
        //         }
        //     })
        //     store.commit('images/setAvatar', {
        //         ...response.data
        //     })
        // }
    }
</script>
