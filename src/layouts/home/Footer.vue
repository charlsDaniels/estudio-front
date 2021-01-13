<template>
  <v-footer
    id="home-footer"
    color="grey darken-4"
    dark
    min-height="72"
  >
    <v-container>
      <v-row>
        <!-- <v-col
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template v-for="(s, i) in social">
             
              <a
                :key="s.name"
                class="white--text pa-1 pa-md-0"
                :href="s.link"
                v-text="s.name"
                target="blank"
              />

              <v-responsive
                v-if="i < social.length - 1"
                :key="`divider-${s}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>  -->

        <v-col
          class="text-center"
        >
          Copyright &copy; 2020 Estudio Contable
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [
        // { 
        //   name: 'Facebook', 
        //   link: 'https://www.facebook.com/EstudioContableWeb1'
        // },
        // { 
        //   name: 'Instagram', 
        //   link: 'https://www.instagram.com/elestudioweb/' 
        // }
      ],
    }),
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
