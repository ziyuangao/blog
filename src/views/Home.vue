<template>
  <div class="home">
      <banner-template />
      <menu-list />
  </div>
</template>

<script>

import bannerTemplate from '../components/homeTemplate/banner'
import menuList from '../components/common/menuList.vue'
export default {
  name: 'Home',
  components: {
    bannerTemplate,menuList
  }
}
</script>
