<template>
  <div class="about">
    <img src="../assets/profile.png" alt="Picture">
    <h1>하건우</h1>
    
    <div class="context">
      <p class="texts">안녕하세요 반가워요 :D <br><br>
      저는 개발자를 할 수 있을까요? <br>
      잘 모르겠네요😅 <br><br>

      저는 만 18세입니다. <br>
      웹툰 보는거 좋아합니당 <br> <br>
      열심히 노력해야 겠네요!
      </p>

      <button @click="anime">test</button>
    </div>

    <div class="multiply_table">
      추가한 배열
      {{$store.state.array}}
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {

  methods:{
    anime(){
      console.log("wtf its worked")
      $("multiply_table").fadeOut();
  }
  }
    
}
</script>

<style>

.texts{
    color: black;
    opacity: 100%;
  }
  .context{
    margin: 0 auto;
    width: 600px;
    border-radius: 20px;

    height: 300px;
    background-color: rgb(233, 232, 207);
    opacity: 50%;

    padding: 10px;
  }

    .texts{
      color: black;
      
    }
</style>


// vuex = 메모리 쉐어(?)