<template>
  <div id="nav" :class="isPc==1?'min1366':''">
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
.min1366{
  min-width: 1366px;
}
</style>