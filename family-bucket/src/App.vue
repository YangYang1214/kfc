<template>
  <div id="app">
    <div class="container">
        <Header/>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
    <div class="container">
        <Footer/>
    </div>
  
  </div>
  
</template>

<script>
import Header from './components/Header'
/* import Order from './components/Order'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register' */


export default {
  name: 'App',
  components: {
    Header,
   /*  Order,
    Footer,
    Login,
    Register  */
  },
  created:function(){
    debugger;
  }
}
</script>

<style>

</style>
