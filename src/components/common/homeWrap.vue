<template>
    <div class="homeWrap">
        <div class="content">
            <user-info />
            <div class="printer" v-html="introduceCopy" ></div>
        </div>
    </div>
</template>

<script>
import userInfo from './userInfo.vue';
export default {
    components:{
        userInfo
    },
    data(){
        return{
            introduce:`高梓原</br>出生于1993年10月28日,汉族</br>2016年毕业于华北水利水电大学</br>18年开始从事前端开发,目前就职于奥鹏教育。</br>
            一个典型的矛盾综合体</br>即浪漫又现实,即自大又谦虚,即疯狂又冷静。</br>
            嘿嘿,我就是我</br>是不一样的烟火</br>哪怕仅有一丝微光,也要烧的漂亮。`,
            introduceCopy:'',
            timer:null
        }
    },
    methods:{
        printer(){
            this.timer = setInterval(()=>{
                this.introduceCopy = this.introduce.substring(0,this.introduceCopy.length)+'_'
                if(this.introduceCopy.length-1 == this.introduce){
                    this.timer = null
                }else{
                    this.introduceCopy = this.introduce.substring(0,this.introduceCopy.length)
                }
            },36)
        }
    },
    mounted(){
        this.printer()
    }
}
</script>
<style scoped>
.homeWrap{
    width:100%;
    background:rgba(233,233,233,.5);
    padding:20px 0;
}
.homeWrap .content{
    border-radius:16px;
    overflow:hidden;
    padding:20px;
    width:1200px;
    background:#fff;
    margin:0 auto;
    display:flex;
    justify-content:space-around;
    align-items:center;
}
.printer{
    flex-basis:40%;
    font-size:16px;
    line-height:24px;
}
</style>