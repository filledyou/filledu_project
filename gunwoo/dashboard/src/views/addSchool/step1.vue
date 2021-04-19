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
            <div class="section-photos">
              <!-- 사진 타이틀 -->
              <div class="photo-title">
                <p>사진 | {{PhotoUploaded}}개 업로드 됨</p>
              </div>
              <div class="photo-image">
                <!-- <img :src="require('@/assets/' + photoImg)" alt="asdf"> -->
              </div>


            </div>
          </div>

        <div class="btn-section">
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
          logoImg: 'upload-logo.png',
          // photoImg: 'upload-photo.png',

          // 사진 업로드 개수
          PhotoUploaded: 0
        }
    }    
}
</script>

<style src="../../css/step1.css" scoped/>
