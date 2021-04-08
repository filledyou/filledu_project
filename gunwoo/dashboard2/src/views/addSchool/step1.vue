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
                    <v-stepper class="mt-2 ml-2" value="1" >
                        <v-stepper-header >
                            <v-stepper-step  step="1">
                            기본 정보
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="2">
                            학과 정보
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="3">
                            추가 정보
                            </v-stepper-step>
                        </v-stepper-header>
                    </v-stepper>
                    </div>
                    <!-- END OF STEPPER -->

                    <div class="INFO-INPUT-SECTION d-flex"> <!--파일과 input 섹션!-->
                        <div class="FILE-SECTION">
                            <v-img src="@/assets/upload.png" width="200px"></v-img>
                            <v-file-input accept=".gif, .jpg, .png" placeholder="학교 이미지"></v-file-input>
                        </div>

                        <div class="INPUT-SECTION mt-5 ">
                            <!-- INPUTS THINGS HERE -->
                            <p class="">이름 | Name</p>
                            <v-text-field 
                                    v-model="step1.schoolName"
                                    class="wd-90"
                                    filled
                                    label=""
                                    clearable
                                ></v-text-field>

                        
                             <p class="">지역 | Address</p>
                        <div class="flex">
                            <v-text-field
                                    v-model="step1.schoolAddress" 
                                    class="wd-10"
                                    filled
                                    disabled
                                    label="검색하기"
                                    prepend-inner-icon="mdi-map-marker"
                                ></v-text-field>
                            
                             <v-btn 
                                    height="55px"
                                    tile
                                    color="success"
                                    >
                                    <v-icon left>
                                        mdi-magnify-scan
                                    </v-icon>
                                    검색
                                    </v-btn>
                        </div>
                    <div class="flex">
                        <p class="">재학기간 / enrollment period </p>
                        <p style="margin-left: 32.5%">이메일 /  </p>
                    </div>
                    <div class="flex">
                        <v-select
                            class="wd-20"
                            :items="enrollList"
                            filled
                            label="Filled style"
                        ></v-select>

                        <!-- 나중에 이메일 valdation 도 찾아보기 -->
                       
                        <v-text-field
                            v-model="step1.schoolEmail"
                            style="margin-left: 20px"
                            filled
                            class="wd-20" 
                            placeholder="example@school.com"
                            label="E-mail"
                            
                        ></v-text-field>
                    </div>
                    <!-- end of flex -->
                    <p class="">추가 정보 입력하기</p>
                    <!-- dialog 손 대봐야 됨-->
                     <v-dialog
                        v-model="dialog"
                        width="600px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            >
                            정보입력
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="headline">Use Google's location service?</span>
                            </v-card-title>
                            <v-card-text>
                            Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
                            Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
                            Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.
                            Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.
                            Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.
                            Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.
                            Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.
                            Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.
                            Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.
                            Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
                            +
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                            >
                                Disagree
                            </v-btn>
                            <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                            >
                                Agree
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>


                        <v-btn 
                            color="error"
                            width="80px"
                            height="50px"
                        >
                            이전
                            </v-btn>

                        <!-- 다이얼로그를 뺴고 만들어야 하나? -->
                        <v-dialog
                            v-model="showFillDialog"
                        >
                            <template v-slot:activator="{ on }" >
                           <v-btn
                            @click="Next"
                            class="ma-2"
                            color="success" 
                            width="80px"
                            height="50px"
                            v-on= on
                            >
                                다음
                            </v-btn>
                        </template>
                            
                           <v-alert 
                            prominent
                            type="error"
                            >
                            <v-row align="center">
                                <v-col class="grow">
                                채워지지 않은 필드가 있습니다.
                                </v-col>
                                <v-col class="shrink">
                                <v-btn @click="showFillDialog = false"> 확인</v-btn>    
                                </v-col>
                            </v-row>
                            </v-alert>
                        </v-dialog>
                        

                        </div>
                        
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
            allTextFilled: true,
            showFillDialog: false,

            enrollList: ['test1', 'test2'],
            dialog:false,

            step1:{
                schoolName: '',
                schoolAddress: '',
                schoolEmail:'',
            }

        }
    },
    methods:{
        Next(){
            if(this.allTextFilled == false){
                this.showFillDialog = true;
                console.log("쇼우 파일 다이얼로그: " +  this.showFillDialog)
            }
             
            

            console.log("학교이름: " + this.step1.schoolName);
            console.log("학교주소: " + this.step1.schoolAddress);
            console.log("학교이메일: " + this.step1.schoolEmail);
            console.log("추가입력: " + this.dialog);
        }

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


    .FILE-SECTION{
        border-radius: 10px;
        
        padding: 70px;

        margin-top: 80px;

        /* margin: 50px; */
        margin-left: 80px;

        cursor: pointer;

        transition: 0.5s;

        background-color: rgb(248, 248, 248);
    }

    .FILE-SECTION:hover{
        background-color: rgb(230, 215, 215);

        transform: scale(1.05);
    }

    .INPUT-SECTION{
        margin-left:80px;

        width: 100%;
    }

    .float-left{
        float: left;
        width: 100%;
    }

    .flex{
        display: flex;
        width: 90%; /* 90% of card's width */
        
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