<template lang="html">
  <div class="app-nav bg-blue clearfix">
      <!-- logo -->
      <div class="nav-logo pull-left">
      </div>
      <!--系统名称-->
      <div class="nav-system pull-left">
          考核系统
      </div>
      <!-- nav menu -->
      <div class="nav-menu pull-right">
          <div class="text-right">
              <span class="pull-left">欢迎您：admin</span>
              <span class="icon bg-green hide">
                  <i class="icon-msg"></i>
              </span>
              <span class="icon bg-teal-blue hide">
                  <i class="icon-project"></i>
              </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'appHeader'
}
</script>

<style lang="scss" scoped="">
  @import '../css/app';

  .app-nav {
      // width: 100%;
      height: 60px;
      padding: 5px 27px;
      z-index: 100;
      position: relative;
      .nav-logo{
          display: inline-block;
          height: 50px;
          width:350px;
          background: url('../assets/logo.png') no-repeat left center;
          background-size: contain;
      }
      .nav-system{
          padding: 7px 10px;
          margin-left: 10px;
          position: relative;
          font-size: 24px;
          letter-spacing:2px;
          &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 7px;
            display: inline-block;
            width: 1px;
            height: 32px;
            background-color: rgba(255,255,255,0.5);
        }
      }
      .nav-menu{
          height: 28px;
          padding: 7px 0;
          margin-top: 5px;
          line-height: 28px;
      }
  }
</style>
