<template>
    <v-flex order-xs12>
        <v-form ref='form' @submit.stop.prevent='submit'>
            <v-card class='py-5 pa-5'>
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-card-title primary-title>
                            <h1>Login</h1>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-text-field
                        v-model="email"
                        :rules='emailRules'
                        label="Username or E-mail"
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
                <!-- <v-checkbox
                color='red'
                label='Keep me logged in'
                v-model='stayLoggedIn'></v-checkbox> -->
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3 text-xs-center>
                        <span>New Here?
                            <v-btn class='white--text' value='Register' aria-label='Go to the registration' hover raised color='secondary' to='/register'>
                                Register
                            </v-btn>
                        </span>
                        <v-spacer></v-spacer>
                        <v-btn class='white--text' color='#3b5998' :loading='fbLoading' large hover ripple href='http://localhost:1337/connect/facebook'><v-icon>account_circle</v-icon></v-btn>
                        <v-btn color='#D50000' :loading='loading' class='white--text' aria-label='Press to login!' large hover ripple value='Login' type="submit">Login</v-btn>
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
    import axios from 'axios'
    import { mapMutations } from 'vuex'
    export default {
        head: {
            title: 'Al-Dokkaan - Login',
            meta: [
                { hid: 'description', name: 'description', content: 'Login to start Buying & Selling.' }
            ]
        },
        middleware: ['redirectFromRegister'],
        data() {
            return {
                password: '',
                passwordRules: [
                    v => !!v || 'Please enter your password!'
                    // v => (v && v.length >= 8) || 'Password must contain 8 or more characters'
                ],
                email: '',
                emailRules: [
                    v => !!v || 'Please enter your username or email!',
                    // v => /.+@.+/.test(v) || 'Not a valid Email!'
                ],
                // stayLoggedIn: false,
                loading: false,
                fbLoading: false
            }
        },
        methods: {
            async submit() {
                this.loading = true
                try {
                        const response = await strapi.login(this.email, this.password)
                        this.setUser(response.user)
                        this.setToken(response.jwt)
                        this.$router.go(-1)
                        this.$toast.success('Successfully logged in!', 
                        {
                            icon: 'lock_open',
                            duration: 2000
                        })
                    } catch (err) {
                        this.loading = false
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
                },
            ...mapMutations({
                    setUser: 'auth/setUser',
                    setToken: 'auth/setToken'
                })
            }
        }
</script>

