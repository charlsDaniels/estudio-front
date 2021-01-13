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

            <validation-observer
              ref="observer"
              v-slot="{ invalid }"
            >
              <form @submit.prevent="submit">

                <validation-provider
                  v-slot="{ errors }"
                  name="username"
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
                  name="password"
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
                  :disabled="invalid"
                >
                  Aceptar
                </v-btn>
               
              </form>
            </validation-observer>

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
          this.$router.push({ name: 'Admin Panel' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    clear () {
      this.username = ''
      this.password = ''
      this.$refs.observer.reset()
    },
  }
}
</script>