<template>
    <div class="banner">
        <div v-if="isPc==1" class="pcBanner" >
            <div class="bannerText">
                <p>故事要美必须藏着真话</p>
                <p>If a story wants to be beautiful, it must hide this truth.</p>
            </div>
        </div>
        <div v-else class="mobileBanner">
            <div class="bannerText">
                <p>故事要美必须藏着真话</p>
                <p>If a story wants to be beautiful, it must hide this truth.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isPc:undefined
        }
    },
    created(){
        this.isPc = sessionStorage.getItem('isPc')
    }
}
</script>

<style scoped>
.pcBanner{
    width: 100%;
    height: 700px;
    background: url('../../assets/pc-banner-bg.jpg') no-repeat 100% 90%;
    background-size: 100%;
}
.pcBanner .bannerText{
    position: absolute;
    left: 6%;
    top: 550px;
    font-weight: bold;
    color: #DCDCDC;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 5px;
    /* cursor: pointer; */
}
.pcBanner .bannerText p:nth-of-type(2){
    font-size: 18px;
    margin-top: 24px;
    letter-spacing: 0;
}
.mobileBanner{
    position: relative;
    width: 100%;
    height: 33rem;
    background: url('../../assets/h5-banner-bg.jpg') no-repeat 100% 70%;
    background-size: 100%;
}
.mobileBanner .bannerText{
    position: absolute;
    color: #DCDCDC;
    /* font-size: 1rem; */
    bottom: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    left: 1rem;
}
.mobileBanner .bannerText p:nth-of-type(2){
    font-size: .8rem;
    font-weight: 400;
    margin-top: 1rem;
}
</style>