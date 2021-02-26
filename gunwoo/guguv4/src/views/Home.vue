<template>
  <div id="app">
    <input class="inputStyle" @keyup.enter="whenEnter" type="number" v-model=" $store.state.num" min="1">
      
  <!-- num이 참이되면 보여짐 -->
    <div class="flex">
      
      <div class="box" v-for="(i, index) in $store.state.array" v-bind:key="i"> <!--"array" 부분을 "num" 으로 바꿔주면 누적-->
        <button @click="modi(index)" class="modi">수정</button>
        &nbsp;
        <button @click="remove(index)" :class="'remove-'+i">삭제</button>
       <div class="eachElement" v-for="j in 9" v-bind:key="j">
         {{i}} x {{j}} = {{i * j}}
       </div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  name:'app',
  data(){
    return{
      // array:[],
      // num:'',

      
    }
  },
  methods: {
    // whenEnterPressed
    whenEnter: function(){

      //배열에 문자로 들어가서, Parseint 사용했음 :D
        
      if ((this.$store.state.num == null) || (this.$store.state.num == "") || this.$store.state.num == 0 || this.$store.state.num == "0"){
        alert("값을 입력하세요")
        return;
      }
      else{

         
      
        if(this.$store.state.array.includes(this.$store.state.num)){
          alert("이미 값이 존재합니다");
          return;
        }

        //배열에 push
        
        this.$store.state.array.push(this.$store.state.num)
        // console log
        
        console.log(this.$store.state.array)

      
    }

   
    },

    modi(index){ //<- 이름을 같게 안쓰는게 편함 (변수명이 겹칠 수 있음)
      let modVal = prompt("수정할 값을 입력해주세요:")

      
      if(this.$store.state.array.includes(this.modVal)){
          alert("이미 값이 존재합니다");
          return;
        }

    //  for(let j=0; j<this.array.length; j++){

    //    if(this.array[j] == modVal){
    //       alert("이미 값이 존재합니다")
    //       return;
    //     }

    //     if(parseInt(this.array[j]) == i)
    //       this.array.splice(j,1,modVal)

        
    //   }
      this.$store.state.array.splice(index,1,modVal)

      if(this.$store.state.num != Number)
        return;

    if(modVal != null)
      alert("수정된 값:" + modVal)

    },

    remove(i){ //파라미터는 꼭 위에서 보낸값과 똑같은 변수명으로 안 받아도 됨 (위에 remove에서는 파라미터이름을 index로 보냄)
    
      console.log(typeof(i))
        
      

      this.$store.state.array.splice(i, 1)
      
      
      
    }
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  
}

.inputStyle{
  width: 220px;
  height: 30px;

  border-radius: 10px;
  border: 1px solid grey;
}

.inputStyle:hover{
  transition: 0.1s ease-in-out;
  transform: scale(1.03);
}

.eachElement{
  margin: 3px;
  padding: 2px;
}


.box{
  margin: 10px;
  padding: 10px;

  background-color: rgb(255, 255, 255);

  border: 1px solid rgb(245, 176, 176);
  border-radius: 10px;
  box-shadow: 10px 10px 12px rgb(218, 218, 218);

  width: 250px;
}

.box:hover{
  transition: 0.1s ease-in-out;
  transform: scale(1.03);
  background-color: rgb(255, 173, 173);

  cursor: pointer;
}

button{
  width: 60px;
  height: 30px;
  border: 1px solid grey;
  background-color: #fff;

  border-radius: 3px;
}

button:hover{
  border: 1px solid rgb(187, 159, 159);
  background-color: rgb(201, 201, 201);

  transition: 0.1s ease-in-out;
  transform: scale(1.03);

  cursor: pointer;
}

.flex{
  display: flex;
}

</style>
