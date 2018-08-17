<template>
        <div class="container">
                <div class="card align-middle">
                        <div class="card-header">
                          进入肯德基宅急送
                        </div>
                        <div class="card-body">
                            <br>
                                <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text" id="basic-addon1"  >用户名</span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="手机号" aria-label="Username" aria-describedby="basic-addon1" v-model="enter.uname" @blur="testPhone()">
                                </div>
                                <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text password" id="basic-addon1">密码</span>
                                        </div>
                                        <input type="password" class="form-control" placeholder="首字母大写，包含8个字符" aria-label="Username" aria-describedby="basic-addon1" v-model="pwd">
                                    </div>
                                    
<!--                           <h5 class="card-title">Special title treatment</h5>
                          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
 -->                          <button type="button" class="btn btn-primary btn-lg btn-block" @click=loginOn() >登录</button>
                              <router-link to="/register" class="card-link">快速注册</router-link>
                              <router-link to="/forgetCode" class="card-link">忘记密码</router-link> 
                        </div>
                         
                </div>
            
        </div>
    </template>
    <script>
         import Bus from '../bus.js'
          export default {
                    
                    data () {
                          return {
                             
                             
                              pwd:'',
                              newsData:[],
                              enter:[
                                  {status_1:true, uname:''}
                                ]
                             
                          }
                        },
                        

                    methods:{

                        testPhone:function(){
                        var mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
                        //输出 true
                        if(!mPattern.test(this.enter.uname)){
                               // this.showP=true;
                               // this.POK=false;
                              //  return;
                             // callback(new Error('密码不能小于6位'));
                                
                        }
                        else
                        {
                               /*  this.showP=false;
                                this.POK=true; */
                        }
                        
                    },
                    loginOn:function(){
                        this.$axios("http://www.wwtliu.com/sxtstu/news/juhenews.php?type=junshi&count=30")
                            .then(res=> {
                               // debugger;
                                this.newsData=res.data.result.data;
                                console.log(this.newsData);
                                console.log(this.newsData.length);
                                for(var i=0;i<this.newsData.length;i++){
                                    if(this.newsData[i].author_name==this.enter.uname&&(this.newsData[i].uniquekey==this.pwd)){
                                      // alert(登录成功);//
                                      this.enter.status_1=false;
                                      Bus.$emit('val', this.enter);
                                   //   console.log(val);
                                       this.$router.push({
                                        path:'/food'
                                       })
                                       
                                        return;
                                    }
                                }

                             /*   console.log(res.data);
                              console.log(this.newsData.result.data[0].title);
                              console.log(res.data.result.data[0].title); */
                               
                               
                            })
                            .catch(error=> {
                                console.log(error);
                            });
                               
                             
                             /*   for(var i=0;i<res.data.length;i++){
                                    if(res.data.author_name[i]==this.uname&&(res.data.uniquekey[i]==this.pwd)){
                                       alert(123);
                                        return;
                                    }
                                } */
                    }
                    }
                    }
    </script>
    <style scoped>
         .container{
            position: relative;
            top:10vh;
            width: 70vh;
        } 
        .card-link{
            text-decoration: none;
            color: black;
        }
    </style>

