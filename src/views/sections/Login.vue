<template>
  <div>

    <v-container>
      <h1>Iniciar sesión</h1>

      <v-row
          no-gutters
          style="height: 150px;"
        >
          <v-col
            cols="12"
            sm="6"
            md="4"
          >

            
              <form @submit.prevent="submit">

                <validation-provider
                  v-slot="{ errors }"
                  name="Nombre de usuario"
                  rules="required"
                >
                  <v-text-field
                    v-model="username"
                    :error-messages="errors"
                    label="Nombre de usuario"
                    required
                  ></v-text-field>
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  name="Contraseña"
                  rules="required"
                >
                  <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    label="Contraseña"
                    required
                  ></v-text-field>
                </validation-provider>

                <v-btn
                  class="mr-4"
                  type="submit"
                  :disabled="canSubmit"
                >
                  Aceptar
                </v-btn>
               
              </form>
           

        </v-col>
      </v-row>

    </v-container>

  </div>
</template>

<script> 
export default {
  
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    submit () {
      this.$store
        .dispatch('login', {
          _username: this.username,
          _password: this.password
        })
        .then(() => {
          // this.$root.items.unshift('Admin Panel')
          this.$root.items.pop()
          this.$root.items.push('Salir')
          this.$router.push({ name: 'Inicio' })
        })
        .catch(err => {
          this.$swal.fire(
            'Se produjo un error',
            'Usuario o contraseña inválidos',
            'error'
          )
          console.log(err)
        })
    },
    clear () {
      this.username = ''
      this.password = ''
      this.$refs.observer.reset()
    },
  },
  computed: {
    canSubmit() {
      return !(this.username && this.password)
    }
  }
}
</script>