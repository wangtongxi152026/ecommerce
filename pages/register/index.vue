<template>
    <v-flex order-xs12>
        <v-form ref='form' lazy-validation @submit.stop.prevent='submit'>
            <v-card class='pa-5'>
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-card-title primary-title>
                            <h1>Register</h1>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <!-- <v-container>
                    <v-layout>
                        <v-flex xs3>
                            <v-text-field
                            v-model="firstName"
                            :rules='firstNameRules'
                            label="First Name"
                            prepend-icon="person"
                            required
                            color='#00BCD4'
                            type="text"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                            <v-text-field
                            v-model="lastName"
                            :rules='lastNameRules'
                            label="Last Name"
                            prepend-icon="person"
                            required
                            color='#00BCD4'
                            type="text"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container> -->
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-text-field
                        v-model="username"
                        :rules='usernameRules'
                        label="Username"
                        prepend-icon="person"
                        required
                        color='#00BCD4'
                        type="text"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-text-field
                        v-model="email"
                        :rules='emailRules'
                        label="E-mail"
                        prepend-icon="alternate_email"
                        required
                        color='#00BCD4'
                        type="text"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-text-field
                        v-model="password"
                        :rules='passwordRules'
                        label="Password"
                        prepend-icon="lock"
                        required
                        color='#00BCD4'
                        type="password"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-checkbox
                        color='#00BCD4'
                        :rules='termsRules'
                        label='Do you agree to the Terms and Conditions?'
                        v-model='termsConsent'></v-checkbox>
                        <v-btn class='white--text' color='#D50000' :loading='loading' value='Register' aria-label='Press to register!' block large hover ripple type="submit">Register</v-btn>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-form>
    </v-flex>
</template>

<script>
    import Strapi from 'strapi-sdk-javascript/build/main'
    const apiUrl = process.env.API_URL || 'http://localhost:1337'
    const strapi = new Strapi(apiUrl)
    import { mapMutations } from 'vuex'
    export default {
        head: {
            title: 'Al-Dokkaan - Register',
            meta: [
                { hid: 'description', name: 'description', content: 'Register an account.' }
            ]
        },
        middleware: ['redirectFromRegister'],
        data() {
            return {
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'Not a valid Email!'
                ],
                // v => (v && v.length >= 8) || 'Password must contain 8 or more characters'
                username: '',
                usernameRules: [
                    v => !!v || 'Username is required'
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'Password is required'
                ],
                termsConsent: false,
                termsRules: [
                    v => !!v || 'Must give consent!'
                ],
                loading: false
            }
        },
        methods: {
            async submit() {
                try {
                    this.loading = true
                    const response = await strapi.register(
                        this.username,
                        this.email,
                        this.password
                    )
                    this.$toast.success('Account Created!', 
                    {
                        icon: 'done',
                        duration: 2000
                    })
                    this.loading = false
                    this.$router.push('/profile')
                } catch (err) {
                    this.$toast.error(err.message || 'An error occurred.', {
                        icon: 'error',
                        action : {
                            text : 'Close',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        }
                    })
                    this.loading = false
                }
            },
            clear() {
                this.email = '',
                this.password = ''
            }
        }
    }
</script>

