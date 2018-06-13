<template>
  <div class="file warpper">
    <vhead :headTitle="headTitle" :isShowPlus="isShowPlus" :isShowRight="isShowRight"></vhead>
    <div class="content">
      <div class="item-list" v-for="item in items" :key="item.id" @click="viewList">
        <div class="lt">
          <i class="fa fa-folder-open fsize-34"></i>
          <span class="fsize-28 color-333">{{item.name}}&nbsp;&nbsp;&nbsp;( {{item.number}} )</span>
        </div>
        <div class="rt color-999 fsize-48"><i class="fa fa-angle-right"></i></div> 
      </div>
    </div>
    <vfoot></vfoot>
  </div>
</template>

<script>
import vhead from '../../common/header'
import vfoot from '../../common/footer'
export default {
  name: 'file',
  data () {
    return {
      headTitle:'文件夹',
      isShowPlus: true,
      isShowRight: true,
      items:[
        {
          name:'工作',
          number:10
        },{
          name:'生活',
          number:20
        },{
          name:'杂记',
          number:42
        },{
          name:'书刊',
          number:15
        }
      ]
    }
  },
  methods:{
    viewList: function(){
      console.log(1);
    }
  },
  components:{
    vhead,vfoot
  }
}
</script>

<style scoped>

</style>