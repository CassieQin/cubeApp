<template>
  <div class="personal warpper">
    <vhead :headTitle="headTitle" :isShow="isShow"></vhead>
    <div class="content">
        <div class="item">
            <div class="item-li" v-for="(data,index) in datas" :key="data.id">
                <label for="">{{data.name}}：</label>
                <div class="item-con" contenteditable="true" @click="showIcon(index)">{{data.content}}</div>
                <i class="fa fa-close closebtn" v-show="iconShow === index" @click="clearContent(index)"></i>
            </div>
        </div>
        <div class="confirm dark_btn-login btn text-center" @click="confirm">确定</div>
    </div>
  </div>
</template>

<script>
import vhead from "../../common/header";
export default {
  name: "personal",
  data() {
    return {
      headTitle: "个人资料",
      isShow: true,
      iconShow: -1,
      datas: [
        {
          name: "昵称",
          content: "嬉笑太盛的女子"
        },
        {
          name: "手机号码",
          content: "13859544795"
        },
        {
          name: "邮箱",
          content: "1256854@123.com"
        },
        {
          name: "个人说明",
          content: "做一个灵魂有香气的女子~~~"
        },
        {
          name: "个人偏好",
          content: "有格调的生活~~~~~"
        }
      ]
    };
  },
  components: {
    vhead
  },
  methods: {
    showIcon: function(index) {
        this.iconShow = index;
    },
    clearContent: function(index){
        this.datas[index].content = '';
    },
    confirm: function() {
        this.iconShow = false;
        alert("确定要修改资料吗？");
    }
  }
};
</script>

<style scoped>
.content {
  padding: 0;
}
.item {
  background: #fff;
  height: auto;
  padding: 0 0.25rem;
}
.item-li {
  height: 0.88rem;
  line-height: 0.88rem;
  border-bottom: 1px solid #eee;
  padding: 0 0.05rem;
  position: relative;
}
.item-li:last-child{
  border: none;
}
.item-li label {
  display: inline-block;
  width: 1.45rem;
  text-align: right;
  color: #666;
  font-weight: 550;
  font-size: 0.28rem;
}
.confirm {
  margin: 0.44rem 0.15rem 0;
  width: calc(100% - 0.3rem);
}
.item-li .item-con {
  width: calc(100% - 1.55rem);
  float: right;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.24rem;
}
.item-li .closebtn {
  position: absolute;
  right: 0;
  top: 0.35rem;
  color: #999;
  font-size: 0.18rem;
}
.item-con{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>