<template>
    <v-card>
        <v-card class='pa-5'>
			<v-card class='pa-5' v-for='(chat, i) in chats' :key='i'>
				{{ chat }}
				<v-flex xs4 sm2 md1>
					<v-avatar slot='activator' size='36px'>
						<img :src="'http://localhost:1337' + chat.user.avatar.url" :alt="chat.user.username">
					</v-avatar>
				</v-flex>
			</v-card>
        </v-card>
    </v-card>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)
import { mapMutations } from 'vuex'
import socket from '~/plugins/socket.io'
export default {
    middleware: 'auth',
    data() {
        return {
            chats: [],
        }
	},
	async created() {
		try {
			const response = await strapi.request('post', '/graphql', {
				data: {
					query: `query{
						chats(where: {creater: "${this.$store.getters['auth/user']._id}"}){
							_id
							user{
								username
								_id
								avatar{
									url
								}
							}
							creater{
								username
								_id
								avatar{
									url
								}
							}
							conversation
						}
					}`
				}
			})
			this.chats = response.data.chats
		} catch(err) {
			this.$toast.error(err.message || 'An error occurred.', {
				icon: 'error',
				duration: 5000,
				action : {
					text : 'Close',
					onClick : (e, toastObject) => {
						toastObject.goAway(0);
					}
				}
			})
		}
	}
}
</script>

