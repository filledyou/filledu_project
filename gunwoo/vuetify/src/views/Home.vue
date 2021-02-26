<template>
  <div class="home">
    <!-- Vuetify 설치 참고 -->
    <!-- https://skypacific.github.io/2019/02/16/kang.heehun@introduce_vuetify.html -->
  <v-card>
    <v-tabs
      background-color="deep-purple accent-4"
      center-active
      dark
    >
      <v-tab>기본 정보!</v-tab>
      <v-tab> 메뉴2</v-tab>
      <v-tab>메뉴3</v-tab>
    </v-tabs>
  </v-card>

  <v-card class="form" width="1200">
 <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="이름"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="성"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="이메일"
            required
          ></v-text-field>
        </v-col>
      </v-row>

       <v-radio-group v-model="radioGroup">
      <v-radio
        :label="'남'"
        :value="male"
      ></v-radio>
      <v-radio
        :label="'여'"
        :value="male"
        color="red"
      ></v-radio>
    </v-radio-group>
    
     <v-btn
      depressed
      color="primary"
    >
      전송
    </v-btn>

    </v-container>
  </v-form>
  </v-card>





  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return{

    }
  },

  methods:{

  }
}
</script>

<style>
    *{
      font-family: 'Jua', sans-serif;
    }

    .form{
      margin: 0 auto;
      margin-top: 30px;
    }
</style>
