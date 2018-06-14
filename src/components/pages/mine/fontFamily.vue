<template>
  <div class="fontfamily warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'fontfamily',
  data () {
    return {
      headTitle:'字体设置',
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

</style>