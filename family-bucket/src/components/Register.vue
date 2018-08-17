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
                                          <span class="input-group-text" id="basic-addon1" >用户名</span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="手机号" aria-label="Username" aria-describedby="basic-addon1" v-model="username" @blur="testPhone()">
                                        <button type="button" class="btn btn-success btn-sm">发送验证码</button>
                                        
                                </div>
                                <div v-show="showP">手机号格式不正确</div>
                               
                                <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text password" id="basic-addon1"  >密码</span>
                                        </div>
                                        <input type="password" class="form-control" placeholder="包含8-16个字符，至少包含大小写字母和数字" aria-label="Username" aria-describedby="basic-addon1" v-model="pwd" @blur="testPwd()">
                                </div>
                                <div v-show="showD">密码格式不正确</div>
                                <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                              <span class="input-group-text password" id="basic-addon1"  >确认密码</span>
                                            </div>
                                            <input type="password" class="form-control" placeholder="再次输入新密码" aria-label="Username" 
                                            aria-describedby="basic-addon1" v-model="confirmPwd" @blur="comparePwd()">
                                            <span v-model="confirmPwd"></span>
                                </div>
                                <div v-show="showConfirm">密码不一致</div>
                                <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                  <span class="input-group-text password" id="basic-addon1">验证码</span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="六位验证码" aria-label="Username" aria-describedby="basic-addon1" >
                                </div>
                                    
<!--                           <h5 class="card-title">Special title treatment</h5>
                          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
 -->                          <button type="button" class="btn btn-secondary btn-lg btn-block" @click="submitRgt()" v-bind:disabled="!(POK&DOK&COK)" v-bind:style="(POK&DOK&COK)?blue:''">注册</button>
                        </div>
                </div>
               
        </div>
    </template>
    <script>
        export default {
                    
          data () {
                return {
                        username:'',
                        pwd:'',
                        confirmPwd:'',
                        sm:0,
                        showP:false,
                        showD:false,
                        showConfirm:false,
                        POK:false,
                        DOK:false,
                        COK:false,
                        blue:{'background-color':'blue'},
                        grey:{'background-color':'grey'}
                        }
                },
         methods:{
                comparePwd:function(){
                        if(this.pwd!=this.confirmPwd){
                                this.showConfirm=true;
                                this.COK=false;
                        }
                        else
                        {
                                this.showConfirm=false;
                                this.COK=true;
                               // alert("no");
                        }
                },
                testPhone:function(){
                        var mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
                        //输出 true
                        if(!mPattern.test(this.username)){
                                this.showP=true;
                                this.POK=false;
                              //  return;
                                
                        }
                        else
                        {
                                this.showP=false;
                                this.POK=true;
                        }
                        
                },
                testPwd:function(){
                        
                        var mPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
                        //输出 true
                        if(!mPattern.test(this.pwd)){
                                this.showD=true;  
                                this.DOK=false;    
                        }
                        else
                        {
                                this.showD=false; 
                                this.DOK=true;  
                        }
                }
          }
        } 
    </script>
    <style scoped>
         .container{
            position: relative;
            top:10vh;
            width:75vh;

        } 
    </style>