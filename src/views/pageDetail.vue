<template>
  <div class="pageDetail">
      <div v-html="displayContent.title"></div>
      <div v-html="displayContent.content"></div>
  </div>
</template>

<script>
/**
 * 页面接收两个参数 pageId：文章id  type：文章类型 1=>js 2=>css 3=>vue 4=>react 5=>nodejs
 */
export default {
  data() {
    return {
      isPc: sessionStorage.getItem("isPc"),
      displayContent:{},
      domTemplate: "",
    };
  },
  methods:{
      findData(pageId,dataPool){
          dataPool.forEach((item)=>{
              if(item.pageId == pageId){
                  this.displayContent = item;
              }
          })
      }
  },
  created() {
    let type = this.$route.query.type,
      pageId = this.$route.query.pageId,
      dataPool = [];
    if (type && pageId) {
      switch (Number(type)) {
        case 1:
          dataPool = require("../dataPool/jsData.json");
          break;
        case 2:
          dataPool = require("../dataPool/cssData.json");
          break;
        case 3:
          dataPool = require("../dataPool/vueData.json");
          break;
        case 4:
          dataPool = require("../dataPool/reactData.json");
          break;
        case 5:
          dataPool = require("../dataPool/nodejsData.json");
          break;
        default:
          break;
      }
      this.findData(pageId,dataPool)
    }
  },
};
</script>