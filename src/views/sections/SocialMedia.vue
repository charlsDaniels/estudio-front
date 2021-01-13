<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent text-center"
      space="56"
    >

    <base-section-heading
      color="grey lighten-2"
      title="Redes sociales"
    />

      <v-container>
        <v-row>
          <v-col
            md="12"
          >        
            <base-icon class="mb-8">
              mdi-instagram
            </base-icon>

            <base-section-heading
              color="transparent"
              title="Instagram"
              :space="4"
            >
            </base-section-heading>

            <a
              class="d-inline-block mb-8"
              href="https://www.instagram.com/elestudioweb/"
              style="text-decoration: none;"
              target="_blank"
            >
              @elestudioweb
            </a>
          </v-col>

        </v-row>

        <v-row>
          <v-col
            md="12"
          >   
        
            <base-icon class="mb-8">
              mdi-facebook
            </base-icon>

            <base-section-heading
              color="transparent"
              title="Facebook"
            >
            </base-section-heading>
            
            <a
              class="d-inline-block mb-8"
              href="https://www.facebook.com/EstudioContableWeb1"
              style="text-decoration: none;"
              target="_blank"
            >
              @EstudioContableWeb1
            </a>

          </v-col>
        </v-row>

      </v-container>

    </base-section>

  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
