<template>
  <div id="app">
    <Header></Header>
    <!-- <Petrol></Petrol> -->
    <Semi></Semi>
    <!-- <Echarts></Echarts> -->
  </div>
</template>

<script>
import Header from './components/Header'
import Petrol from './pages/Petrol'
import Semi from "./pages/Semi"
// import Echarts from "./pages/Price/Echarts"
export default {
  name: "App",
  components: {
    Semi,
    Header,
    Petrol
    // Echarts
  },
};
</script>

<style>
html,body{
  width:100%;
  height:100%;
  background: url(./assets/1.png) no-repeat;
  background-size: cover;
  overflow: hidden;
}
#app {
  height:100%;
  width:100%;  
}
</style>
