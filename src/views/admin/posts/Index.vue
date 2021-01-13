<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Posts',

    metaInfo: { title: 'Carga de Noticias' },

    extends: View,

    mixins: [
      LoadSections([
        // 'hero-alt',
        'posts'
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'Carga de Noticias',
      },
    },
  }
</script>
