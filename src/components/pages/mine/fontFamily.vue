<template>
  <div class="fontfamily warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
      <div class="item">
        <div class="item-li relative" v-for="(data,index) in datas" :key="data.id"  @click="setFontfamily(index)">
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