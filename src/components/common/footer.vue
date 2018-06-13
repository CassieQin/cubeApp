<template>
  <div class="footer">
    <router-link class="tabbar" to="/note">
      <span class="fsize-36 block"><i class="fa fa-book"></i></span>
      <span class="fsize-16">笔记</span>
    </router-link>
    <router-link class="tabbar" to="/file">
      <span class="fsize-36 block"><i class="fa fa-folder-open"></i></span>
      <span class="fsize-16">文件</span>
    </router-link>
    <router-link class="tabbar" to="/label">
      <span class="fsize-36 block"><i class="fa fa-tags"></i></span>
      <span class="fsize-16">标签</span>
    </router-link>
    <router-link class="tabbar" to="/mine">
      <span class="fsize-36 block"><i class="fa fa-user"></i></span>
      <span class="fsize-16">我</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.footer{
  width: 100%;
  height: .98rem;
  background: #000;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items:center;
}
.tabbar{
  flex-grow: 1; 
  align-items:center; 
  text-align: center;
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #888;
  vertical-align: middle;
}
.tabbar span:first-child{margin-top: .09rem;}
.tabbar span{
  height: .4rem;
  line-height: .4rem;
}
.router-link-active{color: #fff;}
</style>