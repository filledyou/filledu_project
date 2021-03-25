<template>
  <div>

    <div class="nav" >
        <div class="float-right mt-1 mr-2 ">
            <v-menu offset-y >
                <template v-slot:activator="{ on, attrs }">
                    
                    <v-btn
                        class="pt-5"
                        color="primary"
                        v-bind="attrs"
                        v-on="on"

                        width="120px"
                        height="50px"
                    >
                    <p><v-icon>fas fa-caret-down</v-icon>  Admin</p>
                    
                    </v-btn>
                    
                </template>
                <v-list>
                    <v-list-item>프로필</v-list-item>
                    <v-list-item>설정</v-list-item>
                    <v-list-item>로그아웃</v-list-item>
                </v-list>
            </v-menu>
        </div>
        <!-- END OF FLOAT RIGHT -->
    </div>
        


    <div class="YS">
        <v-card class=" mt-5"
                elevation="3" 
                outlined 
                width="85%" 
                justify="center"
                > 

                <div class="SEARCH-SECTION d-flex">
                    <v-text-field
                            flat
                            hide-details
                            label="학교 이름을 검색하세요"
                            prepend-inner-icon="mdi-magnify"
                            solo
                    >
                    <!-- FIELD TEXT SOMETHING ON HERE -->
                    </v-text-field>


                    <v-btn  class="searchBtn ml-3"
                            color="error"
                            dark
                            large
                            
                    >
                            검색
                    </v-btn>
                </div>
            
        </v-card>
    </div> 

  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav{
  width: 100%;
  height: 60px;

  background-color: rgb(0, 176, 240);
}



.YS{
    margin: 0 auto;
}

</style>