<template>
  <div class="fontsize warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'fontsize',
  data () {
    return {
      headTitle:'字号设置',
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