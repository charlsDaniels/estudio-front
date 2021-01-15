<template>
  <div>

  </div>
</template>

<script> 
export default {
  
  data () {
    return {
      
    }
  },

  mounted () {
    this.logout()
  },

  methods: {
    logout () {
      this.$store.dispatch('logout')
      // this.$root.items.shift()
      this.$root.items.pop()
      this.$root.items.push('Ingresar')
      this.$router.push({ name: 'Inicio' })
    },
  }
}
</script>