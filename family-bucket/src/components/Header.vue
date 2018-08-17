<template>
    <div>
   
         <!--  <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <h4 class="navbar-brand" >肯德基全家桶</h4>
            <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                            <router-link class="nav-link" to="/">首页</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/order">点单</router-link>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">帮助</a>
                    </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                          <li class="nav-item">
                            <a class="nav-link" href="#">登录</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">注册</a>
                    </li>
            </ul>

          </nav> -->
          <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
              <a class="navbar-brand" href="#">肯德基全家桶</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <router-link class="nav-link" to="/">首页 <span class="sr-only">(current)</span></router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/food">点单</router-link>
                    </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/order">购物车</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/help">帮助</router-link>
                  </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                  
                      <li class="nav-item">
                          <router-link class="nav-link" to="/login" >登录</router-link>
                        </li>
                        <li class="nav-item" >
                            <router-link class="nav-link" to="/register" >注册</router-link>
                        </li>
                        
                </ul>

               <!--  <form class="form-inline mt-2 mt-md-0">
                  <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> -->
              </div>
            </nav>
    </div>
</template>
<script>
    import Bus from '../bus.js'
    export default {
      data () {
        return {
          //name: 0
          show:true
        }
      },
      created: function () {
        debugger;
        var vm = this;
        // 用$on事件来接收参数
        Bus.$on('val', (data) => {
          console.log(data);
          vm.show = data.status_1;
          
        })
      },
    
    }
  </script>