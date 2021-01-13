<template>
  <base-section
    id="admin-panel"
    space="56"
  >
    <v-container>
      
      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            :to="{ name: 'Posts' }"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            Posts
          </v-tab>
      
        </v-tabs>
      </div>

    </v-container>
  </base-section>
</template>

<script>

  export default {
    name: 'SectionAdminPanel',

    data () {
      return {
        
      }
    }
  }


</script>