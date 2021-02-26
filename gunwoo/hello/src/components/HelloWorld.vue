<template>
 <div class="wrap">
   <h1>Hello FiledU :D</h1>
   <h4>{{ msg }}</h4>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#wrap{
    margin: 0 auto;
    padding: 0;

    box-sizing: 40px;
}

h1{
    font-size: 40px;

    color: #42b983;

    margin: 0;
    padding:0;
}
</style>
