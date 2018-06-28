<template>
  <div class="security warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
      <div class="mine-item">
        <div class="message">
          接收新消息通知
          <!-- <div class="rt switch mt19" :class="{'switch-on':on,'switch-off':!on}" @click="switcher">
            <span class="switch-circle" :style="{left:left}"></span>
          </div> -->
          <switcher class="rt mt19"></switcher>
        </div>
        <div class="setting fsize-24">要关闭或开启格子记的推送通知，请在"设置"-"通知"中找到"格子记"进行设置</div>
        <div class="message message-top">
          消息提示音
          <switcher class="rt mt19"></switcher>
        </div>
        <div class="message message-top">
          消息震动
          <switcher class="rt mt19"></switcher>
        </div>
        <div class="message message-top">
          开启指纹解锁
          <switcher class="rt mt19"></switcher>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vhead from '../../common/header'
import switcher from '../../common/switcher'
export default {
  name: 'security',
  data () {
    return {
      headTitle:'安全隐私',
      isShow: true
    }
  },
  components:{
    vhead,switcher
  },
  methods:{
    
  }
}
</script>

<style scoped>
.content{
  padding: 0;
}
.message{
  height: .88rem;
  line-height: .88rem;
  font-size: .26rem;
  color: #666;
}
.setting{
  height: .8rem;
  line-height: .44rem;
  background: #f7f7f7;
  padding: .04rem 10px;
  vertical-align: middle;
  margin-bottom: .29rem;
}
.message-top{border-top: 1px solid #eee;}
</style>