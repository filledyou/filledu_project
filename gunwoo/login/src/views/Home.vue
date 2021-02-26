<template>
  <div class="home">
    <nav>
      <ul class="nav-bar">
        <li @click="DropDown"><i class="fas fa-arrow-down"></i> DropDown
          <ul class="sub">
            <li><a href="">서브메뉴1</a></li>
            <li><a href="">서브메뉴2</a></li>
          </ul>
        </li>
      </ul>
    </nav>

    <img src="../assets/profile.png" alt="Picture">
    <h1>하건우</h1>
    
    <div  @mouseover="imgDecrease" @mouseout="imgIncrease" class="context">
      <p class="texts">안녕하세요 반가워요 :D <br><br>
      저는 개발자를 할 수 있을까요? <br>
      잘 모르겠네요😅 <br><br>

      저는 만 18세입니다. <br>
      웹툰 보는거 좋아합니당 <br> <br>
      열심히 노력해야 겠네요!
      </p>

        
      
    </div>
   
    <router-link to="/login">
       <button class="button is-link" @click="goLogin">로그인 </button>
    </router-link>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'Home',
    
  data(){
    return{
        timeOut: false,
        slideDown: false
        
    
    }
        
  },
  watch:{
      timeOut(){
          console.log(this.timeOut);
          this.$router.push("/login");
      }
  },
  mounted() {

      //  setTimeout(() => { //fucntion 안에서 this를 참조를 못해서 라우터 push 인식을 못함
      //      console.log("10초가 지났다");
      //       // window.location.href = '/login';
      //       // https://stackoverflow.com/questions/35664550/vue-js-redirection-to-another-page 왜 작동 안하지

      //       this.timeOut = true
      //       }, 1000);
        
    },
  methods:{
      goLogin(){
          
      },

      DropDown(){
          console.log("제에에에에발 되라")
          if(this.slideDown == false){
            $('.sub li').stop().slideDown(300);
            this.slideDown = true
          }
          else{
            $('.sub li').stop().slideUp(300);
            this.slideDown = false
          } 
      },

      imgDecrease(){
        $('img').stop().animate({width: 100})
         $('img').rotate(45)
        
      },

      imgIncrease(){
        $('img').stop().animate({width: 150})
      }

      
      
        
      

     
  
    
  }

   
}



</script>


<style>
.context{
  transition: all ease 1s;
}

.context:hover{
  transform: rotate( 5deg );
  cursor: pointer;
}

.nav-bar{
  font-family: 'Do Hyeon', sans-serif;
  display: flex;
  margin: 5px;

  color: white;
  background-color: rgba(71, 212, 71, 0.329);
}

.nav-bar:hover{
  background-color: rgb(228, 137, 51);
}

ul{
  list-style: none;
  cursor: pointer;
}

.nav-bar > li{
  width: 100%;
  border: 1px solid rgb(226, 29, 29);

  
}

.sub > li{
  display: none;
}

.sub > li:hover{
  background-color: rgb(240, 95, 95);
}

.sub > li > a{
  color: rgb(29, 23, 19);
}

.home{
    text-align: center;
}

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

