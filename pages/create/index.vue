<template>
    <v-flex>
        <v-stepper v-model="e5">
            <v-stepper-step color='#D50000' :complete="e5 > 1" step="1">
                Product Category
                <small>What type of product are you posting?</small>
            </v-stepper-step>
            <v-stepper-content step="1">
                <v-form @submit.stop.prevent='getProducts'>
                    <v-card class='transparent mb-5' flat>
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-radio-group row v-model='category'>
                                    <v-radio
                                    v-for="(cat, index) in catGroup"
                                    color='#D50000'
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
                                color='#D50000'
                                box
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
                        <v-card-actions>
							<v-spacer></v-spacer>
                            <v-btn class='white--text' large ripple hover color='#D50000' type='submit' :loading='loading'>Search!</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-stepper-content>
            <v-stepper-step color='#D50000' :complete="e5 > 2" step="2">
                Selected a Product
                <small>Choose which product you wish to sell</small>
            </v-stepper-step>
            <v-stepper-content step="2">
                <v-layout row wrap>
                    <v-flex xs12 sm6 md6 lg3 v-for='(pr, index) in products' :key='index'>
                        <v-card style='border-radius: 15px;' hover class='mx-3 my-3' min-width="300">
                            <v-card-title class='mx-auto'>
                                <h3>{{ pr.product_name }}</h3>
                            </v-card-title>
                            <v-card-media
                            contain
                            height="200"
                            :aspect_ratio='16/9'
                            :src="'http://localhost:1337'+ pr.product_image.url">
                                <v-layout
                                slot="placeholder"
                                fill-height
                                align-center
                                justify-center
                                ma-0
                                >
                                    <v-progress-circular indeterminate color="#D50000"></v-progress-circular>
                                </v-layout>
                            </v-card-media>
                            <v-card-text>
                                Release Date: {{ pr.product_year }}
                            </v-card-text>
                            <v-card-actions>
                                <v-btn  style='border-radius: 15px;' class='white--text' block color="#D50000" :loading='loading' @click='selectedItem(pr._id, pr.product_name)'>Select</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-stepper-content>
            <v-stepper-step color='#D50000' :complete='e5 > 3' step="3">
                Enter additional information
                <small>Supply us with more info to display your item correctly</small>
            </v-stepper-step>
            <v-stepper-content step="3">
                <v-card class='transparent' flat>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-textarea
                            v-model='additionalInfo'
                            color='#D50000'
                            label='Additional Information'
                            persistent-hint
                            type='text'
                            prepend-icon="description"
                            hint='Mention any remarks or comments you have about the product'
                            box
                            >
                            </v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            v-model="price"
                            :rules='priceRules'
                            color='#D50000'
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
                            thumb-color='#D50000'
                            max='30'
                            step='1'
                            type='number'
                            ></v-slider>
                        </v-flex>
                    </v-layout>
                    <v-card-actions>
                        <v-btn class='white--text' large color="#D50000" :loading='loading' @click='createItemEntity'>Proceed</v-btn>
                    </v-card-actions>
                </v-card>
            </v-stepper-content>
            <v-stepper-step color='#D50000' :complete='e5 > 4' step="4">
                Upload item picture
                <small>Make sure to take a beautiful shot!</small>
            </v-stepper-step>
            <v-stepper-content step="4">
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
                        <v-btn raised ripple color='#D50000' outline flat @click='clearImage' v-if='image'><v-icon>delete_forever</v-icon></v-btn>
                    </v-card-actions>
                </v-card>
                <v-btn class='white--text' color="#D50000" large @click="uploadImage(entity_id)" v-if='image'>Proceed</v-btn>
            </v-stepper-content>

            <v-stepper-step color='#D50000' step="5">Congratulations!</v-stepper-step>
            <v-stepper-content step="5">
                <v-card class="mb-5 transparent" flat>
                    <v-card-actions class='justify-center'>
                        <v-btn class='white--text' large color='#D50000' :to='"/category/" + subCat'>Check your item!</v-btn>
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
    export default {
        head: {
            title: 'Al-Dokkaan - Create Item',
            meta: [
                { hid: 'description', name: 'description', content: 'Create an advertisement for your product.' }
            ]
        },
        middleware: ['auth', 'tokenLogout'],
        data() {
            return {
                e5: 1,
                loading: false,
                category: '',
                states: [
                    {catName: 'Electronics', children: ['Smartphones', 'Laptops', 'Desktops']},
                    {catName: 'Clothes', children: ['Shoes', 'Shirts', 'Pants']}
                ],
                catGroup: ['Electronics', 'Clothes'],
                subCat: '',
                products: {},
                selectedProductId: '',
                selectedProductName: '',
                amount: 1,
                amountRules: [
                    v => !!v || 'Amount is required',
                    v => v >= 0 || 'Must be at least 1 item!'
                ],
                price: 10,
                priceRules: [
                    v => !!v || 'Price is required',
                    v => !!v >= 1 || 'Not a valid number!'
                ],
                additionalInfo: '',
                user: this.$store.getters['auth/user'],
                token: this.$store.getters['auth/token'],
                entity_id: '',
                image: '',
                imageName: '',
                imageUrl: '',
            }
        },
        computed: {
            state() { if (this.category === 'Electronics') {return 0} else if (this.category === 'Clothes') { return 1}},
        },
        methods: {
            async getProducts() {
                try {
                    this.loading = true
                    const productsResponse = await strapi.request('post', '/graphql', {
                        data: {
                            query: `query{
                                products(where: {product_category: "${this.subCat}"}){
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
                    this.$toast.show(`${this.subCat}`,
                    {
                        icon: 'label',
                        duration: 1500
                    })
                    this.e5 = 2
                } catch(err) {
                    this.loading = false
                    this.$toast.error(err.message || 'Failed to load products!',
                    {
                        icon: 'error',
                        duration: 1500
                    })
                }
            },
            selectedItem(item_id, item_name) {
                this.loading = true
                this.selectedProductId = item_id
                this.selectedProductName = item_name
                setTimeout(() => {
                    this.$toast.show(`${item_name}`, {
                        icon: 'done',
                        duration: 1500
                    })
                    this.e5 = 3
                    this.loading = false
                }, 1500);
            },
            async createItemEntity() {
                try{
                    this.loading = true
                    const itemData = { name: this.selectedProductName, user: this.user, category: this.subCat, products: this.selectedProductId, additional_information: this.additionalInfo, amount: this.amount, price: this.price  }
                    const entityResponse = await this.$axios.post('/items/', { headers: { Authorization: `Bearer ${this.token}`}, ...itemData })
                    this.$toast.show(`Successfully created entity`,
                    {
                        icon: 'done_all',
                        duration: 1500
                    })
                    this.entity_id = entityResponse.data._id
                    this.e5 = 4
                    this.loading = false
                } catch(err) {
                    this.$toast.error(err.message || 'Failed to create entity!',
                    {
                        icon: 'error',
                        duration: 1500
                    })
                    this.loading = false
                }
            },
            async uploadImage() {
                try {
                    this.loading = true
                    let image_object = new FormData()
                    image_object.append('refId', this.entity_id)
                    image_object.append('files', this.image)
                    image_object.append('ref', 'item')
                    image_object.append('field', 'image')
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
                                Authorization: `Bearer ${this.token}`
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
                    this.e5 = 5
                } catch(err) {
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
            }
        }
    }
</script>
