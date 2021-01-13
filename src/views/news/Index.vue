<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'News',

    metaInfo: { title: 'Noticias' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'news'
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
