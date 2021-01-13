<template>
  <div>
    <form ref="form">
      <base-info-card
        :title="title"
        :subtitle="subtitle"
        space="4"
        color="primary"
      />

      <base-text-field 
        type="text" 
        v-model="name" 
        label="Nombre"
        name="name" 
      />

      <base-text-field 
        type="email"
        v-model="email"
        label="Email" 
        name="email"
      />

      <!-- <base-text-field 
        type="text"
        label="Asunto" 
        v-model="subject" 
      /> -->

      <base-textarea
        class="mb-6"
        v-model="message"
        label="Consulta"
        name="message"
      />

      <!-- <input type="submit" value="Enviar mensaje"> -->

      <base-btn
        :color="!theme.isDark ? 'accent' : 'white'"
        outlined
        @click="sendEmail()"
      >
        Enviar mensaje
      </base-btn>
    </form>
  </div>
</template>

<script>
  import emailjs from 'emailjs-com';
  export default {
    name: 'BaseContactForm',

    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'Envianos tu consulta',
      },
    },
    data() {
      return {
        name: '',
        email: '',
        // subject: '',
        message: ''
      }
    },
    methods: {
      async sendEmail() {
        const response = await emailjs.sendForm('service_10mvtwm', 'template_0fubc6c', this.$refs.form, 'user_6aASRtLoLbKB1vDfLtIMI', {
            name: this.name,
            email: this.email,
            message: this.message
          })
        if (response.status != 200) {
          this.$swal.fire('Mensaje enviado',
                          'Será respondido a la brevedad',
                          'success')
        } else {
          this.$swal.fire('El mensaje no pudo ser enviado',
                          'Puede comunicarse a través de los emails, teléfonos, y/o redes sociales publicados',
                          'error')
        }
        // Reset form field
        // this.name = ''
        // this.email = ''
        // this.subject = ''
        // this.message = ''
      },
    }
  }
</script>
