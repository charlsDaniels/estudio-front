<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        title="Permanecé en contacto con nosotros"
        pace="6"
      >
       Podés comunicarte con nosotros a través de distintos medios.
      </base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessInfo',

    props: { dark: Boolean },

    data: () => ({
      business: [
        {
          icon: 'mdi-map-marker-outline',
          title: 'Dirección',
          text: 'Calle 13 n° 99<br>La Plata, Bs.As',
        },
        {
          icon: 'mdi-cellphone',
          title: 'Teléfonos',
          text: '221 4337544<br>221 6233633',
        },
        {
          icon: 'mdi-email',
          title: 'Email',
          text: 'mariano_ricciardi@gmail.com<br>carla.conosciuto@hotmail.com',
        },
      ],
    }),
  }
</script>
