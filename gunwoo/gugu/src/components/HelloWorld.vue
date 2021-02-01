<template>
  <div class="wrap">
    <input type="number" class="box" v-model="num">

    
    <ul>
      <li v-for="i in 9" v-bind:key="i">
        {{num}} x {{i}} = {{ num * i}}
      </li>
    </ul>
  </div>
</template>

<script>
export default{

  data(){
    return {
      num:""
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  background-color: #eaffd0;  
  list-style:none;
}
.box{
  width: 220px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid #f38181;
  background-color: #fff;
}
</style>
