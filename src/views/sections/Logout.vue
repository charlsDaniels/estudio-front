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
      this.$router.push({ name: 'Inicio' })
    },
  }
}
</script>