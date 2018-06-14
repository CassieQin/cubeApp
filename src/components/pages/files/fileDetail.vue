<template>
  <div class="fileDetail warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content ">
      <div class="item item-img mb3" v-for="item in items" :key="item.id">
        <div>
          <div class="item-title">
            <span class="lt fsize-3 color-333">{{item.title}}</span>
            <span class="rt fsize-16 color-999">{{item.time}}</span>
          </div>
          <div class="item-picture" :style="{background: 'url(' + item.url + ') left center no-repeat'}"></div>
          <div class="item-summary fsize-28 color-888">{{item.summary}}</div>
        </div>
        <div class="item-btn" v-html="btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import vhead from '../../common/header'
export default {
  name: "fileDetail",
  data() {
    return {
      headTitle:'工作',
      isShow: true,
      items: [
        {
          title: "《呼啸山庄》杂记",
          time: "2018-06-05 15:17",
          summary:
            "夏洛蒂和传记作者告诉我们，爱米丽生性独立、豁达、纯真、刚毅、热情而又内向。她颇有男儿气概...",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528280580524&di=2debaadf8e4774e43f6de20d7d747168&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd8f9d72a6059252d30cc4a383f9b033b5bb5b937.jpg"
        },{
          title: "《呼啸山庄》杂记",
          time: "2018-06-05 15:17",
          summary:
            "夏洛蒂和传记作者告诉我们，爱米丽生性独立、豁达、纯真、刚毅、热情而又内向。她颇有男儿气概...",
          url: require('../../../assets/img.jpg')
        }
      ],
      btn:
        '<div class="btn-list color-888 border-right"><i class="fa fa-edit"></i> 编辑</div>' +
        '<div class="btn-list color-888 border-right"><i class="fa fa-trash-o"></i> 删除</div>' +
        '<div class="btn-list color-888"><i class="fa fa-share-square-o"></i> 导出</div>'
    };
  },
  methods:{
    
  },
  components:{
    vhead
  }
};
</script>

<style scoped>
.fileDetail .content{
    height: calc(100% - 1.18rem);
}
.item {
  width: calc(100% - 0.4rem);
  background: #fff;
  padding: 0.2rem;
}
</style>
<style>
.item-btn .btn-list {
  flex-grow: 1;
  align-items: center;
  text-align: center;
}
</style>
