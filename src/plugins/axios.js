import ax from 'axios'

// insert all your axios logic here
ax.defaults.baseURL = 'http://localhost/My_Symfony_Stuff/estudio-back/public/index.php'

export const axios = ax

export default {
    install (Vue) {
        Vue.prototype.$axios = ax
    },
}
