<template>
  <div id="app">
    <el-container class="app-wrap">
        <el-header>
            <app-header></app-header>
        </el-header>
        <el-container class="main">
          <el-aside class="side-nav" width="240px">
              <side-nav></side-nav>
          </el-aside>
          <el-main>
              <main-page></main-page>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import SideNav from './components/SideNav'
import MainPage from './components/MainPage'

export default {
  name: 'App',
  components: {
    AppHeader,
    SideNav,
    MainPage
  }
}
</script>

<style lang="scss" scoped="">
    @import './css/app';
    .el-main{
      margin: 20px;
    }
</style>
