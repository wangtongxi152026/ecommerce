<template>
    <v-card>
        {{ message }}
    </v-card>
</template>

<script>
import socket from '../../plugins/socket.io'
export default {
    data() {
        return {
            message: ''
        }
    },
    mounted() {
        socket.on('hello', (res) => this.message = JSON.parse(res))
    }
}
</script>

