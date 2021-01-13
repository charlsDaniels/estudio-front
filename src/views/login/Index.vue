<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'
  
  export default {
    name: 'Ingresar',

    metaInfo: { title: 'Ingresar' },

    extends: View,

    mixins: [
      LoadSections([
        'login',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'login',
      },
    },
  }
</script>
