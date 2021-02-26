<template>
  <div id="app" v-if="$store.state.login == false">
    <transition
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut">
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
export default {
 data(){
   return{

   }
 },

}
</script>



<style>

</style>

