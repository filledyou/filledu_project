<template>
  <div id="app">
     <header>
        <router-link id="title" to="/">구구단 계산기</router-link>
        <router-link id="user" to="/user">유저</router-link>
    </header>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    color: #000;
  }

  /* header */
  header{
    background-color: #232333;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #title{
    color: #fff;
    padding: 20px;
    font-weight: bold;
    font-size: 25px;
    text-decoration: none;
  }

  #user{
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 100%;
    background-color: #fff;
    margin: 0 20px;
    cursor: pointer;
    transition: .3s;
        text-decoration: none;
  }

  #user:hover{opacity: 0.8;}

</style>
