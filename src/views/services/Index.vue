<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Services',

    metaInfo: { title: 'Servicios' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'about-our-product',
        // 'theme-features',
        // 'newsletter',
        // 'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'services',
      },
    },
  }
</script>
