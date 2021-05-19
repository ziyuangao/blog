<template>
    <div>
        <div v-if="isPc==1" class="menuList">
            <el-button type="text" v-for="(item,index) in menuList" :key="index" :disabled="item.disabled" v-text="item.menuName" @click="switchRouter(item)"></el-button>
        </div>
        <div v-else class="menuListForMobile">
            <el-button icon="el-icon-s-unfold" circle class="openMenuList" @click="changeMenuStatus(true)" ></el-button>
        </div>
        <el-drawer v-model="menuStatus" :direction="drawerConfig.direction" title="菜单">
            <ul class="menuListUl">
                <li v-for="(item,index) in menuList" :key="index">
                    <el-button type="text" :disabled="item.disabled" v-text="item.menuName" @click="switchRouter(item)"></el-button>
                </li>
            </ul>
           
        </el-drawer>
    </div>
</template>

<script>
export default {
    data(){
        return {
            menuStatus:false,//false关闭 true打开
            isPc:sessionStorage.getItem('isPc'),//1 pc 2 h5
            drawerConfig:{
                direction:'ltr',
            },
            menuList:[
                {id:1,menuName:'首页',path:'/home',disabled:false},
                {id:2,menuName:'笔记',path:'/notes',disabled:false},
                {id:3,menuName:'生活',path:'/daily',disabled:false},
                {id:4,menuName:'关于',path:'/about',disabled:false},
            ]
        }
    },
    methods:{
        changeMenuStatus(bol){
            this.menuStatus = bol;
        },
        switchRouter(item){
            if(item.path && !item.disabled){
                this.$router.push(item.path)
            }
        }
    }
}
</script>
<style scoped>
.menuList{
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.menuList .el-button{
    margin: 10px 20px;
    font-size: 16px;
    color: 	#F5F5F5;
    font-weight: bold;
}
.menuList .el-button:hover{
    color:#606266;
}
.menuListForMobile{
    position: absolute;
    top: 0;
    left: 0;
    width: 3rem;
    height: 100%;
}
.menuListUl li{
    padding:0.4rem 0 0.4rem 2rem;
    box-sizing: border-box;
    font-weight: bold;
}
.menuListForMobile .openMenuList{
    margin: .5rem;
    background: #909399;
    border: 1px solid #909399;
    color: #fff;
}
</style>