import { required, email } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend('required', {
  ...required,
  message: '{_field_} no puede estar vacío',
})

extend('email', {
  ...email,
  message: 'Debe ser un e-mail válido',
})