<template>
  <div>
      <nav-bar/>
      
    <v-container>
        <!-- Grid 가운데 정렬 with v-container -->
        <v-row  align="center"
                justify="center">

            

            <v-card class="mt-5"
                    elevation="3" 
                    outlined 
                    width="85%"
                    height="800px" 
                    justify="center"
                    > 
                        
                        <!-- <v-img  src="@/assets/school.png" width="50px"></v-img>  --> <v-card-title class="Title" >학교 추가하기</v-card-title>

                        <v-divider/>
                    <div class="step-width">
                    <v-stepper class="mt-2 ml-2" value="2" >
                        <v-stepper-header >
                            <v-stepper-step  step="1">
                            기본 정보
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="2">
                            학교 정보
                            </v-stepper-step>


                            <v-divider></v-divider>

                            <v-stepper-step step="3">
                            추가 정보
                            </v-stepper-step >
                        </v-stepper-header>
                    </v-stepper>
                    </div>
                    <!-- END OF STEPPER -->

                   <div class="MAIN_SECTION ml-10 mt-5 d-flex">

                       <div class="FIRST_SECTION">
                           <h1>학과 <br> 추가</h1>
                       </div>

                       <div class="SECOND_SECTION">
                           <div class="flex">
                                <v-text-field
                                    label="입력하여 학과 추가"
                                    outlined
                                    background-color="white"
                                    height="30px"
                                    
                                ></v-text-field>
                                <v-btn color="primary"
                                        width="80px"
                                        height="50px">
                                추가
                                </v-btn>
                           </div>  
                            <!-- END OF FLEX -->

                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">
                                        학과
                                    </th>
                                    <th class="text-left">
                                        비고
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="item in desserts"
                                    :key="item.name"
                                    >
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.calories }}</td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>

                       </div>

                       <div class="THIRD_SECTION">
                           <div class="smallTitle">
                               <h1>소개말</h1>
                           </div>
                       </div>
                       <!-- END OF THIRD SECTION -->
                   </div>
                   <!-- END OF FLEX -->

                   <div class="step-buttons">
                       <v-btn 
                            color="error"
                            width="80px"
                            height="50px"
                        >
                            이전
                            </v-btn>
                        <v-btn
                            class="ma-2"
                            color="success"
                            width="80px"
                            height="50px"
                        >
                            다음
                        </v-btn>
                   </div>
                   

            </v-card>
        </v-row>
    </v-container>

  </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    
    mounted(){
        //App.vue V-app
        $(".v-application").css("background-color","#fffaeb");
    }
}
</script>

<style>
    .Title{
        /* text-align: center; */
        justify-content: center;
    }

    .step-width{
        width: 480px;
    }


    .MAIN_SECTION{
        width: 95%;
        height: 500px;

        border: 1px solid grey;
        background-color: #f2f2f2;;
        border-radius: 15px;

    }

    .FIRST_SECTION{
        width: 35%;

        color: rgb(179, 179, 179);
        text-align: center;

        border: 1px solid rgb(216, 216, 216);
        border-radius: 15px;

    }

    .FIRST_SECTION > h1{
        margin-top: 40%;
    }

    .SECOND_SECTION{
        width: 35%;
        

        border: 1px solid rgb(202, 202, 202);
        border-radius: 15px;

    }

    .SECOND_SECTION .v-text-field{
      width: 80%;
}

    

    .THIRD_SECTION{
        width: 35%;
            

        border: 1px solid rgb(202, 202, 202);
        border-radius: 15px;
    }

    .smallTitle{
        margin-left: 5%;

        width: 90%;
        text-align: center;

        background-color: rgb(238, 238, 238);
        border-radius: 10px;
    }

   .step-buttons{
       justify-items: right;
   }

    .flex{
        display: flex;
        width: 95%; /* 90% of card's width */
        
    }

    .wd-30{width: 30%;}
    .wd-40{width: 40%;}
    .wd-50{width: 50%;}
    .wd-60{width: 60%;}
    .wd-70{width: 70%;}
    .wd-80{width: 80%;}
    .wd-90{width: 90%;}
    .wd-100{width: 100%;}
    .wd-110{width: 110%;}
    

    .hi-30{height: 30%;}
    .hi-40{height: 40%;}
    .hi-50{height: 50%;}
    .hi-60{height: 60%;}
    .hi-70{height: 70%;}
    .hi-80{height: 80%;}

    

  
</style>

//참고
// https://www.javaer101.com/ko/article/2234479.html - 그리드와 가운데 정렬