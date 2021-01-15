import ax from 'axios'

// insert all your axios logic here
ax.defaults.baseURL = 'http://estudio-ricciardi.local/index.php'

export const axios = ax

export default {
    install (Vue) {
        Vue.prototype.$axios = ax
    },
}
