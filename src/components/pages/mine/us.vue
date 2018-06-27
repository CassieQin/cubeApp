<template>
  <div class="us warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
      <div class="icon-intro">
        <div class="icon">
          <img src="../../../assets/logo.png" alt="">
        </div>
        <div class="fsize-3 color-333">格子记，懂记录更懂生活！</div>
        <div class="fsize-28 color-999 mt2">软件版本：1.0.1</div>
      </div>
      <div class="mine-item">
        <div class="mine-item-li relative" v-for="data in datas" :key="data.id" @click="jump(data.url)">
          {{data.itemname}}
          <i class="fa fa-angle-right absolute rt0 top2 color-999 fsize-48"></i>
        </div>
      </div>
      <div class="copyright">
        <div>Copyright © 2010-2019 www.gz.com</div>
        <div>联系电话：888888888</div>
      </div>
    </div>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'us',
  data () {
    return {
      headTitle:'关于我们',
      isShow: true,
      datas:[
        {
          itemname: '公司介绍',
          url: '/company'
        },{
          itemname: '软件介绍',
          url: '/software'
        },{
          itemname: '使用条款及隐私政策',
          url: '/policy'
        },{
          itemname: '去评分',
          url: '/score'
        },{
          itemname: '问题反馈',
          url: '/feedback'
        }
      ]
    }
  },
  components:{
    vhead
  },
  methods:{
    jump: function(url){
      this.$router.push(url);
    }
  }
}
</script>

<style scoped>
.content {
  padding: 0;
}
.icon-intro{
  height: 3.4rem;
  text-align: center;
}
.icon{
  width: 1.44rem;
  height: 1.44rem;
  margin: .63rem auto .3rem;
}
.icon img{
  width: 100%;
  height: 100%;
}
.copyright{
  margin-top: .4rem;
  text-align: center;
  font-size: .26rem;
  line-height: .45rem;
  color: #666;
}
</style>