<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'
  
  export default {
    name: 'Salir',

    metaInfo: { title: 'Salir' },

    extends: View,

    mixins: [
      LoadSections([
        'logout',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'logout',
      },
    },
    
  }
</script>
