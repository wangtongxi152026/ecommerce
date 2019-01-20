<template>
  <v-app :dark="dark">
    <v-navigation-drawer
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      temporary
    >
      <v-list>
        <v-list-tile
          to='/'
          router
          exact
          ripple
        >
          <v-list-tile-action>
            <v-icon color='#D50000'>store</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
        <v-list-group>
          <v-list-tile slot='activator'>
            <v-list-tile-action>
              <v-icon color='#D50000'>view_list</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Categories</v-list-tile-title>
          </v-list-tile>
          <v-list-tile active-class="red--text" v-for="(cat, index) in categories" :key="index" :to='"/category/" + cat'>
            <v-list-tile-content class='ml-3 pl-3'>
              <v-list-tile-title>{{ cat }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile
        v-if="user"
          to='/profile'
          router
          exact
          ripple
        >
          <v-list-tile-action>
            <v-icon color='#D50000'>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
        v-if="!user"
          to='/login'
          router
          exact
          ripple
        >
          <v-list-tile-action>
            <v-icon color='#D50000'>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile
          v-if="user"
          to='/create'
          router
          exact
          ripple
        >
          <v-list-tile-action>
            <v-icon color='#D50000'>create</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Create Advertisement</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          to='/about'
          router
          exact
          ripple
        >
          <v-list-tile-action>
            <v-icon color='#D50000'>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About Us</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          to='/contact'
          router
          exact
          ripple
        >
          <v-list-tile-action>
            <v-icon color='#D50000'>forum</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
        v-if="user"
          @click='logoutUser'
          ripple
        >
          <v-list-tile-action>
            <v-icon color='#D50000'>power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-switch
            label="Dark Mode"
            v-model="dark"
            color='blue'
            ></v-switch>
          </v-list-tile-action>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" aria-label='Open Drawer' />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      fixed
      app
    >
      <v-flex text-xs-center xs12>&copy; 2019  <v-btn color='#D50000' class='pa-0 ma-0' depressed round flat href="https://www.odbs-sd.com/" style="text-decoration: none;">ODBS</v-btn> | All Rights Reserved</v-flex>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        clipped: true,
        drawer: false,
        dark: false,
        title: 'Al-Dokkaan',
        categories: [
          'Smartphones', 'Desktops', 'Laptops', 'Shirts', 'Pants', 'Shoes'
        ]
      }
    },
    computed: {
        user() {
          return this.$store.getters['auth/user']
        }
    },
    methods: {
        ...mapMutations({
          logout: 'auth/logout'
        }),
        logoutUser() {
          this.$toast.success('Successfully logged out.', 
          {
              icon: 'done',
              duration: 2000
          })
          this.$router.push('/')
          return this.logout()
        }
    }
  }
</script>

