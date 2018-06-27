<template>
  <div class="company warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
      
    </div>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'company',
  data () {
    return {
      headTitle:'公司介绍',
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