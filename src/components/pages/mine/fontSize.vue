<template>
  <div class="fontsize warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
      <div class="mine-item">
        <div class="mine-item-li relative" v-for="(data,index) in datas" :key="data.id" @click="setFontsize(index)">
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
</style>