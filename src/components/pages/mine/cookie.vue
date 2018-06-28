<template>
  <div class="cookie warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
      
    </div>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'cookie',
  data () {
    return {
      headTitle:'清除缓存',
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