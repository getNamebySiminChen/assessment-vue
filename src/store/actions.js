import axios from 'axios'
export const GetMenuData = (context) => {
    axios.get(context.state.api.GetMenuData)
    .then(
      (response)=>{
          context.commit('getMenuData',response.data);
      }
    )
}
export const ativateTab = (context,tab) =>{
  let param = {
      index: tab[0],
      path: tab[1],
      FullName: tab[2],
      active: true
  }
  context.commit('toAddTab',param);
}
export const removeTab = (context,index) => {
  context.commit('toRemoveTab',index);
}
