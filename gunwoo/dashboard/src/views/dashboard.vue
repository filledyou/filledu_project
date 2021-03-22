<template>
  <div class="dashboard">
    <nav-bar/>
    <!-- end of nav-bar -->

    <list-box/>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: 'Home',
  data(){
    return{
    }
  },
  mounted() {
      document.body.style.background= "#ffffff"; /* (rgb(255, 242, 204);) */
    }
}
</script>

<style>
ul, ol, li{
  margin: 0;
  padding: 0;
}

.dashboard{
    background-color: #fff;

}
</style>  

