<template>
  <div class="personal warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
        <div class="item">
            <div class="item-li">
                <label for="">昵称：</label>
                <input type="text" placeholder="嬉笑太盛的女子">
            </div>
            <div class="item-li">
                <label for="">手机号码：</label>
                <input type="text" placeholder="13859544795">
            </div>
            <div class="item-li">
                <label for="">邮箱：</label>
                <input type="text" placeholder="1256854@123.com">
            </div>
            <div class="item-li">
                <label for="">个人说明：</label>
                <input type="text" placeholder="做一个灵魂有香气的女子~~~">
            </div>
            <div class="item-li">
                <label for="">个人偏好：</label>
                <input type="text" placeholder="有格调的生活~~~~~">
            </div>
        </div>
        <div class="confirm dark_btn-login btn text-center">确定</div>
    </div>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'personal',
  data () {
    return {
      headTitle:'个人资料',
      isShow: true
    }
  },
  components:{
    vhead
  },
  methods:{
    
  }
}
</script>

<style scoped>
.content{padding: 0;}
.item{
    background: #fff;
    height: auto;
    padding: 0 .25rem;
}
.item-li{
    height: .88rem;
    line-height: .88rem;
    border-bottom: 1px solid #eee;  
    padding: 0 .05rem;  
}
.item-li label{
    display: inline-block;
    width: 1.45rem;
    text-align: right;
    color: #666;
}
.confirm{
    margin: .44rem .15rem 0;
    width: calc(100% - .3rem);
}
</style>