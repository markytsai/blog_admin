<template>
  <div class="main">
    <div class="sidebar-container">
      <SideBar/>
    </div>
    <div class="main-container">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </div>
    <Footer/>
  </div>
</template>

<script>
import SideBar from '@/views/Sidebar.vue'
import Footer from '@/views/Footer'

export default {
  name: 'Layout',
  components: {
    Footer,
    SideBar
  }
}
</script>

<style scoped>
.main-container {
  margin-bottom: 50px;
}
</style>
