<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'About',

    metaInfo: { title: 'El estudio' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'about-us',
        // 'theme-features',
        // 'newsletter',
        // 'info',
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
