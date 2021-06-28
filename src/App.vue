<template>
  <div id="app" :class="isPc==1?'min1200':''">
    <router-view />
  </div>
</template>

<script>
export default {
  data(){
    return {
      isPc:sessionStorage.getItem('isPc')
    }
  }
}
</script>

<style>
.min1200{
  min-width: 1200px;
}
</style>