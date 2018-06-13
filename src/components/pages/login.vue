<template>
  <div class="login container">
    <div class="logo dark_logo">
      <i class="fa fa-cube"></i>
    </div>
    <div class="fsize-28 iptbox">
      <i class="fa fa-user fsize-34"></i>
      <input class="ipt" placeholder="请输入用户名或手机号" />
    </div>
    <div class="fsize-28 mt4 iptbox">
      <i class="fa fa-lock fsize-34"></i>
      <input class="ipt" placeholder="请输入密码"  />
    </div>
    <button class="btn dark_btn-login fsize-28" @click="submitForm">登 录</button>
    <div class="note-infor fsize-28">
      <router-link to="" class="lt color-888">忘记密码？</router-link>
      <span href="" class="rt color-888">没有账号？<router-link to="/register" class="a-underline color-333">去注册</router-link></span>
    </div>
    <div class="third-login color-333 fsize-28">
      <span class="line"></span>  
      <span class="txt">&nbsp;&nbsp;第三方登录&nbsp;&nbsp;</span>  
      <span class="line"></span>  
    </div>
    <div class="social-medial">
      <a href=""><i class="fa fa-qq"></i></a>
      <a href="" class="center"><i class="fa fa-wechat"></i></a>
      <a href=""><i class="fa fa-weibo"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods:{
    submitForm() {
        this.$router.push('/note');
    }
  }
};
</script>

<style scoped>
.third-login {  
   height: .6rem;  
   line-height: .6rem;  
   margin-top: 2.14rem;
   text-align: center;  
   clear: both;
}  
.third-login .line {  
   display: inline-block;  
   width: 2rem; 
   border-top: 1px solid #333;  
}  
.third-login .txt,.third-login .line {vertical-align: middle;} 
.social-medial{
  margin: .78rem .55rem 0;
}
.social-medial a{
  display: inline-block;
  width: .84rem;
  height: .84rem;
  line-height: .84rem;
  border-radius:100%;
  background: #666;
  color: #fff;
  text-align: center; 
  font-size: .40rem;
}
.social-medial a.center{margin: 0 1rem;}
</style>