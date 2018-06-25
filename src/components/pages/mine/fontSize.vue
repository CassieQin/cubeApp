<template>
  <div class="fontsize warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
      <div class="item">
        <div class="item-li relative" v-for="(data,index) in datas" :key="data.id" @click="setFontsize(index)">
          {{data.fontsize}}
          <i class="fa fa-check absolute rt0 top3" v-show="iconShow === index"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'fontsize',
  data () {
    return {
      headTitle:'字号设置',
      isShow: true,
      iconShow: 0,
      datas:[
        {
          fontsize: '20号'
        },{
          fontsize: '22号'
        },{
          fontsize: '24号'
        },{
          fontsize: '26号'
        },{
          fontsize: '28号'
        },{
          fontsize: '30号'
        }
      ]
    }
  },
  components:{
    vhead
  },
  methods:{
    setFontsize: function(index){
      this.iconShow = index;
      console.log('字号已设置成' + this.datas[index].fontsize);
    }
  }
}
</script>

<style scoped>
.content {
  padding: 0;
}
.item {
  background: #fff;
  height: auto;
  padding: 0 0.25rem;
}
.item-li {
  height: 0.88rem;
  line-height: 0.88rem;
  border-bottom: 1px solid #eee;
  padding: 0 0.05rem;
  position: relative;
}
.item-li:last-child{
  border: none;
}
</style>