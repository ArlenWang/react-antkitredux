import {storeConfig} from '../config/storeConfig';
const initialAuthState = { wxLogged: false,wxUser:{},tbLogged: false,taobaoUser:{}};
const auth = (state = initialAuthState, action)  => {
  switch (action.type) {
    case 'wxLogin':
      let data=action.datatypes;
      let backobj={};
      if(data&&data['nickname']){
        backobj={
          wxLogged:true,
          wxUser:data
        };
        storage.save({
          key: storeConfig.wxUserKey,
          data: data,
          expires: storeConfig.wxUserTime
         });
      }
      return { ...state, ...backobj };
    case 'wxLogout':
      storage.remove({
        key: storeConfig.wxUserKey
      });
      return { ...state, wxLogged: false};
    case 'tbLogin':
        let tbdata=action.datatypes;
        let tbbackobj={};
        if(tbdata&&tbdata['openId']){
          tbbackobj={
            tbLogged:true,
            taobaoUser:tbdata
          };
          //console.warn(tbdata)
          storage.save({
            key: storeConfig.taobaoUserKey,
            data: tbdata,
            expires: storeConfig.taobaoUserTime
           });
        }
        return { ...state, ...tbbackobj };
    case 'tbLogout':
        storage.remove({
          key: storeConfig.taobaoUserKey
        });
        return { ...state, wxLogged: false};
    default:
      return state;
  }
}

export default auth