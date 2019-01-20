<template>
    <v-flex xs12>
        <v-card>
            <v-parallax 
            src="https://images.unsplash.com/photo-1544547936-ee21de7a3bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            >
                <v-layout
                align-center
                column
                justify-center
                >
                <h1 class="display-3 font-weight-thin text-xs-center">Contact us!</h1>
                </v-layout>
            </v-parallax>
            <v-flex lg12 align-center justify-center>
                <v-form>
                    <v-card class='mt-5 mb-5 pa-5' flat tile>
                            <v-text-field v-model='name' type='text' :rules='nameRules' label='Name' color='#D50000' box></v-text-field>
                            <v-text-field v-model='email' type='email' :rules='emailRules' label='E-Mail' color='#D50000' box></v-text-field>
                            <v-textarea v-model='feedback' type='text' :rules='feedbackRules' label='Feedback...' color='#D50000' box auto-grow rows='5'></v-textarea>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class='white--text' ripple hover color='#D50000' @click='clear'>Clear</v-btn>
                            <v-btn class='white--text' ripple hover color='#00C853' :loading='loading' @click='submit'>Send</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-flex>
        </v-card>
    </v-flex>
</template>

<script>
    import Strapi from 'strapi-sdk-javascript/build/main'
    const apiUrl = process.env.API_URL || 'http://localhost:1337'
    const strapi = new Strapi(apiUrl)
    export default {
        head: {
            title: 'Al-Dokkaan - Contact',
            meta: [
                { hid: 'description', name: 'description', content: 'Contact us about the service or just say hello!' }
            ]
        },
        data() {
            return {
                name: '',
                nameRules: [
                    v => !!v || 'Please, enter your Name'
                ],
                email: '',
                emailRules: [
                    v => !!v || 'Please, enter your E-mail',
                    v => /.+@.+/.test(v) || 'Not a valid Email!'
                ],
                feedback: '',
                feedbackRules: [
                    v => !!v || 'Please, enter your Feedback'
                ],
                loading: false,
                error: '',
                token: this.$store.getters['auth/token']
            }
        },
        methods: {
            async submit() {
                const config = { headers: { Authorization: `Bearer ${this.token}`}}
                try {
                    this.loading = true
                    const response = await strapi.plugins['email'].services.email.send({
                        to: 'adilosama47@gmail.com',
                        from: this.email,
                        replyTo: 'adilosama47@yahoo.com',
                        subject: 'Feedback from: ' + this.name,
                        text: this.feedback,
                        html: `<p>this.feedback</p>`
                    }, config);
                    this.loading = false
                } catch(err) {
                    this.loading = false
                    this.error = err
                }
            },
            clear() {
                this.name = '',
                this.email = '',
                this.feedback = ''
            }
        }
    }
</script>

