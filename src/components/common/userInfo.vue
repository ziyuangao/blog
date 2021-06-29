<template>
    <div>
        <el-card shadow="always" @click="$router.push('/about')">
            <el-carousel :height="isPc==1?'360px':'12rem'" 
            :class="isPc == 1 ? 'carouselBox':'carouselBoxForMobile'" 
            :autoplay="carouselConfig.autoplay" 
            :indicator-position="carouselConfig.indicatorPosition">
                <el-carousel-item>
                   <img src="@/assets/avatar/img1.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                   <img src="@/assets/avatar/img2.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                   <img src="@/assets/avatar/img3.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                   <img src="@/assets/avatar/img4.jpg" />
                </el-carousel-item>
            </el-carousel>
        </el-card>
    </div>
</template>

<script>
export default{
    data(){
        return{
            isPc:undefined,
            carouselConfig:{
                autoplay:true,
                indicatorPosition:'none'
            },
            avatarArr:[
                {id:1,src:"@/assets/avatar/img1.jpg"},
                {id:2,src:"@/assets/avatar/img2.jpg"},
                {id:3,src:"@/assets/avatar/img3.jpg"},
                {id:4,src:"@/assets/avatar/img4.jpg"},
            ]
        }
    },
    created(){
        this.isPc = sessionStorage.getItem('isPc')
    }
}
</script>

<style scoped>
.carouselBox{
    width:270px;
    height:360px;
    cursor: pointer;
}
.carouselBoxForMobile{
    width: 9rem;
    height: 12rem;
    
}
.carouselBox .el-carousel-item{
    width:100%;
    height:100%;
}
.carouselBox img{
    width:100%;
    height:100%;
}
.carouselBoxForMobile img{
    width:100%;
    height:100%;
}
</style>