<script src="../main.js"></script>
<template>
  <div id="root">
    <h2>구구단 입력란</h2>
      <div class="t">몇 단을 입력할까요?</div>
      <input type="number" id="inputNum" v-model="value" v-on:keyup.enter="onSubmitForm">
<!--        <button type="submit">입력</button>-->

    <div id="result" v-for="(num, idx) in list" :key="idx">
      <div class="inputDan">입력하신 단은 {{num.num}}단입니다.</div>
      <div>
        <!-- 리셋, 수정, 삭제 버튼 -->
        <button id="Reset" v-on:click="reset()">리셋</button>
        <button class="mod__btn" v-on:click="onMod(idx)">수정</button>
        <button class="del__btn" v-on:click="onDel(idx)">삭제</button>
      </div>
      <div v-for="index in 9" :key="index">
        <p>{{num.num}} x {{index}} = {{num.num * index}} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      value: null,
      list: [],
    }
  },
  methods: {
    onSubmitForm() {
      let num = parseInt(this.value) // 정수형으로 바꿔준다.
      if(Number.isNaN(num)) {
        alert("아무것도 입력하지 않았습니다.");
        return;
      }

      this.list.unshift({num:num})
    },
    // 저번에는 안에 있는 배열을 초기화했지만 문제가 발생해서 빼주도록 하자.
    reset() {
      this.list = [];
    },

    // 이벤트 발생
    onMod(e) {
      let e_list = parseInt(this.value);
      if(Number.isNaN(e_list)) {
        alert("아무것도 입력하지 않았습니다.");
        return;
      }

      if(this.list[e].num === e_list) {
        alert("이미 수정이 되었습니다.")
        return;
      }

      this.list[e].num = e_list;

    },
    onDel(e) {
      this.list.splice(e, 1)
    },
  }
}
</script>

<style>
:root {
  --bgc: #35394A;
}
* {
  margin: 0; padding: 0;
}
#root {
  position: relative;
  width: 100%;
  height: 500px;
}
input, h2, .t {
  position: relative;
  left: 45%; top: 55%;
}
#inputNum {
  margin-top: 20px;
  background: var(--bgc);
  width: 150px;
  height: 30px;
  color: #fff;
  border-radius: 30px;
  padding: 0 10px;
  outline: none
}

button {
  border-radius: 30px;
  width: 50px;
  height: 30px;
  outline: none;
}

#result {
  position: relative;
  left: 20%;
  top: 20%;
}

p {
  line-height: 30px;
}
</style>
