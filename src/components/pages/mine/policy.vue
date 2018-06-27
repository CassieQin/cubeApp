<template>
  <div class="policy warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
      
    </div>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'policy',
  data () {
    return {
      headTitle:'使用条款及隐私政策',
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