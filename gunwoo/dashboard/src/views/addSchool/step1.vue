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
            section1
            <div class="section-logo">
              <img :src="require('@/assets/' + logoImg)" alt="img-upload">
            </div>
            <div class="section-basic">

            </div>
          </div>
         
            
          <div class="preview">
            preview
          </div>
        </div>
        <!-- 전체 flex 끝 -->

       <div class="row-2 flex">
            section2
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
            logoImg: 'upload-logo.png',
        }
    }    
}
</script>

<style src="../../css/step1.css" scoped/>
