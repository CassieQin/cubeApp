<template>
  <div class="software warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
      
    </div>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'software',
  data () {
    return {
      headTitle:'软件介绍',
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