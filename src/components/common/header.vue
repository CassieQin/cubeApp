<template>
  <div class="header">
    <div class="item">
      <i class="fa fa-angle-left fsize-48" @click="goback" v-show="isShow"></i>
      <i class="fa fa-plus fsize-3" v-show="isShowPlus"></i>
    </div>
    <div class="item text-center fsize-32 color-333">{{headTitle}}</div>
    <div class="item text-right">
      <div class="fsize-28" v-show="isShowRight">编辑</div>
      <div class="fsize-3" v-show="isShowList" @click="showlist">
        <i class="fa fa-list"></i>
      </div>
      <div class="" v-show="isShowfont">
        <span @click="setFontsize">Aa</span>
        <span class="ml15" @click="attachment">附件</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
     
    }
  },
  props:{
    headTitle:'',
    isShow: false,
    isShowRight:false,
    isShowPlus:false,
    isShowList:false,
    isShowfont:false
  },
  methods:{
    goback: function(){
      this.$router.back(-1);
    },
    showlist: function(){
      console.log('显示列表');
    },
    setFontsize: function(){
      console.log('设置字号');
    },
    attachment: function(){
      console.log('打开附件');
    }
  }
}
</script>

<style scoped>
.header{
  width: calc(100% - .4rem);
  height: .88rem;
  line-height: .88rem;
  background: #fff;
  box-shadow:0px 2px 3px #ebebeb;
  position: fixed;
  top:0; 
  z-index: 999;
  display: flex;
  flex-direction: row;
  padding: 0 .2rem;
}
.item{flex-grow:1;}
</style>