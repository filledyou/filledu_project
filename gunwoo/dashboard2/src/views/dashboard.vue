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
                    justify="center"
                    > 
                        
                        <!-- <v-img  src="@/assets/school.png" width="50px"></v-img>  --> <v-card-title >대학 리스트</v-card-title>
                    
                    <div class="SEARCH-SECTION d-flex">
                        <v-text-field
                                outlined
                                flat
                                hide-details
                                label="학교 이름을 검색하세요"
                                prepend-inner-icon="mdi-magnify"
                                solo     
                        >
                            <!-- FIELD TEXT SOMETHING ON HERE -->
                        </v-text-field>


                        <v-btn  class="searchBtn ml-1 mr-1 | pa-7"
                                color="error"
                                dark
                                large       
                        >
                                검색
                        </v-btn>
                    </div>
                    <!-- ######## -->
                    <!-- TABLES HERE -->
                    
                    <!-- https://vuetifyjs.com/en/components/data-tables/#external-pagination -->
                    <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :page.sync="page"
                    :items-per-page="itemsPerPage"
                    hide-default-footer
                    class="elevation-1"
                    @page-count="pageCount = $event"
                    ></v-data-table>
                    <div class="text-center pt-2">
                    <v-pagination
                        v-model="page"
                        :length="pageCount"
                    ></v-pagination>
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
        $(".v-application").css("background-color","#fff");
    }
}
</script>

<style>



</style>

//참고
// https://www.javaer101.com/ko/article/2234479.html - 그리드와 가운데 정렬