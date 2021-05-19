<template>
  <div class="notesWrap">
    <div v-if="isPc == 1" class="pcNoteWrap" >
        <menu-list />
        <div class="leftPart" >
            <el-menu default-active="1">
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <template #title>导航三</template>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <template #title>导航四</template>
                    </el-menu-item>
            </el-menu>
        </div>
        <div class="rightPrat" ></div>
    </div>
    <div v-else>
      <menu-list />
      <ul class="tabBar">
        <li
          v-for="(item, index) in tabList"
          :key="index"
          @click="currentIndex = index"
           :class="currentIndex == index ? 'tabbarActive':''"
        >
          <el-button
            type="text"
            :disabled="item.disabled"
            v-text="item.tabName"
          ></el-button>
        </li>
      </ul>
      <div class="tabWrap">
        <div
          v-for="(item, index) in tabList"
          :key="index"
          v-show="currentIndex == index"
          class="tabWrapItem"
        >
          <ul v-if="item.pageList && item.pageList.length">
            <li
              v-for="(k, v) in item.pageList"
              :key="v"
              v-text="k.title"
              @click="showPageDetail(k)"
              :class="k.disabled ? 'textDisabled' : ''"
            ></li>
          </ul>
          <el-empty description="暂无内容" v-else></el-empty>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuList from "../common/menuList.vue";
export default {
  components: {
    menuList,
  },
  data() {
    return {
      currentIndex: 0,
      isPc: sessionStorage.getItem("isPc"),
      tabList: [
        {
          id: 1,
          tabName: "JS",
          path: "/notes/js",
          disabled: false,
          pageList: [
            {
              pageId: 1,
              title: "这是一个测试标题这是一个测试标题这是一个测试标题",
              disabled: true,
              type:'1'
            },
            { pageId: 2, title: "这是一个测试标题", disabled: false, type:'1' },
            { pageId: 3, title: "这是一个测试标题", disabled: false, type:'1' },
            { pageId: 4, title: "这是一个测试标题", disabled: false, type:'1' },
            { pageId: 5, title: "这是一个测试标题", disabled: false, type:'1' },
            { pageId: 6, title: "这是一个测试标题", disabled: false, type:'1'},
            { pageId: 7, title: "这是一个测试标题", disabled: false, type:'1' },
          ],
        },
        { id: 2, tabName: "Css", path: "/notes/css", disabled: false },
        { id: 3, tabName: "Vue", path: "/notes/vue", disabled: false },
        { id: 4, tabName: "React", path: "/notes/react", disabled: true },
        { id: 5, tabName: "Nodejs", path: "/notes/nodejs", disabled: true },
      ],
    };
  },
  methods: {
    showPageDetail(item) {
      // 此处的item携带的是page的id
      if (item.pageId && !item.disabled) {
        this.$router.push({ path: "/pageDetail", query: { pageId: item.pageId,type:item.type } });
      }
    },
  },
};
</script>

<style scoped>
.notesWrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.tabBar {
  position: absolute;
  top: 0.5rem;
  right: 0;
  width: 84%;
  height: 2.6rem;
  background: #e4e7ed;
  border-radius: 0.8rem 0 0 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tabWrap {
  padding-top: 3.6rem;
  width: 94%;
  margin: 0 auto;
}
.tabWrap .tabWrapItem {
  padding: 0.8rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: rgb(233, 233, 233);
  border-radius: 1rem;
  overflow: hidden;
}
.tabWrap .tabWrapItem li {
  line-height: 2rem;
  text-decoration: underline;
  margin-bottom: 1rem;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.textDisabled {
  color: #909399;
}
.tabbarActive .el-button{
    color: #F56C6C;
}
.pcNoteWrap{
    width: 100%;
    height: 100%;
}
.pcNoteWrap /deep/ .menuList .el-button{
    color: #303133;
}
.pcNoteWrap /deep/ .menuList .el-button:hover{
    color: #606266;
}
.pcUserWrap{
    width: 100%;
    padding-top: 70px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}
.leftPart,.rightPart{
    padding-top: 70px;
    display: inline-block;
}
.leftPart{
    width: 20%;
}
.rightPart{
    width: 78%;
}
</style>