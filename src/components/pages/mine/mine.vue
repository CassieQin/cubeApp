<template>
  <div class="mine warpper">
    <div class="header">
      <div class="userpic text-center">
        <img src="../../../assets/pic.jpg" alt="">
      </div>
      <div class="fsize-28 color-333 text-center username">嬉笑太盛的女子</div>
    </div>
    <div class="mine-content">
      <div class="item-list" v-for="item in items" :key="item.id" @click="jump(item.url)">
        <div class="lt">
          <i class="fa fsize-34" :class="item.icon"></i>
          <span class="fsize-28 color-333">{{item.name}}</span>
        </div>
        <div class="rt color-999 fsize-48"><i class="fa fa-angle-right"></i></div> 
      </div>
      <div class="signout dark_btn-login btn text-center" @click="signout">退出登录</div>
    </div>
    <vfoot></vfoot>
  </div>
</template>

<script>
import vfoot from '../../common/footer'
export default {
  name: 'mine',
  data () {
    return {
      items:[
        {
          icon: 'fa-address-card-o',
          name:'个人资料',
          url:'/personal'
        },{
          icon: 'fa-font',
          name:'字体设置',
          url:'/fontfamily'
        },{
          icon: 'fa-text-width ',
          name:'字号设置',
          url:'/fontsize'
        },{
          icon: 'fa-lock',
          name:'安全隐私',
          url:'/security'
        },{
          icon: 'fa-eraser',
          name:'清除缓存'
        },{
          icon: 'fa-users',
          name:'关于我们',
          url:'/us'
        }
      ]
    }
  },
  components:{
    vfoot
  },
  methods:{
    jump: function(url){
      this.$router.push(url);
    },
    signout: function(){
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.header{
  padding-top: 0.45rem;
  height: 2.2rem;
  background: #fff;
}
.userpic{
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 100%;
  border: 1px solid #0f0f0f;
  margin-left: calc(50% - 0.65rem);
}
.userpic img{
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 100%;
}
.username{
  height: .84rem;
  line-height: .84rem;
}
.mine-content{
  margin-top: .3rem;
  margin-bottom: .98rem;
  background: #fff;
  padding: 0 .15rem;
}
.mine-content .item-list:first-child{
  border-top: 1px solid #eee;
}
.item-list .lt .fa{color:#666;}
.item-list{border-bottom: 1px solid #eee;}
</style>