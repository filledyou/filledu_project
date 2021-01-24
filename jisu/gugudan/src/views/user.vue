<template>
  <div id="wrap">
      <h5 id="userTitle">어서오세요!</h5>
      <div id="userInfo">
        <div id="userImg">유저</div>
        <h6 id="userName">유저</h6>
      </div>
  </div>
</template>

<script>
export default {
    name:'user'
}
</script>

<style>
  #userTitle{
    font-size: 2.2em;
    text-align: center;
    margin: 20px 0;
    color: #555;
  }

  #userInfo{
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  #userImg{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 3px solid #ddd;
    text-align: center;
    line-height: 100px;
    font-size: 1.5em;
    margin:0 20px;
  }

  #userName{
    font-size: 1.3em;
  }
</style>