<template>
  <base-section id="about-us">
    <base-section-heading
      color="grey lighten-2"
      title="Acerca de nosotros"
    />

    <v-container>
      <v-row>
        <v-col
          md="6"
        >        
          <v-img
            :src="require('@/assets/carla.jpeg')"
            class="mx-auto mb-8"
            max-width="128"
          />

          <base-section-heading title="Carla Conosciuto">
            Contador Público<br>Amante de los gatos
          </base-section-heading>
          
        </v-col>
      
        <v-col
          md="6"
        >
          <v-img
            :src="require('@/assets/tomás.jpg')"
            class="mx-auto mb-8"
            max-width="128"
          />


          <base-section-heading title="Tomás 'el Gato'">
            Su tarea más difícil es ser <strong>"Gato"</strong>
          </base-section-heading>

        </v-col>

      </v-row>
    </v-container>

  </base-section>
</template>

<script>
  export default {
    name: 'SectionAboutUs',

    data: () => ({
      cards: [
        
      ],
    }),
  }
</script>
