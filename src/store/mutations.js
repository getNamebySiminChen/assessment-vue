export default {
    getMenuData: (state,payload) => {
        return state.homeData.menuData = payload;
    },
    toAddTab: (state,payload) => {
         let tabs = state.homeData.tabs;
         let isExist = false;
         tabs.forEach((item,index) => {
            if (item.index == payload.index) {
                isExist = true;
            }
         })
         if (!isExist) {
            tabs.push(payload);
         }
         return state.homeData.tabs = tabs;
    },
    toRemoveTab: (state,payload) => {
        return state.homeData.tabs.splice(payload,1);
    }
}
