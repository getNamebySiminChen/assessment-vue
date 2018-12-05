<template>
  <div>
      <tab-panel></tab-panel>
      <router-view/>
  </div>
</template>

<script>
import TabPanel from './TabPanel'
export default {
  name: 'MainPage',
  components: {
    TabPanel
  }
}
</script>

<style lang="scss" scoped="">
    @import '../css/app';
</style>
