<template lang="html">
  <div class="content-tabs">
      <button class="roll-nav roll-left tabLeft">
          <i class="fa fa-angle-left"></i>
      </button>
      <nav class="page-tabs menuTabs">
          <div class="page-tabs-content">
            <template v-for="(tab,index) in tabs">
              <div class="tab-block pull-left" v-on:click="ativateTab([tab.index,tab.path,tab.FullName])">
                <router-link class="menuTab" active-class="active" v-bind:to="tab.path" :key="tab.index">
                    <span>{{ tab.FullName }}</span>
                </router-link>
                <i class="icon icon-remove" @click.stop="removeCurrTab(tab.index)"></i>
              </div>
            </template>
          </div>
      </nav>
      <button class="roll-nav roll-right tabRight">
          <i class="fa fa-angle-right" style="margin-left: 3px;"></i>
      </button>
      <div class="btn-group roll-nav roll-right">
          <button class="tabReload" @click="refreshPage()">
              <i class="icon icon-refresh" title="刷新当前"></i>
          </button>
      </div>
      <button class="roll-nav roll-right tabCloseCurrent"><i class="icon icon-close" title="关闭当前" @click="removeCurrTab(null)"></i></button>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: "TabPanel",
  computed: {
    ...mapGetters([
      'tabs'
    ])
  },
  data(){
    return {
      activeTab: null
    }
  },
  methods: {
      ...mapActions([
        "removeTab",
        'ativateTab'
      ]),
      removeCurrTab: function(index){
        if (index == null) {
          let activeTab = this.tabs.filter(item => item.active == true );
          index = activeTab[0].index
          console.log(this.tabs);
        }
        console.log(index);
        this.removeTab(index);
        if (this.tabs != 0) {
            this.$router.push(this.tabs[this.tabs.length - 1].path);
        }else {
            this.$router.push('/');
        }
      },
      refreshPage: function(){
          this.$router.go(1);
      }
  }
}
</script>

<style lang="scss" scoped>
    @import '../css/app';

    .content-tabs{
      position:relative;
      height: 38px;
      background: $grey-color;
      font-size: 12px;
      overflow: hidden;
      border: $border;
      border-radius:6px 6px 0 0;
      .roll-nav,.page-tabs-list{
        position: absolute;
        width: 37px;
        height: 37px;
        text-align: center;
        color: #475059;
        z-index: 2;
        top: 0;
      }
      .roll-left{
        left: 0;
        border-right: $border;
      }
      .roll-right{
          right:0;
          border-left: $border;
          &.tabRight{
            right: 97px;
          }
          &.btn-group{
            right:37px;
            width:60px;
            padding:0;
            button{
              width:60px;
            }
          }
          &.tabExit{
            background:#fff;
            height:39px;
            width:40px;
            outline:0
          }
        }
      button{
        background:#f2f4fa;
        border:0;
        height: 37px;
        line-height: 37px;
        width:40px;
        outline:0;
        font-size: 20px;
        &:hover{
          background:#fafafa;
        }
        i{
          color: #999;
          font-size: 20px;
          height:38px;
          line-height:38px;
        }
      }
      nav.page-tabs{
        margin-left:37px;
        width:100000px;
        height:38px;
        line-height:38px;
        overflow:hidden;
        position: absolute;
        background-color: #f2f4fa;
        .page-tabs-content{
          float:left;
          .tab-block{
            border-right: $border;
          }
        }
        a{
          display:block;
          float:left;
          padding: 0 16px 0 16px;
          text-decoration:none;
          color:#575757;
          font-size: 14px;
          // &:first-child{
          //   padding-right:15px;
          // }
          &.active{
            padding: 0 8px 0 16px;
            color: #0054b3;
            background-color: #fff;
            i{
              color: #007aff;
            }
          }
          i{
            margin-top:-10px;
            right: 0px;
            position: relative;
            color: #999;
            margin-right:6px;
            vertical-align: -webkit-baseline-middle;
            &:hover{
              color:#c00 !important;
            }
          }
        }
      }
      .icon{
          display: inline-block;
          width: 21px;
          background-size: contain;
          &.icon-refresh{
            background: url(../assets/icon-refresh.png) no-repeat center;
            background-size: contain;
          }
          &.icon-close{
            background: url(../assets/icon-close.png) no-repeat center;
            background-size: contain;
          }
      }
      .menuTab{
        &~.icon{
            display: inline-block;
            width: 21px;
            height: 21px;
            background-size: contain;
            &.icon-remove{
              display: none;
            }
        }
        &~.icon.icon-remove{
          display: none;
          width: 28px;
          height: 38px;
          padding-right: 16px;
          background: url(../assets/icon-remove.png)no-repeat left center;
          background-size: 12px,12px;
        }
        &.active~.icon.icon-remove{
          display: inline-block;
          background-color: #fff;
        }
      }

    }

</style>
