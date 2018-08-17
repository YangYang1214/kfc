
<template>
    <div id="order">
        <table class="table" >
            <thead>
               <tr id="tab" ref="bd">
                   <th scope="col">序号</th>
                   <th scope="col">商品名称</th>
                   <th scope="col">单价</th>
                   <th scope="col">购买数量</th>
                   <th scope="col">操作</th>
               </tr>
            </thead>
            <tbody v-if="cartList" >
                   <tr v-for="(item,index) in cartList">
                            <th scope="row">{{index+1}}</th>
                            <td >{{item.name}}</td>
                            <td>{{item.price}}</td>
                            <td ><button class="btn btn-secondary btn-sm"  v-on:click="reduceOne(index)">-</button>
                                <input type="text" v-model="item.count">
                            <button class="btn btn-secondary btn-sm"  v-on:click="addOne(index)">+</button></td>
                            <td><button class="btn btn-secondary" v-on:click="deleteLine(index)">删除</button></td>
                    </tr>  
                   
                  
                       
            </tbody>
        </table >
        <h2>总价：￥<span>{{totalPrice}}</span></h2>
        <br>
        
        <div class="container">
                <div class="row">
                        <button type="submit" class="btn btn-lg btn-danger col-md-4 offset-md-4">提交</button>
                </div>
                
                <!-- Content here -->
               
        </div>
        
        
    </div>
</template>


<script>

               export default {
                    
                    data () {
                        return {
                        id:'',
                        cartList:[
                        
                         
                    ]}
                    },
                    created:function(){
                       // console.log(this.$refs.bd.value.length);
                       // this.getParamsthis.getParams();
                    },
                    mounted:function(){
                        var ct=0;
                        debugger;
                        for(var i=0;i<=sessionStorage.length-1;i++){
                            var kk1=sessionStorage.getItem(sessionStorage.key(i));
                            
                            if(sessionStorage.key(i).match("大")){
                                var json_data = JSON.parse(kk1);
                                this.cartList.push({
                                    Nid:ct,
                                    name:json_data.name,
                                    price:json_data.price,
                                    count:json_data.count
                                });
                            }
                           
                        }
                       /*  debugger;
                        var ct=0;
                        for(var i=0;i<10;i++){
                            if(JSON.parse(localStorage.getItem(i))){
                                 ct++;
                                var json_data = JSON.parse(localStorage.getItem("i"));
                                this.cartList.push({
                                    Nid:ct,
                                    name:json_data.name,
                                    price:json_data.price,
                                    count:1
                                });
                            }
                        } */
                      
                       
                    },
                 
                    computed:{
                        totalPrice:function(){
                            var total=0;
                            for(var i=0;i<this.cartList.length;i++){
                                total+=this.cartList[i].price*this.cartList[i].count;
                            }
                            return total;
                        }
                       
                    },
                   
                     methods:{
                        reduceOne:function(index){
                            var Noid=index;
                           if(this.cartList[Noid].count===1) return;
                            this.cartList[Noid].count--;
                          
                        },
                        addOne:function(index){
                            var Noid=index;
                           
                            this.cartList[Noid].count++;
                          
                        },
                        deleteLine:function(index){
                            if(confirm("确定删除吗？")==true)
                            {
                                sessionStorage.removeItem(this.cartList[index].name);
                                this.cartList.splice(index,1);
                            }
                            else
                            return;
                            
                        },
                        /* totalPrice:function(){
                            var total=0;
                            for(var i=0;i<this.cartList.length;i++){
                                total+=this.cartList.
                            }
                        }  */
                        
                       /*  getParams:function(){
                           
                           var routerParams=this.$route.params.id;
                           this.id=routerParams;
                           var kk=0;
                           debugger;
                           if(this.$route.params.name!=undefined){
                           //var kk=this.$refs.bd.value.length;
                           // var kk=document.getElementById('tab').length;
                            for(var i=0;i<this.cartList.length;i++){
                               // total+=this.cartList[i].price*this.cartList[i].count;
                               if(this.cartList[i].name==this.$route.params.name){
                                this.cartList[i].count++;
                                kk++;
                               }
                            }
                           
                            if(kk==0){
                                var temp=this.cartList.length;
                                var kkm=this.$route.params.name;
                                this.cartList.push({
                                    Nid:temp+1,
                                    name:this.$route.params.name,
                                    price:this.$route.params.price,
                                    count:1
                                });
                              

                            }
                           
                         
                           } 
                          
                         

                        },*/
                      /*   watch:{
                            '$route': 'getParams'
                        }   */
                    } 
                  }         
     
</script>


