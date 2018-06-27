<template>
  <div class="score warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
      
    </div>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'score',
  data () {
    return {
      headTitle:'评分',
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
.content {
  padding: 0;
}
</style>