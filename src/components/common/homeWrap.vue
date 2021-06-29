<template>
    <div class="homeWrap">
        <div :class="isPc==1?'content':'contentForMobile'">
            <user-info />
            <div :class="isPc==1?'printer':'printerForMobile'" v-html="introduceCopy" ></div>
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
            isPc:undefined,
            introduce:`高梓原</br>出生于1993年10月28日,汉族</br>2016年毕业于华北水利水电大学</br>2018年开始从事前端开发,目前就职于奥鹏教育。</br>
            一个典型的矛盾综合体</br>即浪漫又现实,即自大又谦虚,即疯狂又冷静。</br>
            嘿嘿,我就是我</br>是不一样的烟火</br>哪怕仅有一丝微光,也要烧的漂亮。`,
            introduceCopy:'',
            timer:null
        }
    },
    methods:{
        printer(){
            this.timer = setInterval(()=>{
                if(this.introduceCopy.length - 1 >=  this.introduce.length){
                    // this.timer = null;
                    clearInterval(this.timer)
                    this.introduceCopy = this.introduce;
                }else{
                    this.introduceCopy = this.introduce.substring(0,this.introduceCopy.length)+'_'
                }
            },72)
        }
    },
    created(){
        this.isPc = sessionStorage.getItem('isPc')
    },
    mounted(){
        this.printer();
    }
}
</script>
<style scoped>
.homeWrap{
    width:100%;
    background:rgba(233,233,233,.5);
    padding:1rem 0;
}
.homeWrap .content{
    border-radius:16px;
    overflow:hidden;
    padding:1rem;
    width:1200px;
    background:#fff;
    margin:0 auto;
    display:flex;
    justify-content:space-around;
    align-items:center;
}
.contentForMobile{
    width: 96%;
    margin: 0 auto;
    background:#fff;
    display:flex;
    justify-content:space-around;
    align-items:center;
}
.printer{
    flex-basis:40%;
    font-size:18px;
    line-height:26px;
}
.printerForMobile{
    flex: 1;
    margin-left: .4rem;
    font-size: .8rem;
    line-height: 1rem;
}
</style>