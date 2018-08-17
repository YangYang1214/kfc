<template>
<div>
<!--         <div id="sh" style="display:none;text-align:center">已加入购物车</div>
         
 -->     
        <div class="container">
        <div class="row">
                <div id="sh" class="alert alert-primary col-md-2 offset-md-5 " role="alert" style="display:none; position: absolute;top:300px;z-index: 1000;text-align:center;">
                        已加入购物车
                </div>
        </div>
        </div>
     
        <div class="card-deck container">
                
                <div class="box" v-for="(item,index) in imageList">
                  <img class="card-img-top" v-bind:src="item.src" alt="Card image cap">
                  <div class="card-body">
                  <p>{{item.name}}</p>
                  <p>￥{{item.price}}元/份</p>
                  <button type="button" class="btn btn-primary btn-sm btn-block" @click="addList(index)">加入购物车</button>
                  </div>
                </div>
              
               
              </div>
</div>
        
</template>
<script>
     export default {
                    
                    data () {
                        return {
                        imageList:[
                        {id:1,src:require("../../src/assets/food/1.jpg"),name:"大饼1",price:"10"},
                        {id:2,src:require("../../src/assets/food/2.jpg"),name:"大饼2",price:"30"},
                        {id:3,src:require("../../src/assets/food/3.jpg"),name:"大饼3",price:"20"},
                        {id:4,src:require("../../src/assets/food/4.jpg"),name:"大饼4",price:"40"},
                        {id:5,src:require("../../src/assets/food/5.jpg"),name:"大饼5",price:"50"},
                        {id:6,src:require("../../src/assets/food/6.jpg"),name:"大饼6",price:"60"},
                        {id:7,src:require("../../src/assets/food/7.jpg"),name:"大饼7",price:"30"},
                        {id:8,src:require("../../src/assets/food/8.jpg"),name:"大饼8",price:"20"},
                        {id:9,src:require("../../src/assets/food/9.jpg"),name:"大饼9",price:"40"},
                        {id:10,src:require("../../src/assets/food/10.jpg"),name:"大饼10",price:"10"}
                       
                    ]}
                    },
                  
                    methods:{
                      
                        addList:function(index){
                         /*    var id=index;
                            var count=0;
                            var strName=this.imageList[id].name;
                            var strPrice=this.imageList[id].price;
                            this.imageList[id].count++;
                            this.$router.push({
                            //path:'/order',
                            name:'order',
                            params:{
                               id: id,
                               name:strName,
                               price:strPrice,
                               count:count
                            } 
                        })*/
                        //sesson
                        var id=index;
                        var strName=this.imageList[id].name;
                        var strPrice=this.imageList[id].price;
                        
                        var json_data= {id:id,name:strName,price:strPrice,count:1}; 
                       // debugger;
                        if(JSON.parse(sessionStorage.getItem(strName)))
                        {
                            var kk=JSON.parse(sessionStorage.getItem(strName)).count;
                            kk++;
                            json_data.count=kk;
                            sessionStorage.setItem(strName,JSON.stringify(json_data));
                        }
                        else
                        sessionStorage.setItem(strName,JSON.stringify(json_data));
                      //  alert("已添加购物车");
                      debugger;
                        document.getElementById("sh").style.display = 'block';
                        setTimeout(function(){
                            document.getElementById("sh").style.display='none';
                        },1000);
                        
         
                        }

                        
                        },
                     
                   
                }
</script>
<style scoped>
   
   
   .box{
       width:30vh;
       margin-right:2.63vh;
       }
</style>