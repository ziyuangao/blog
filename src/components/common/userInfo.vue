<template>
    <div>
        <el-card shadow="always">
            <el-carousel height="370px" class="carouselBox" :autoplay="carouselConfig.autoplay" :indicator-position="carouselConfig.indicatorPosition">
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
    }
}
</script>

<style scoped >
.carouselBox{
    width:270px;
    height:370px;
}
.carouselBox .el-carousel-item{
    width:100%;
    height:100%;
}
.carouselBox img{
    width:100%;
    height:100%;
}
</style>