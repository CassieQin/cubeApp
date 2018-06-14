<template>
  <div class="security warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'security',
  data () {
    return {
      headTitle:'安全隐私',
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