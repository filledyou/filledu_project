<template>
    <div class="addSchool">

    <nav-bar/>
    <!-- start of box -->
    <div class="box">
        <div class="title">학교 추가하기</div>
    </div>

    </div>

</template>

<script>
// import $ from 'jquery'
export default {
    data(){
        return{
            
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

.box{
    /* position */
    margin-top: 20px;

    /* size */
    width: 90%;
    height: 800px;


    /* property */
    background-color: rgb(248, 248, 248);
}

.title{
    
    /* position */
    margin-top: 10px;
    text-align: center;
    font-size: 30px;
}
</style>