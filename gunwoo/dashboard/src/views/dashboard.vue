<template>
  <div class="dashboard">
    <div class="nav">
       <a href="">대시보드</a>
       <div class="profile_box" @click="DropDown">
         <p><i class="fas fa-caret-down"></i> Admin </p>
         <ul class="menu">
           <li>프로필</li>
           <li>설정</li>
           <li>로그아웃</li>
         </ul>
       </div>
    </div>
    <!-- end of nav-bar -->

    <div class="box">
      <div class="title_section">
        <img src="@/assets/school.png" alt="school_icon"> 
        <p class="title">대학 리스트</p>
      </div>
      <hr class="divider">
      
    </div>

  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Home',
  data(){
    return{
      IsDropDown: true
    }
  },
  methods:{
    DropDown(){
      if(this.IsDropDown == true){
        $('.menu > li').stop().slideDown(300);
        this.IsDropDown = false
      }
      else{
        $('.menu > li').stop().slideUp(300);
        this.IsDropDown = true
      }   
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

.nav{
  width: 100%;
  height: 70px;

  background-color: rgb(0, 176, 240);

  /* 가로 */
  display: flex;
  /* 양쪽으로 나눠주는 역할 */
  justify-content: space-between;
}

/* 대시보드 왼쪽 상단 로고 */
.nav > a{
  font-family: 'Do Hyeon', sans-serif;

  display: block;

  /* position */
  padding: 15px;
  

  width: 120px;
  height: 35px;

  color: rgb(79, 135, 238);

  text-decoration: none;
  font-size: 35px;
  
  
}

.profile_box{
  /* position */
  margin-top: 10px;
  margin-right: 10px;

  width: 130px;
  height: 50px;

  background-color: rgb(83, 114, 216);
  border-radius: 15px;

  color: white;
  text-align: center;
  transition: 0.3s;
  
}

.profile_box > p{
  font-family: 'Bebas Neue', cursive;

  width: 130px;
  height: 20px;
  font-size: 20px;

  /* position */
  margin-top: 15px;
}

.profile_box:hover{
  background-color: rgb(55, 87, 190);
  
  cursor: pointer;
  transform: scale(1.05);
}

.profile_box > .menu{
  width: 125px;
  height: 35px;

  /* position */
  margin-top: -5px;
  
}

/* 서브메뉴 클릭했을 때 메뉴 slideUp되는거 막으려면 li들을 .profile_box 밖으로 빼야됨 */
.menu > li{
  display: none;

  font-family: 'Noto Sans KR', sans-serif;
  list-style: none;
  /* text-align: center; */

  
  /* position */
  margin-left: 5px;
  padding: 10px;

  color: white;
  background-color: rgb(107, 131, 209);
  font-size: 15px;

}

/* 둥근 테두리 */
.menu >li:last-child{
  border-radius: 0 0 10px 10px;
}

.menu > li:hover{
  background-color: rgb(83, 163, 216);
}


/* Container */
.box{
  margin: 0 auto;

  /* position */
  margin-top: 15px;
  

  width: 90%;
  height: 835px;

  border-radius: 10px;
  background-color: rgb(242, 242, 242);
}

.box > .title_section > img{
  justify-items: left;

  /* position */
  margin-left: 25px;
  margin-top: 10px;

  /* size */
  width: 70px;
  height: 70px;
}

.box > .title_section{
  /* 방향: 가로 */
  display: flex;
}


.title_section > .title{
  font-size: 25px;
  font-family: 'Do Hyeon', sans-serif;

  /* position */
  margin-left: 20px;
  margin-top: 30px;
}

/* 수평선 */
hr{
  width: 95%;
  border-top: 0.1px solid gr;
}
</style>  