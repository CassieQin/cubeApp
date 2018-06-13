<template>
  <div class="header">
    <div class="item">
      <i class="fa fa-angle-left fsize-48" @click="goback" v-show="isShow"></i>
      <i class="fa fa-plus fsize-3" v-show="isShowPlus"></i>
    </div>
    <div class="item text-center fsize-32 color-333">{{headTitle}}</div>
    <div class="item text-right">
      <div class="fsize-28" v-show="isShowRight">编辑</div>
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
    isShow:{
      type: Boolean,
      default: false
    },
    isShowRight:{
      type: Boolean,
      default: false
    },
    isShowPlus:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    goback: function(){
      this.$router.back(-1);
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