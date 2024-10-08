<script>

import BHeader from './components/BHeader.vue'
import BookCountApi from './views/BookCountApi.vue';

export default {
  name: 'App',
  components: {
    BHeader,
    BookCountApi
  },
  computed: {
    showHeader() {
    return this.$route.name !== 'BookCountApi' && this.$route.name !== 'GetAllBookAPI';
  }
  } 
}
</script>

<template>
  <header v-if = "showHeader">
    <BHeader />
  </header>

  <main>

     <router-view>
      
     </router-view>
  </main>
</template>

<style scoped>

</style>
