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

            <v-img
              height="250"
              :src="getImgUrl(card.img)"
            ></v-img>

            <v-card-title>{{ card.title }}</v-card-title>

            <v-card-subtitle>{{ card.date }}</v-card-subtitle>

            <v-card-text>
              {{ card.text }}
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
              >
                Ver más
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-col>        
      </v-row>

    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionNews',

    data: () => ({
      cards: [
        {
          img: 'noticia1.jpeg',
          title: 'ITI – Qué es y cuándo se puede pedir la exención en AFIP?',
          date: 'Feb 4, 2019',
          text: 'El ITI es el Impuesto a la Transferencia de Inmuebles, y tal cómo su nombre lo indica, es un impuesto que grava (con una tasa del 1,5%) todas las...',
        },
        {
          img: 'noticia2.jpeg',
          title: 'Ganancias 2018 – Deducciones Personales permitidas por Ley',
          date: 'Feb 4, 2019',
          text: 'Para el ejercicio que está por terminar, cuyo vencimiento operará en junio 2019, las deducciones personales admitidas por ley serán las siguientes...',
        },
        {
          img: 'noticia3.jpeg',
          title: 'Valuación Fiscal y Bienes Personales 2018: Aumentos de hasta el 1000%',
          date: 'Julio 16, 2019',
          text: 'En nuestro país, cada una de las provincias posee un impuesto que es calculado en base a una alícuota...',
        },
        {
          img: 'noticia4.jpeg',
          title: 'Qué es una SAS?',
          date: 'Enero 4, 2020',
          text: 'Se trata de la Sociedad por Acciones Simplificada y es una nueva modalidad societaria que viene a “simplificar” las tan populares Sociedades Anónimas... ',
        },
      ],
    }),
    methods: {

      getImgUrl(pic) {
        return require('../../assets/' + pic)
      }

    }
  }
  
</script>
