<template>
  <div class="label warpper">
    <vhead :headTitle="headTitle" :isShowPlus="isShowPlus" :isShowRight="isShowRight"></vhead>
    <div class="content">
      <div class="item-list" v-for="item in items" :key="item.id" @click="viewList">
        <div class="lt">
          <i class="fa fa-tags fsize-34"></i>
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
  name: 'label',
  data () {
    return {
      headTitle:'标签',
      isShowPlus: true,
      isShowRight: true,
      items:[
        {
          name:'JavaScript',
          number:10
        },{
          name:'HTML',
          number:20
        },{
          name:'css',
          number:42
        },{
          name:'ajax',
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