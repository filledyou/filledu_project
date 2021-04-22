<template>
<div>
  <nav-bar/>
  
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
                <input type="text">
                <div class="verified"></div>
              </div>
              <!-- 주소 -->
              <div class="address">
                <p>주소 | Adress</p>
                <input type="text" disabled>
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


            </div>
          </div>

        <div class="section-btn">
          <button class="btn-danger">취소</button>
          <button class="btn-success">다음</button>
        </div>
  </div>
  <!-- 메인 박스 끝 -->
</div>
</template>

<script>
// import $ from 'jquery'
export default {
    data(){
        return{
          // 학교 로고 이미지 
          logoImg: "upload-logo.png",
          photoImg: 'upload-image.png',

          // 사진 업로드 개수
          PhotoUploaded: 0
        }
    }    
}
</script>


<style scoped> 
@import url('../../css/step1/step1.css');
@import url('../../css/step1/button.css');
</style>


