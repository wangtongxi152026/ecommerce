<template>
    <v-flex xs12>
        <v-form ref='form' @submit.stop.prevent='submit'>
            <v-card>
                <v-card-title class="headline font-weight-regular #D50000 white--text">Post an Item</v-card-title>
                <v-card-text>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-subheader class="pa-0">Enter the below fields to finish adding the item</v-subheader>
                        </v-flex>
                    </v-layout>

                    <!-- <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            v-model="name"
                            :rules='nameRules'
                            color='#00BCD4'
                            box
                            label='Item Name'
                            hint='Set the item name'
                            persistent-hint
                            prepend-icon="create"
                            type='text'
                            ></v-text-field>
                        </v-flex>
                    </v-layout> -->

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-radio-group row v-model='category'>
                                <v-radio
                                v-for="(cat, index) in catGroup"
                                color='#00BCD4'
                                :key="index"
                                :label="`${cat}`"
                                :value="`${cat}`"
                                ></v-radio>
                            </v-radio-group>
                        </v-flex>
                    </v-layout>

                    <v-layout row v-if='category'>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-autocomplete
                            v-model="subCat"
                            :rules='categoryRules'
                            color='#00BCD4'
                            box
                            chips
                            autofocus
                            hint="Choose a category for the item"
                            :items="states[state].children"
                            label="Category"
                            persistent-hint
                            prepend-icon="description"
                            type='text'
                            >
                            </v-autocomplete>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            v-model="price"
                            :rules='priceRules'
                            color='#00BCD4'
                            box
                            label='Price'
                            hint='Set the item price'
                            persistent-hint
                            prepend-icon='attach_money'
                            single-line
                            type="number"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-slider
                            v-model="amount"
                            :rules='amountRules'
                            label='How many are you selling?'
                            thumb-label='always'
                            thumb-color='#00BCD4'
                            max='30'
                            step='1'
                            type='number'
                            ></v-slider>
                        </v-flex>

                        <!-- <v-flex shrink style='width: 80px'>
                            <v-text-field
                            v-model="amount"
                            color='#00BCD4'
                            box
                            class="mt-0"
                            hide-details
                            max='30'
                            single-line
                            type="number"
                            ></v-text-field>
                        </v-flex> -->
                    </v-layout>

                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class='white--text' ripple hover color='error' @click='clear'>Clear</v-btn>
                    <v-btn class='white--text' ripple hover color='success' :loading='loading' type='submit'>Send</v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
        <v-dialog
        v-model="loading"
        persistent
        width="300">
            <v-card>
                <v-card-text>
                    Submitting...
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
    import axios from 'axios'
    export default {
        head: {
            title: 'Al-Dokkaan - Create Item',
            meta: [
                { hid: 'description', name: 'description', content: 'Create an advertisement for your product.' }
            ]
        },
        middleware: ['auth'],
        data () {
            return {
                // nameRules: [
                //     v => !!v || 'Item Name is required',
                //     v => (v.length <= 24) || 'Name too long!'
                // ],
                categoryRules: [
                    v => !!v || 'Category is required'
                ],
                amountRules: [
                    v => !!v || 'Amount is required',
                    v => v >= 0 || 'Must be at least 1 item!'
                ],
                priceRules: [
                    v => !!v || 'Price is required',
                    v => !!v >= 1 || 'Not a valid number!'
                ],
                loading: false,
                states: [
                    {catName: 'Electronics', children: ['Smartphones', 'Laptops', 'Desktops']},
                    {catName: 'Clothes', children: ['Shoes', 'Shirts', 'Pants']}
                ],
                // name: '',
                category: '',
                subCat: '',
                catGroup: ['Electronics', 'Clothes'],
                amount: 1,
                price: 10,
                // imageUrl: '',
                // image: '',
                // imageName: '',
                user: this.$store.getters['auth/user'],
                token: this.$store.getters['auth/token'],
                linkedProduct: ''
            }
        },
        computed: {
            state() { if (this.category === 'Electronics') {return 0} else if (this.category === 'Clothes') { return 1}},
        },
        methods: {
            async getProducts(products_category) {
                try {
                    this.loading = true
                    const productsResponse = await strapi.request('post', '/graphql', {
                        data: {
                            query: `query{
                                products(where: {product_category: "${products_category}"}){
                                    _id
                                    product_name
                                    product_year
                                    product_image{
                                        url
                                    }
                                }
                            }`
                        }
                    })
                    this.products = productsResponse.data.products
                    this.loading = false
                    this.$toast.success('Success! Loaded Products.', 
                    {
                        icon: 'done',
                        duration: 1500
                    })
                } catch(err) {
                    this.loading = false
                    this.$toast.error(err.message || 'Failed to load products!', 
                    {
                        icon: 'error',
                        duration: 1500
                    })
                }
            },
            async submit() {
                const itemData = { category: this.subCat, amount: this.amount, price: this.price, user: this.user, product: this.linkedProduct }
                try {
                    this.loading = true
                    const response = await axios.post('http://localhost:1337/items/', { headers: { Authorization: `Bearer ${this.token}`}, ...itemData })
                    this.loading = false
                    this.$toast.success('Success! Your post was created. Redirecting...', 
                    {
                        icon: 'done',
                        duration: 3500
                    })
                    setTimeout(() => {
                        this.$router.push('/category/' + this.subCat)
                    }, 4000);
                } catch(err) {
                    this.loading = true
                    let errText;
                    if (err.response.status === 403) {
                        this.loading = false
                        errText = 'Error! Try Logging in again.';
                        this.$toast.error('Error! Try Logging in again.', {
                            icon: 'error',
                            action : {
                                text : 'Close',
                                onClick : (e, toastObject) => {
                                    toastObject.goAway(0);
                                }
                            }
                        })
                    } else {
                        this.loading = false
                        errText = 'An error occurred.';
                    }
                    this.$toast.error(errText, {
                        icon: 'error',
                        action : {
                            text : 'Close',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        }
                    })
                }
            },
            clear() {
                this.name = '',
                this.category = '',
                this.amount = '1',
                this.price = '10',
                this.image = '',
                this.imageUrl = ''
            }
        }
    }
</script>

