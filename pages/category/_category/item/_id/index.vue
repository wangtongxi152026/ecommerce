<template>
    <h1>{{ item }}</h1>
</template>

<script>
    import Strapi from 'strapi-sdk-javascript/build/main'
    const apiUrl = process.env.API_URL || 'http://localhost:1337'
    const strapi = new Strapi(apiUrl)
    export default {
        data() {
            return {
                item: '',
                err: '',
                itemId: this.$route.params.id
            }
    },
    async created() {
        try  {
            const response = await strapi.request('post', '/graphql', {
                data: {
                    query: `query{
                        items(where: {_id: "${this.itemId}"}){
                            _id
                            name
                            price
                            amount
                            user{
                                _id
                                username
                                email
                            }
                        }
                    }`
                }
            })
            this.item = response.data.items
        } catch(err) {
            return this.err = err
        }
    }
}
</script>
