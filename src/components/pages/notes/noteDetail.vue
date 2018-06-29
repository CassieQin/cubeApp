<template>
  <div class="notedetail warpper">
    <vhead :isShow="isShow" :isShowfont="isShowfont"></vhead>
    <div class="content content-fff">
      <div class="detail-title color-333 fsize-32">《呼啸山庄》杂记</div>
      <div class="detail-time color-999 fsize-24">2018-06-11 16:02</div>
      <div class="detail-content color-888 fsize-28">
          <p class="text">夏洛蒂和传记作者告诉我们，爱米丽生性独立、豁达、纯真、刚毅、热情而又内向。她颇有男儿气概，酷爱自己生长其间的荒原，平素在离群索居中，除去手足情谊，最喜与大自然为友，从她的诗和一生行为，都可见她天人合一宇宙观与人生观的表现，有人因此而将她视为神秘主义者。其实人与自然的关系，从来就是人类文明史上重要的命题，爱米丽不过是步历代哲人、隐者、科学家、艺术家后尘，通过生活和创作，身体力行地探寻人与自然的关系。</p>
          <p class="text">她颇有男儿气概，酷爱自己生长其间的荒原，平素在离群索居中，除去手足情谊，最喜与大自然为友，从她的诗和一生行为，都可见她天人合一宇宙观与人生观的表现，有人因此而将她视为神秘主义者。其实人与自然的关系，从来就是人类文明史上重要的命题，爱米丽不过是步历代哲人、隐者、科学家、艺术家后尘，通过生活和创作，身体力行地探寻人与自然的关系。</p>
          <p class="img"><img src="../../../assets/img.jpg" alt=""></p>
      </div>
    </div>
    <div class="footer">
      <div class="item" @click="edit"><i class="fa fa-edit"></i></div>
      <div class="item" @click="leadout"><i class="fa fa-share-square-o"></i></div>
      <div class="item" @click="share"><i class="fa fa-share-alt"></i></div>
      <div class="item" @click="deleteDetail"><i class="fa fa-trash-o"></i></div>
    </div>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: 'notedetail',
  data () {
    return {
      isShow: true,
      isShowfont: true
    }
  },
  components:{
      vhead
  },
  methods:{
    edit: function(){
      console.log('再次编辑笔记~~');
    },
    leadout: function(){
      console.log('导出成其他格式吧~~');
    },
    share: function(){
      console.log('分享给他人吧~~');
    },
    deleteDetail: function(){
      console.log('真的要删除吗？？');
    }
  }
}
</script>

<style scoped>
.content-fff{
  background: #fff;
  height: calc(100% - 2.36rem);
  padding: 0 .25rem;
}
.detail-title{
  height: .7rem;
  line-height: .7rem;
}
.detail-time{
  height: .3rem;
  line-height: .3rem;
  margin-bottom: .25rem;
}
.detail-content .text{
    text-indent: 2em;
    line-height: .45rem;
}
.detail-content .img img{
  width: 100%;
  height: 100%;
  margin: .2rem 0;
}
.footer{
  width: 100%;
  height: .98rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items:center;
}
.item{
  flex-grow: 1; 
  align-items:center; 
  text-align: center;
  font-size: .48rem;
}
</style>