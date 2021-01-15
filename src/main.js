import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins'
import VueAxios from './plugins/axios'

// vee-validate
import {
  ValidationProvider,
  ValidationObserver,
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

import './plugins/vee-validate';
// vee-validate

import VueSweetalert2 from 'vue-sweetalert2';

import moment from "moment";
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'
 
Vue.config.productionTip = false

Vue.use(VueAxios)
Vue.use(VueSweetalert2)

Vue.mixin({
  
})

new Vue({
  router,
  store,
  vuetify,
  data () {
    return {
      items: [
        'Inicio',
        'El estudio',
        'Servicios',
        'Noticias',
        'Contacto',
        'Ingresar',
        // this.isLogged ? 'Admin Panel' : ''
    ]
    }
  },
  methods: {
    /**
     * Devuelve una fecha con formato 
     *
     * @param {String} dateTime
     */
    formatDate: value => moment(String(value)).format("DD/MM/YYYY"),

     /**
     * Devuelve una fecha con formato
     *
     * @param {String} dateTime
     */
    formatDateTime: value => moment(String(value)).format("DD/MM/YYYY HH:mm"),
  },  
  render: h => h(App),
}).$mount('#app')
