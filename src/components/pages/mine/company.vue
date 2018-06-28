<template>
  <div class="company warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content content-fff">
      <div class="mt2 fsize-32 color-333">格子科技有限公司</div>
      <div class="mt35 conpany-detail">
        创新最有意思的地方，在于它本身其实并没有多大意思，它来自于平凡的想法，需要付诸极大的勇气与毅力来坚持，甚至在这一过中还需承受莫大的痛苦。当对于「创新」的理解越来越深刻，当我重新思考我们的服务，我发现，我们所有在做的一切，都逃不开商业模式创新的范畴，本质上都在做商业模式创新。
      </div>
      <div class="company-img">
        <img src="../../../assets/company.jpg" alt="" srcset="">
      </div>
      <div class="fsize-28 color-666 conpany-address">
        <p>公司地址：陕西省西安市高新区锦业路1号</p>
        <p>公司网址：www.gz.con</p>
        <p>联系电话：029-8888888&nbsp;&nbsp;&nbsp;&nbsp;13688888888</p>
      </div>
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
.content { padding: 0;}
.content-fff {
  background: #fff;
  height: calc(100% - 1.18rem);
  padding: 0 .25rem;
}
.conpany-detail {
  text-indent: 2em;
  line-height: 25px;
  font-size: .28rem;
  color: #666;
}
.company-img {
  height: 4.75rem;
  margin: .3rem 0;
}
.company-img img {width: 100%; height: 100%;}
.conpany-address p {line-height: 25px;}
</style>