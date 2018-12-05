<template lang="html">
  <el-menu
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu v-for="menu in menuData" v-bind:index="menu.Index" :key="menu.Index">
          <template slot="title">
            <i v-bind:class="menu.Icon"></i>
            <span>{{menu.FullName}}</span>
            <i class="icon-dropDown"></i>
          </template>
          <template v-for="item in menu.children">
              <el-menu-item v-bind:index="item.Index" :key="item.Index" v-on:click="ativateTab([item.Index,item.path,item.FullName])">
                  <router-link active-class="active" v-bind:to="item.path" :key="item.Index">
                      <i class="icon"></i>
                      <span>{{ item.FullName }}</span>
                  </router-link>
              </el-menu-item>
        </template>
      </el-submenu>
  </el-menu>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  name: 'SideNav',
  props: ["tabArr"],
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);

    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    ...mapActions([
      'GetMenuData',
      'ativateTab'
    ])
  },
  computed: {
    ...mapGetters([
      'tabs',
      'menuData'
    ])
  },
  created(){
    this.GetMenuData();
  }
}
</script>

<style lang="scss">
  @import '../css/app';

  @mixin titleIcon{
    width: 16px;
    height: 16px;
    display: inline-block;
  }
  @mixin itemIcon{
    width: 8px;
    height: 8px;
    display: inline-block;
  }
  .el-menu{
      background-color: $grey-color;
      color: $main-color;
      .el-submenu{
          .el-submenu__title{
              color: $main-color;
              font-size: 16px;
              &:hover{
                background-color: $grey-color;
              }
              i.menu-icon-secretaryAndManagerAssessment{
                @include titleIcon;
                background: url('../assets/menu-icon-secretaryAndManagerAssessment.png') center no-repeat;
                background-size: contain;
              }
              i.menu-icon-deptHeadAssessment{
                @include titleIcon;
                background: url('../assets/menu-icon-deptHeadAssessment.png') center no-repeat;
                background-size: contain;
              }
              i.menu-icon-HRAssessment{
                @include titleIcon;
                background: url('../assets/menu-icon-HRAssessment.png') center no-repeat;
                background-size: contain;
              }
              i.menu-icon-assessmentSettings{
                @include titleIcon;
                background: url('../assets/menu-icon-assessmentSettings.png') center no-repeat;
                background-size: contain;
              }
              .el-icon-arrow-down{
                display: inline-block;
                width: 16px;
                height: 16px;
                background: url("../assets/icon-nav-open.png") center center no-repeat;
                background-size: contain;
                &:before{
                  content: '';
                }
              }
          }
          &.is-opened{
            .el-submenu__title{
              .el-icon-arrow-down{
                background: url("../assets/icon-nav-close.png") center center no-repeat;
                background-size: contain;
              }
            }
          }
      }

      .el-menu-item{
        color: $main-color;
        padding: 0!important;
        &.is-active{
          background-color: $main-color!important;
          color: #fff!important;
          a{
              color: #fff;
              i{
                  background: url('../assets/icon-default-active.png');
                  background-size: contain;
              }
          }
        }
        &:hover{
          background-color: $grey-color;
        }
        a{
          color: $main-color;
          display: inline-block;
          text-decoration: none;
          width: 100%;
          height: 100%;
          padding-left: 40px;
          font-size: 14px;
          i{
              @include itemIcon;
              background: url('../assets/icon-default.png');
              background-size: contain;
          }
        }
      }
  }
</style>
