<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="1"
      height="80"
    >

    <v-menu 
      v-if="isLogged"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
      
          <v-app-bar-nav-icon
            v-on="on"
            v-bind="attrs">

          </v-app-bar-nav-icon>
        
      </template>
      <v-list>
        <v-list-item
          @click="toAdminPanel()"
        >
          <v-list-item-title>Admin Panel</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

<!-- 
      <base-img
        :src="require('@/assets/Estudio Ricciardi.png')"
        class="mr-3 hidden-xs-only"
        contain
        max-width="350"
        width="100%"
      /> -->
      <v-toolbar-title>Estudio Ricciardi y Assoc.</v-toolbar-title>
<!-- 
      <base-img
        :src="require('@/assets/zero-logo-light.svg')"
        contain
        max-width="128"
        width="100%"
      /> -->

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(name, i) in $root.items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
      
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="$root.items"
    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'HomeAppBar',

    components: {
      HomeDrawer: () => import('./Drawer'),
    },

    data: () => ({
      drawer: null,
      // items: [
      //       'Inicio',
      //       'El estudio',
      //       'Servicios',
      //       'Noticias',
      //       'Contacto',
      //       // this.isLogged ? 'Salir' : 'Ingresar',
      //       // this.isLogged ? 'Admin Panel' : ''
      //   ]
    }),

    computed: {

      ...mapGetters([
        'isLogged'
      ]),
      
    },

    methods: {
      toLogin() {
        this.$router.push({ path: 'login' })
      },
      toAdminPanel() {
        this.$router.push({ path: 'admin' })
      },
      logout() {
        this.$store.dispatch('logout')
        this.$root.items.shift()
        this.$router.push({ path: '/' })
      }
    }
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
