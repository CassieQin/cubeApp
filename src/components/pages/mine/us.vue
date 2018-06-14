<template>
  <div class="us warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'us',
  data () {
    return {
      headTitle:'关于我们',
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