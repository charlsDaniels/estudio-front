<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home-hero.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading title="Bienvenidos a Estudio Contable" />

          <base-body>
            Somos un Estudio dedicado a brindar asesoramiento integral y personalizado a nuestros clientes en materia impositiva, contable, laboral y societaria.
            Asimismo brindamos servicios de outsourcing, consultoría, asesoramiento a empleados en relación de dependencia y servicios para consorcios.
            Lo invitamos a conocer nuestro sitio Web. Nuestra intención como Contadores Públicos, es brindarle un servicio de alto nivel profesional, ofrecerle soluciones concretas a sus necesidades y acompañarlo en su crecimiento
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn
              :to='{ name: "El estudio" }'
            >
              Nosotros
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4"></span>

            <base-btn
              :ripple="false"
              :to='{ name: "Servicios" }'
              class="pa-1"
              height="auto"
              text
            >
              Nuestros servicios
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
