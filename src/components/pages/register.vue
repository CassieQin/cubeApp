<template>
  <div class="register">
    <div class="close">
      <router-link to="/" class="color-333">
          <i class="fa fa-close"></i>
      </router-link>
    </div>
    <div class="logo dark_logo">
      <i class="fa fa-cube"></i>
    </div>
    <div class="container">
      <div class="fsize-28 iptbox">
        <i class="fa fa-mobile-phone fsize-36"></i>
        <input class="ipt" placeholder="请输入手机号快速注册" />
      </div>
      <div class="fsize-28 mt4 iptbox">
        <i class="fa fa-lock fsize-34"></i>
        <input class="ipt" placeholder="请输入密码"  />
        <span class="code">获取验证码</span>
      </div>
      <button class="btn dark_btn-login fsize-28" type="submit">注 册</button>
      <div class="note-infor fsize-28 text-center">
        <span class="color-888">已有账号？<router-link to="/" class="a-underline color-333">去登录</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.register{padding-top: .4rem;}
.close{
  height: .88rem;
  line-height: .88rem;
  font-size: .45rem;
  margin-left: .3rem;
}
.iptbox .code{
  position: absolute;
  right: 0;
  display: inline-block;
  width: 1.63rem;
  height: .84rem;
  line-height: .84rem;
  background: #333;
  color: #fff;
  text-align: center;
}
</style>