  <template>
  <div>
    <div class="alert">
      <h2>다음 단계로 갈 수 없습니다</h2>
      <p> 모든 필드를 입력하였는지 확인해주세요</p>
    </div>
  </div>    
</template>

<style scoped>
  .alert{
    display: none;
    position: fixed;
    
    background-color: rgb(245, 157, 157);
    border: 1px solid rgb(190, 79, 79);
    border-radius: 10px;

    width: 400px;
    height: 55px;

    /* position */
    margin-top: 10px;
    margin-left: 40%;
  }
</style>
