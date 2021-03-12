<template>
  <div class="container">
    <div class="login-box">
      <div class="left-box">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="right-box">
        <p><i class="fas fa-key"></i> 로그인</p>
        <input class="id" type="text" placeholder=" 아이디" v-model="UserID">
        <input class="pw" type="password" placeholder=" 비밀번호" v-model="UserPW">
        <a class="create_account" href="">계정 만들기</a>

        <button class="login" @click="login"><i class="fas fa-sign-in-alt"></i> 로그인</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return{
      UserID:'',
      UserPW:''
    }
  },
  methods:{
    login(){
      let self = this //this가 먹히지 않기 때문에 self로 했음, 안하면 eval 어쩌구 오류남
      return new Promise(function(resolve, reject){ //안에 resolve, reject도 다른 이름으로 대체 가능
        axios.post("https://filledyou.com:7770/api/auth/login", {"email":self.UserID, "password":self.UserPW}) //{는 파라미터임}
        .then(response =>{  //response에는 res, gap등등의 다른 이름이 쓰일 수 있다.
          if(response.data.result == "success"){
            resolve(response.data) //성공("success")이면 resolve 호출
            console.log("로그인 성공!")

          }
          else{
            console.log("값이 success 가 아니에요")
          } //reject가 else 밖으로 빠져있는거 맞음 (서버에서 오류가 나버리면 reject 호출)
          reject(response.data) //근데 밑에서 catch를 써버리면 reject가 쓸모없지 않음?
          }) //삼촌 코드는 익명함수이여서 ((reponse )=> 이런식으로 쓴거임?)??
      }).catch ((error) => { //catch 없으면 async 오류 남
        console.log(error)
        console.log("서버에러")
      })
        

    }
  },
  mounted() {
      document.body.style.background= "#fff2cc"; /* (rgb(255, 242, 204);) */
    }
}
</script>

<style>
  .container{
    color: black;

    text-align: center;
  }

  .login-box{
    display: flex;
  }

  .left-box{
    width: 400px;
    height: 380px;

    /* position */
    margin-left: 30%;
    margin-top: 15%;

    background-color: rgb(143, 170, 243);
    border-radius: 30px 0 0  30px;
    box-shadow: 10px 10px 44px -12px rgba(0,0,0,0.44);
  }

  .left-box > img{
    /* position */
    margin-left: -60px;
    padding-top: 40px;


    width: 280px;
    height: 280pxpx;
  }

  .right-box{
    width: 420px;
    height: 380px;

    /* position */
    margin-top: 15%;
    margin-left: -65px;
  

    background-color: #fff;
    border-radius: 30px;
    box-shadow: 10px 10px 44px -12px rgba(0,0,0,0.44);
  }

  .right-box > p{
    font-family: 'Noto Sans KR', sans-serif;  
    font-size: 28px;
  }

   .right-box > p > i{
     color: rgb(61, 61, 61);
   }

  
  .right-box > input{
    /* input 세로 정렬 */
    display: block;

    width: 300px;
    height: 45px;

    /* position */
    margin-left: 60px;

    background-color: rgb(248, 232, 232);
    border-radius: 10px;
    border: none;

    transition: 0.1s;
  }

  .right-box > input:hover{
    transform: scale(1.03);
  }

  .right-box > .id{
    margin-top: -5px;
    margin-bottom: 20px;
  }

  .create_account{
    /* 계정 만들기 링크 세로 정렬 */
    display: block;

    width: 100px;

    /* position */
    margin-top: 10px;
    margin-left: 50px;

    font-size: 13px;
    color: rgb(120, 112, 224);

    text-decoration: none;
  }


  .login{
    width: 300px;
    height: 45px;

    /* position */
    margin-top: 55px;

    background-color: rgb(169, 209, 142);
    border-radius: 5px;
    border: none;

    cursor: pointer;
    transition: 0.1s;

    font-size: 15px;
    color: white;
  }

  .login:hover{
    background-color: rgb(140, 185, 111);
    transform: scale(1.1);
  }
</style>
