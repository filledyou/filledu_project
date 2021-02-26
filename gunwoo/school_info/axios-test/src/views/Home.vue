<template>
  <div class="home">
    <button @click="getInfo">Get the Information</button>
    {{action}}
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'


export default {
  name: 'Home',
  data(){
    return{
      action: '',
      userData: ''
    }
  },
  methods:{
    getInfo(){
      var self = this; //안해주면 인식 안되는 eval 오류 뜸; 
      //https://forum.vuejs.org/t/why-i-can-not-set-data-in-my-component-and-getting-cannot-set-property-of-undefined/4598
      //https://stackoverflow.com/questions/43613115/vue-cannot-set-property-of-undefined-in-promise

      axios.post('https://filledyou.com:7770/api/auth/login', {"email":"gunoo827@naver.com", "password": "twins2134**"}).then(function(response){
        if(response.data.result == "success"){
          console.log("접속 완료")
          self.action = "axios가 작동한다!!"
        }
        else{
          self.action = "axios 연결 실패:("
        }
        console.log(response)
      }).catch(function(error){
        console.log(error);
      })
    }
  }
}
</script>
