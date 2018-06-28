<template>
  <div class="switcher">
    <div class="switch" :class="{'switch-on':on,'switch-off':!on}" @click="switcher">
        <span class="switch-circle" :style="{left:left}"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'switcher',
  data () {
    return {
      left: '2px',
      on: false
    }
  },
  methods: {
    switcher: function(){
      if(this.on){
        this.on = false;
        this.left = '2px';
      }else{
        this.on = true;
        this.left = '.52rem';
      }
    }
  }
}
</script>

<style scoped>
.switch{
    width: 1rem;
    height: .5rem;
    border-radius: 28px; 
    position: relative;
}
.switch-on{background: #000;}
.switch-off{background: #999;}
.switch-circle{
    display: inline-block;
    width: .46rem;
    height: .46rem;
    border-radius: 100%;
    background: #fff; 
    position: absolute;
    top: 1px;
}
</style>