<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components:{
      'navbar':Navbar,
      'app-footer':Footer
  }
}
</script>

<style>
section{
  flex-wrap: wrap;
}
body{
  margin: 0px;
}
</style>


