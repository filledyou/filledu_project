<template>
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
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{
            
        }
    },
    methods:{
    DropDown(){
      if(this.IsMenuDropDown == true){
        $('.menu > li').stop().slideDown(300);
        this.IsMenuDropDown = false
      }
      else{
        $('.menu > li').stop().slideUp(300);
        this.IsMenuDropDown = true
      }   
    },
    ActiveFilter(){
      //V-if로 할 수 있었으나 슬라이드 애니메이션 때문에 css / jquery 사용
      if(this.Filtering == "OFF"){
        $('.list_box').css('height','480');
        $(".filter-dropdown").css("background-color","##fff8f7");
        $("p > a").css("color","violet");
        $(".filter-dropdown > img").css('transform','rotate(180deg)');
        $('.filter-advanced').stop().slideDown()
        this.Filtering = "ON"
      }
      else{
        $('.list_box').css('height','520px');  
        $(".filter-dropdown").css("background-color","#e7e6e6");
        $("p > a").css("color","red");
        $(".filter-dropdown > img").css('transform','rotate(360deg)');
        $('.filter-advanced').stop().slideUp()
        this.Filtering = "OFF"
            }
          
        }

    }
}
</script>

<style>
    .nav{
  width: 100%;
  height: 70px;

  background-color: rgb(0, 176, 240);

  /* 가로 */
  display: flex;
  /* 양쪽으로 나눠주는 역할 */
  justify-content: space-between;
  box-shadow: 0px 11px 37px -19px rgba(100, 100, 100, 0.73);
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
.menu > li:last-child{
  border-radius: 0 0 10px 10px;
}

.menu > li:hover{
  background-color: rgb(83, 163, 216);
}
</style>