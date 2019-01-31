<template>
    <v-container>
        <v-card class='mb-5'>
            <v-carousel hide-controls hide-delimiters interval='5000'>
                <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                >
                </v-carousel-item>
            </v-carousel>
        </v-card>
        <v-layout align-center>
            <v-item-group
            v-model="window"
            class="shrink mr-4"
            mandatory
            tag="v-flex">
                <v-item
                v-for="n in length"
                :key="n">
                    <div slot-scope="{ active, toggle }">
                        <v-btn
                            :input-value="active"
                            icon
                            outline
                            active-class="red red--text text--darken-4"
                            @click="toggle"
                        >
                            <v-icon>fiber_manual_record</v-icon>
                        </v-btn>
                    </div>
                </v-item>
            </v-item-group>
            <v-flex>
                <v-window
                v-model="window"
                class="elevation-1"
                vertical>
                    <v-window-item
                    v-for="n in length"
                    :key="n">
                        <v-card flat>
                            <v-card-text>
                                <v-layout align-center mb-3>
                                    <v-avatar color="grey" class="mr-3"></v-avatar>
                                    <strong class="title">Title {{ n }}</strong>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon>account_circle</v-icon>
                                    </v-btn>
                                </v-layout>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                </v-window>
            </v-flex>
        </v-layout>
        <!-- <v-card class='mt-5 pa-3'>
            <v-timeline>
                <v-timeline-item
                v-for="n in 4"
                :key="n"
                color="#D50000"
                large
                >
                    <span slot="opposite">Tus eu perfecto</span>
                    <v-card hover flat>
                        <v-card-title class="headline">Title</v-card-title>
                            <v-card-text>
                            Here goes some long text describing something important we do!
                            </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-card> -->
    </v-container>
</template>


<script>
    export default {
        name: 'Carousel',
        data() {
            return {
                window: 0,
                length: 5,
                items: [
                    { src: 'https://images.unsplash.com/photo-1545239403-734e488cad95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
                    { src: 'https://images.unsplash.com/photo-1545254930-06c375090cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
                    { src: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' },
                    { src: 'https://images.unsplash.com/photo-1545210693-b30849045d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }
                ]
            }
        }
    }
</script>
