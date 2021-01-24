<template>
  <div id="wrap">
    <div id="content">
      <input type="number" id="inputNumber"
      placeholder="search Multiplication table.."
      v-on:keyup.enter="createResult()"
      >

      <div id="resultList">
        <div id="listHeader">
          <h5>결과</h5>
          <button id="listReset" @click="ResetList()">Reset</button>
        </div>
        <div class="resultBox" v-for="(num,idx) in this.$store.getters.updateResult" :key="idx">
          <div class="resultHeader">
            <h5>검색 : {{num.num}}단</h5>
            <div>
              <button class="modBtn"
              @click="ModList(idx)"
              >수정</button>
              <button class="delBtn"
              @click="DelList(idx)"
              >삭제</button>
            </div>
          </div>
          <div v-for="Dcnt in 9" :key="Dcnt">
            <p><span>{{num.num}}</span><span>x</span><span>{{Dcnt}}</span><span>=</span><span>{{num.num*Dcnt}}</span></p>
          </div>
        </div>
      </div>
    </div>

    <div id="popup">
      <div id="popupBody">
        <div id="popupHeader">
          <h3 id="popupTitle">경고!</h3>
          <button @click="popupClose()">&times;</button>
        </div>
        <div id="popupContent">
          <p id="popupText"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';

  export default{
    name:'Main',
    methods:{
      createResult(){
        let input = document.querySelector("#inputNumber");
        let number = parseInt(input.value);
        input.value = "";

         // 기본 조건 검색(숫자인가? / 1이상인가?)
        if(isNaN(number)) return this.popupOpen("경고!","숫자만 입력해주세요!");
        if(number < 1) return this.popupOpen("경고!","1이상의 숫자를 입력해주세요!");

        // 배열에 있는지 검색
        if(this.$store.state.RList.find(e => e.num === number)) return this.popupOpen("경고!","해당하는 단은 이미 검색되었습니다!");

        this.$store.commit("RlistPush",{num:number});
      },

      // 검색 삭제
      DelList(val){
        if(!confirm("삭제하시겠습니까?")) return false;
        this.$store.commit("RlistDel",val);
      },

      // 검색 수정
      ModList(val){
        let new_val = parseInt(prompt("수정할 값을 입력해주세요"));

        if(isNaN(new_val)) return this.popupOpen("경고!","숫자만 입력해주세요!");
        if(new_val < 1) return this.popupOpen("경고!","1이상의 숫자를 입력해주세요!");

        // 배열에 있는지 검색
        if(this.$store.state.RList.find(e => e.num === new_val)) return this.popupOpen("경고!","해당하는 단은 이미 검색되었습니다!");
        let list = JSON.parse(JSON.stringify(this.$store.state.RList));
        list[val] = {num:new_val};
        this.$store.commit("RlistMod",list);
      },

      ResetList(){this.$store.commit("RlistReset")},

      // popupOpen
      popupOpen(title,content){
        $("#popupTitle").text(title);
        $("#popupContent").text(content);
        $("#popup").fadeIn();
      },

      // popupClose      
      popupClose(){
        $("#popup").fadeOut();
      }
      
    }
  }
</script>

<style scoped>

/* content */
#content{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}

/* input */
#inputNumber{
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  width: 80%;
  margin: 20px auto;
  height: 20px;
}


/* list */
#listHeader{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

#listHeader > h5{font-size: 20px;}

#listReset{
  background-color: #333;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px;
  transition: .3s all;
  cursor: pointer;
}

#listReset:hover{opacity: 0.8;}

/* result */
#resultList{
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.resultHeader{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}

.modBtn,.delBtn{
  background-color: rgba(0, 0, 0, 0);
  margin: 0 2px;
  padding: 2px;
  border-radius: 3px;
  cursor: pointer;
  transition: .3s all;
}

.modBtn{border: 2px solid #5165EA;}
.delBtn{border: 2px solid #EA5151;}

.modBtn:hover{
  background-color: #5165EA;
  color: #fff;
}

.delBtn:hover{
  background-color: #EA5151;
  color: #fff;
}

.resultBox{
  padding: 10px 20px;
  margin-bottom: 20px;
  border: 2px solid #ddd;
  width: 150px;
  transition: 0.3s all;
  cursor: pointer;
  display: inline-block;
}

.resultBox:hover{box-shadow: 5px 5px 10px #ddd;}
.resultBox > h5{
  font-size: 17px;
  margin-bottom: 10px;
}

.resultBox p{
  display: flex;
  justify-content: space-between;
}

#popup{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: none;
}

#popupBody{
  padding: 10px;
  border-left: 4px solid #EA5151;
  background-color: #fff;
  width: 400px;
  margin: 70px auto;
}

#popupHeader{
  width: 100%;
  margin-bottom: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

#popupHeader > button{
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  color: #ddd;
  font-size: 1.4em;
  cursor: pointer;
  outline: none;
}

#popupContent > *{
  text-align: center;
}

</style>
