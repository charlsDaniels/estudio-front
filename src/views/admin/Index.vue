<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'AdminPanel',

    metaInfo: { title: 'Admin Panel' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'admin-panel'
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'Admin Panel',
      },
    },
  }
</script>
