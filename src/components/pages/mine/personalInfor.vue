<template>
  <div class="personal warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'personal',
  data () {
    return {
      headTitle:'个人资料',
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