<template>
  <div class="container">
    <transition
    name="effect"
    enter-active-class="animate__animated animate__headShake"
    leave-active-class="animate__animated animate__fadeOutUp">
    
    
      <div class="panel animate__animated animate__bounce">
        <p class="panel-heading">
          <i class="fas fa-key"> 로그인</i>
          </p>
            <div class="columns is-centered"> 
              <div class="column is-4 ">
                <img src="../assets/logo.png" alt="">
              </div>
              <div class="column is-6">
                <p>아이디</p>
                <input class="id input" type="text" placeholder="아이디">
                
                <p>비밀번호</p>
                <input class="pw input" type="password" placeholder="비밀번호">
                <a href="#" class="create-account">계정 생성하기</a>
                <hr>
                <button @click="effect" class="button is-primary is-fullwidth"><i class="fas fa-sign-in-alt"> 로그인</i></button>
              </div>
            </div>
          </div>
        </transition>
      </div>
</template>

<script>
// @ is an alias to /src
import $ from 'jquery'

// transtion 이용해서 애니메이션 만들어 보기(?)
// 슬라이드 효과, mouse over, 

export default {
  name: 'Login',
  data(){
    return{
     
    }
  },
  methods: {
    effect(){
      $('panel animate__animated animate__bounce').addClass('animate__hinge');
      alert("yes")
    }
  },
}
</script>

<style>


  .container{
    margin: 0 auto !important;
    box-sizing: border-box !important;
      
  }

  .panel{
    margin-top: 20%;
    margin-left: 20%;
    width: 730px;

    background-color: white;
  }

  img{
    margin-top: 30px;
    margin-left: -10px;
  }


 .id{
   margin-bottom: 10px;
 }
  .create-account{
    font-size: 14px;
    margin: 3px;
    
  }



</style>
