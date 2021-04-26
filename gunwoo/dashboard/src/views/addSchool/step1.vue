<template>
<div>
  <nav-bar/>
  <div class="alert">
    <p>모든 필드가 채워지지 않았어요</p>
    
  </div>

  <!-- 메인박스 -->
  <div class="box">
    <div class="title">학교 추가하기</div>
      <!-- Progress Bar -->
      <div class="progress-bar">
          <!-- SMTH WILL BE HERE -->
          <!-- /////////// -->
      </div>
        <!-- 전체 (1행 / 프리뷰) 나누기용 flex -->
        <div class="flex">
          <div class="row-1 flex">
            <!-- logo섹션 -->
            <div class="section-logo">
              <img :src="require('@/assets/' + logoImg)" alt="img-upload">
              <p>학교 로고</p>
            </div>
            <div class="section-basic">
              <!-- 학교이름 -->
              <div class="name">
                <p>학교명 | Name </p>
                <input type="text" v-model="step1.schoolName">
                <div class="verified"></div>
              </div>
              <!-- 주소 -->
              <div class="address">
                <p>주소 | Adress</p>
                <input type="text" disabled v-model="step1.schoolAddress">
                <button>검색</button>
              </div>

            </div>
          </div>
         
            
          <div class="preview">
            preview
          </div>
        </div>
        <!-- 전체 flex 끝 -->

       <div class="row-2 flex">
         <!-- 이미지 섹션-->
            <div class="section-photos">
              <!-- 사진 섹션 타이틀 -->
              <div class="photo-title">
                <p>사진 | {{PhotoUploaded}}개 업로드 됨</p>
              </div>
              <!-- 사진 이미지들과 버튼들 flex로 -->
              <div class="flex">
                <!-- 사진 프리뷰 파트 -->
                <div class="photo-image">
                  <img :src="require('@/assets/' + photoImg)" alt="photoImg">
                </div>
                <!-- 사진 기능 버튼들 -->
                  <div class="photo-function">
                    <button class="btn-upload">업로드</button>
                    <button class="btn-manage">목록 / 관리</button>
                    <button class="btn-delete">Delete all</button>
                  </div>
                  <!-- 사진 기능 버튼들 끝 -->
                </div>
                <!--사진 이미지들과 버튼들 flex 끝 -->
              </div>
            

          <!-- 학교 정보 입력 섹션-->
            <div class="section-plus">
              <!-- 플러스 정보 타이틀 -->
              <div class="plus-title">
                <p>학교 정보</p>
              </div>
              <p>재학 기간</p>
              <input class="input" type="text" v-model="step1.enrollPeriod">

              <p>캠퍼스</p>
             <select class="select" 
                     name="area" 
                     v-model="step1.campusArea" 
                     >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>

            <input class="input wd-40" 
                   type="text"
                   v-model="step1.campusLocation">
                  
            </div>
          </div>

        <div class="section-btn">
          <button class="btn-danger" @click="Cancel">취소</button>
          <button class="btn-success" @click="Next">다음</button>
        </div>
  </div>
  <!-- 메인 박스 끝 -->
</div>
</template>

<script>
import $ from 'jquery'
//loading KakaoMap API


export default {
    data(){
        return{
          // 학교 로고 이미지 
          logoImg: "upload-logo.png",  //학교 심볼
          photoImg: 'upload-image.png',//학교 사진

          // 사진 업로드 개수
          PhotoUploaded: 0,

          //step1 정보
          step1:{
            schoolName: 'ㅁㅇㄴㄹ',
            schoolAddress: 'ㅁㅇㄴㄹ',
            enrollPeriod: 'ㅁㄴㅇㄹ',
            campusArea: 'ㅁㅇㄹ',
            campusLocation: 'ㅁㅇㄹㄴ',
          }



        }
    },
    methods:{
      
      //Address Popup

      // If Next button Pressed
      Next(){
        const {schoolName, schoolAddress, enrollPeriod, campusArea, campusLocation} = this.step1;
          //삼항 연사자를 이용한 계산, 한칸 띄어쓰기 까지 못 쓰게
        ( schoolName == ""    || schoolName == " "    ||
          schoolAddress == "" || schoolAddress == " " ||
          enrollPeriod == ""  || enrollPeriod == " "  ||
          campusArea == ""    || campusArea == " "    || 
          campusLocation == ""|| campusLocation == " "
        ) ? this.fieldIsEmpty() : this.fieldIsFulfilled()
      },

      //If field is Empty
      fieldIsEmpty(){
        $('.alert').slideDown(500)
            setTimeout( function(){
               $('.alert').stop().slideUp(500)
            }, 1000)
            console.log("모든 필드를 채워주세요");
       },
      //If field is Full
      fieldIsFulfilled(){
        console.log("모든 필드가 채워졌네요!");
        //Vuex 접근을 위한 this.$store를 비구조화 할당은 안함
        // const {state} = this.$store;
        //state.step1 까지 접근하기 어려워서 state.step1을 VuexStep1 변수에 할당
        const VuexStep1 = this.$store.state.Step1;

        
        //Vuex에 값 저장
        // this.$store.state.step1.schoolName
        VuexStep1.schoolName = this.step1.schoolName,
        VuexStep1.schoolAddress = this.step1.schoolAddress,
        VuexStep1.enrollPeriod = this.step1.enrollPeriod,
        VuexStep1.campusArea = this.step1.campusArea,
        VuexStep1.campusLocation = this.step1.campusLocation
        console.log("Vuex 저장 완료");
        },




      Cancel(){
        //canel funtion
      },

      

      

    }    


}
</script>


<style scoped> 
@import url('../../css/step1/step1.css');
@import url('../../css/step1/button.css');
</style>


