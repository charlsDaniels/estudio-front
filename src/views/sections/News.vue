<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <v-container>

      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          sm="4"
          md="4"
        >

          <v-card
            class="mx-auto my-12"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <!-- <v-img
              height="250"
              :src="getImgUrl(card.img)"
            ></v-img> -->

            <v-card-title>{{ card.title }}</v-card-title>

            <v-card-subtitle>{{ $root.formatDate(card.createdAt.date) }}</v-card-subtitle>

            <v-card-text>
              {{ card.text.substring(0,150) }}...
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="showNotice(card.id)"
              >
                Ver más
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-col>        
      </v-row>

    </v-container>

    <!-- a partir de acá modal de nueva noticia -->
    <div>
      <v-row justify="center">
        <v-dialog
          v-model = dialog
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar
              dark
              color="#355173"
            >
              <v-btn
                icon
                dark
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>{{ selectedNotice.title }}</v-toolbar-title>
              <v-spacer></v-spacer>
              
            </v-toolbar>

            <v-container>

              <p>{{ selectedNotice.text }}</p>

            </v-container>

          </v-card>
        </v-dialog>
      </v-row>
    </div>
    
  </base-section>
</template>

<script>
  export default {
    name: 'SectionNews',

    data: () => ({
      cards: null,
      selectedNotice: {
        title: '',
        text: ''
      },
      dialog: false
    }),
    created () {
      this.getNoticias()
    },
    methods: {

      getImgUrl(pic) {
        return require('../../assets/' + pic)
      },

      async getNoticias() {
        const response = await this.$axios.get('/posts')
        this.cards = response.data
      },

      showNotice(id) {
        let noticia = this.cards.filter(card => card.id === id )
        this.selectedNotice.title = noticia[0].title
        this.selectedNotice.text = noticia[0].text
        this.dialog = true
      }


    }
  }
  
</script>
