<template>
    <v-flex>
        <v-stepper v-model="e6" vertical>
            <v-stepper-step color='#D50000' :complete="e6 > 1" step="1">
                Register your credentials
                <small>Username, E-mail, Password</small>
            </v-stepper-step>
            <v-stepper-content step="1">
                <v-form ref='form' lazy-validation @submit.stop.prevent='registerUsingCredentials'>
                    <v-card class="mb-5 px-2 py-5" flat>
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-text-field
                                v-model="username"
                                :rules='usernameRules'
                                label="Username"
                                prepend-icon="person"
                                required
                                color='orange'
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
                                color='orange'
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
                                color='orange'
                                type="password"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-btn v-if='username && email && password' class='white--text mt-5' color='#D50000' large :loading='loading' value='Proceed' aria-label='Press to submit login credentials!' hover ripple type="submit">Proceed</v-btn>
                </v-form>
            </v-stepper-content>

            <v-stepper-step color='#D50000' :complete="e6 > 2" step="2">
                User Type
                <small>Select your special attribute in the community</small>
            </v-stepper-step>
            <v-stepper-content step="2">
                <v-card class="mb-5" flat>
                    <v-radio-group v-model="userType">
                        <v-layout row wrap xs12 sm6>
                            <v-card hover class='grey lighten-3 mx-3 mt-3' width='200' height='250'>
                                <v-card-title>
                                    <v-icon class='mr-2' large left>group</v-icon>
                                    <span class="title font-weight-light">Shopper</span>
                                </v-card-title>
                                <v-card-text>
                                    Buy items from others safely & securely
                                </v-card-text>
                                <v-card-actions>
                                    <v-radio color='#D50000' label="Shopper" value="Shopper"></v-radio>
                                </v-card-actions>
                            </v-card>
                            <v-card hover class='grey lighten-3 mx-3 mt-3' width='200' height='250'>
                                <v-card-title>
                                    <v-icon class='mr-2' large left>local_atm</v-icon>
                                    <span class="title font-weight-light">Retailer</span>
                                </v-card-title>
                                <v-card-text>
                                    Sell directly to consumers at a limited amount
                                </v-card-text>
                                <v-card-actions>
                                    <v-radio color='#D50000' label="Retailer" value="Retailer"></v-radio>
                                </v-card-actions>
                            </v-card>
                            <v-card hover class='grey lighten-3 mx-3 mt-3' width='200' height='250'>
                                <v-card-title>
                                    <v-icon class='mr-2' large left>build</v-icon>
                                    <span class="title font-weight-light">Craftsman</span>
                                </v-card-title>
                                <v-card-text>
                                    Create your own independant brand & product lines
                                </v-card-text>
                                <v-card-actions>
                                    <v-radio color='#D50000' label="Craftsman" value="Craftsman"></v-radio>
                                </v-card-actions>
                            </v-card>
                            <v-card hover class='grey lighten-3 mx-3 mt-3' width='200' height='250'>
                                <v-card-title>
                                    <v-icon class='mr-2' large left>store</v-icon>
                                    <span class="title font-weight-light">Wholesaler</span>
                                </v-card-title>
                                <v-card-text>
                                    Sell at large quantities to either consumers or to companies & other retailers
                                </v-card-text>
                                <v-card-actions>
                                    <v-radio color='#D50000' label="Wholesaler" value="Wholesaler"></v-radio>
                                </v-card-actions>
                            </v-card>
                        </v-layout>
                    </v-radio-group>
                </v-card>
                <v-btn class='white--text' color="#D50000" large @click="changeUserType">Proceed</v-btn>
            </v-stepper-content>

            <v-stepper-step color='#D50000' :complete="e6 > 3" step="3">
                Upload a profile picture
                <small>Show us that beautiful smile :)</small>
            </v-stepper-step>
            <v-stepper-content step="3">
                <v-card color="grey lighten-1" class="mb-5 py-5 px-3">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <input type="file" style='display: none;' ref='fileInput' accept='image/*' @change='onFilePicked'>
                        </v-flex>
                    </v-layout>
                    <v-card-media>
                        <v-layout row v-if='imageUrl'>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-img :src="imageUrl" :aspect-ratio='16/9'>
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
                            </v-flex>
                        </v-layout>
                    </v-card-media>
                    <v-card-actions class='justify-center'>
                        <v-btn class='white--text' raised color='#D50000' @click='onPickFile' v-if='!image'>Select Image</v-btn>
                        <v-btn class='white--text' raised color='#D50000' @click='clearImage' v-if='image'><v-icon>delete_forever</v-icon></v-btn>
                    </v-card-actions>
                </v-card>
                <v-btn class='white--text' color="#D50000" large @click="uploadImage" v-if='image'>Proceed</v-btn>
                <v-btn flat @click='e6 = 2'>Back</v-btn>
            </v-stepper-content>

            <v-stepper-step color='#D50000' :complete="e6 > 4" step="4">
                Terms & Conditions
                <small>Must agree!</small>
            </v-stepper-step>
            <v-stepper-content step="4">
                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                <v-checkbox
                color='#D50000'
                :rules='termsRules'
                label='Do you agree to the Terms and Conditions?'
                v-model='termsConsent'></v-checkbox>
                <v-btn class='white--text' color="#D50000" large @click="e6 = 5" v-if='termsConsent'>Proceed</v-btn>
                <v-btn flat @click='e6 = 3'>Back</v-btn>
            </v-stepper-content>

            <v-stepper-step color='#D50000' step="5">Congratulations!</v-stepper-step>
            <v-stepper-content step="5">
                <v-card class="mb-5" height="200px">
                    You are done creating an account, now let's get to buying!
                    <v-card-actions>
                        <v-btn class='white--text' large color='#D50000' to='/profile'>Profile</v-btn>
                    </v-card-actions>
                </v-card>
            </v-stepper-content>
        </v-stepper>
        <v-dialog
        v-model="loading"
        persistent
        width="300">
            <v-card>
                <v-card-text>
                    Loading...
                    <v-progress-linear
                        indeterminate
                        color="#D50000"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
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
                e6: 1,
                email: '',
                userType: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+?\.[a-zA-Z]+./.test(v) || 'Not a valid Email!'
                ],
                username: '',
                usernameRules: [
                    v => !!v || 'Username is required'
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 8) || 'Password must contain 8 or more characters'
                ],
                termsConsent: false,
                termsRules: [
                    v => !!v || 'Must give consent!'
                ],
                loading: false,
                image: '',
                imageName: '',
                imageUrl: '',
                login_res: '',
                userType: ''
            }
        },
        methods: {
            async registerUsingCredentials() {
                try {
                    this.loading = true
                    const response = await strapi.register(
                        this.username,
                        this.email,
                        this.password
                    )
                    this.$toast.success('Registration successfull! Logging in...',
                    {
                        icon: 'how_to_reg',
                        duration: 1000
                    })
                    this.loading = false
                    this.loginToCompleteRegistration()
                    // this.$router.push('/profile')
                } catch (err) {
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
                    this.loading = false
                }
            },
            async loginToCompleteRegistration() {
                try {
                    this.loading = true
                    const loginResponse = await strapi.login(this.username, this.password)
                    this.login_res = loginResponse
                    this.setUser(loginResponse.user)
                    this.setToken(loginResponse.jwt)
                    this.$toast.success('Successfully logged in. Please, finish registration...',
                    {
                        icon: 'lock_open',
                        duration: 2000
                    })
                    this.e6 = 2
                    this.loading = false
                } catch (err) {
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
                    this.loading = false
                }
            },
            async changeUserType() {
                try {
                    this.loading = true
                    const user_type = this.userType
                    this.$store.commit('auth/updateUserType', user_type)
                    // const user_typeResponse = await strapi.request('put', '/users/' + this.login_res.user._id, { headers: {Authorization: `Bearer ${this.login_res.jwt}`}, user_type})
                    const user_typeResponse = await this.$axios.put('/users/' + this.login_res.user._id, { headers: {Authorization: `Bearer ${this.login_res.jwt}`}, userType: user_type})
                    this.$toast.success('Successfully logged in. Please, finish registration...',
                    {
                        icon: 'lock_open',
                        duration: 2000
                    })
                    this.e6 = 3
                    this.loading = false
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
                    this.loading = false
                }

            },
            async uploadImage() {
                try {
                    this.loading = true
                    let image_object = new FormData()
                    image_object.append('refId', this.login_res.user._id)
                    image_object.append('files', this.image)
                    image_object.append('ref', 'user')
                    image_object.append('source', 'users-permissions')
                    image_object.append('field', 'avatar')
                    const uploadResponse = await this.$axios(
                        {
                            async: true,
                            crossDomain: true,
                            processData: false,
                            contentType: false,
                            mimeType: 'multipart/form-data',
                            method: 'POST',
                            url: apiUrl + '/upload',
                            headers: {
                                Authorization: `Bearer ${this.login_res.jwt}`
                            },
                            data: image_object
                        }
                    )
                    this.$toast.success('Successfully uploaded picture!',
                    {
                        icon: 'done',
                        duration: 2000
                    })
                    this.loading = false
                    this.e6 = 4
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
                    this.loading = false
                }
            },
            clear() {
                this.email = '',
                this.password = ''
            },
            clearImage() {
                this.image = '',
                this.imageName = '',
                this.imageUrl = ''
            },
            onPickFile() {
                this.$refs.fileInput.click()
            },
            onFilePicked(event) {
                const files = event.target.files
                let filename = files[0].name
                if (filename.lastIndexOf('.') <= 0) {
                    return alert('Please add a valid file!');
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.imageUrl = fileReader.result
                })
                fileReader.readAsDataURL(files[0])
                this.image = files[0]
                this.imageName = filename
            },
            ...mapMutations({
                setUser: 'auth/setUser',
                setToken: 'auth/setToken',
                setAvatar: 'images/setAvatar'
            })
        }
    }
</script>

