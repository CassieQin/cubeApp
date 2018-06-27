<template>
  <div class="fontfamily warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
      <div class="mine-item">
        <div class="mine-item-li relative" v-for="(data,index) in datas" :key="data.id"  @click="setFontfamily(index)">
          {{data.font}}
          <i class="fa fa-check absolute rt0 top3" v-show="iconShow === index"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'fontfamily',
  data () {
    return {
      headTitle:'字体设置',
      isShow: true,
      iconShow: 0,
      datas:[
        {
          font: '方正行楷简体',
          family: ''
        },{
          font: '方正兰亭细黑_GBK',
          family: ''
        },{
          font: '方正黑体_GBK',
          family: ''
        },{
          font: '华文行楷',
          family: ''
        }
      ]
    }
  },
  components:{
    vhead
  },
  methods:{
    setFontfamily: function(index){
      console.log('字体已设置成' + this.datas[index].font);
      this.iconShow = index;
    }
  }
}
</script>

<style scoped>
.content {
  padding: 0;
}
</style>