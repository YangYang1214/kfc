<template>
    
     <!--    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-8 p-lg-5 mx-auto my-5">
                  <h1 class="display-4 font-weight-normal">欢迎光临KFC点餐系统</h1>
                  <router-link class="btn btn-outline-secondary" to="/order">赶紧订购吧！</router-link>
                </div>
        </div>  -->
   <!--      <div class="jumbotron masthead">
                <div class="container">
                  <h1>Bootstrap</h1>
                  <h2>简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。</h2>
                  <p class="masthead-button-links">
                    <a class="btn btn-lg btn-primary btn-shadow" href="https://v3.bootcss.com/" target="_blank" role="button" onclick="_hmt.push(['_trackEvent', 'masthead', 'click', 'masthead-Bootstrap3中文文档'])">Bootstrap3中文文档(v3.3.7)</a>
                  </p>
                  <ul class="masthead-links">
                    <li>
                      <a href="https://v2.bootcss.com/" target="_blank" role="button" onclick="_hmt.push(['_trackEvent', 'masthead', 'click', 'masthead-Bootstrap2中文文档'])">Bootstrap2中文文档(v2.3.2)</a>
                    </li>
                  </ul>
                </div>
        </div> -->
        <div>
                <header class='hero'>
                        <div class='cover parallax bg' >
                                <div class="container col-md-4 col-offset-md-4 ">
                            
                                        <div class="row">
                                            <div class="orderbox">
                                                    <h4>大促销聚优惠！</h4>
                                                    <button class="btn btn-danger" ><router-link to="/food" style=" text-decoration:none;color:white">赶紧抢购吧！</router-link></button>
                                            </div>
                                           
        
                                        </div>
                                </div>
                        </div>
                     
                </header>
        </div>
       
    
</template>
<style>
  
    .bg{
         
         background: url(../assets/homeimage.jpg) no-repeat center;
         height: 100vh;
        /*   background-size:contain;   */
          
      
      
    } 
    .orderbox{
         background-color: antiquewhite;
         opacity:0.8;
         width:300px;
         padding:30px;
         text-align: center;
         margin-top: 230px;
    } 
  
</style>