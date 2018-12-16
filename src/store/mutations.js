export default {
    // 获取侧边栏数据
    getMenuData: (state,payload) => {
        return state.homeData.menuData = payload;
    },
    // 添加/激活tab
    toAddTab: (state,payload) => {
         let tabs = state.homeData.tabs;
         let isExist = false;
         tabs.forEach((item,index) => {
            if (item.index == payload.index) {
                isExist = true;
                item.active = true;
            }else{
              item.active = false;
            }
         })
         if (!isExist) {
            tabs.push(payload);
         }
         return state.homeData.tabs = tabs;
    },
    // 删除tab
    toRemoveTab: (state,payload) => {
        state.homeData.tabs = state.homeData.tabs.filter(item => item.index != payload);
        if (state.homeData.tabs.length) {
          state.homeData.tabs[state.homeData.tabs.length -1].active = true;
        }
        return state.homeData.tabs;
    }
}
