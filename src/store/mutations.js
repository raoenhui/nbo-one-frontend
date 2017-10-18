import {RECORD_USERINFO,GET_USERINFO} from './mutation-types.js'
export default {
  // 记录用户信息
  [RECORD_USERINFO](state, info) {
    state.userInfo = info;
    state.login = true;
    _.setStore('userInfo',info);
  },
  //获取用户信息存入vuex
  [GET_USERINFO](state, info) {
    if (state.userInfo && info && (state.userInfo.userId === info.userId) && state.login) {
      return;
    }

    if (info) {
      state.userInfo = {...info};
    } else {
      state.userInfo = {};
    }
  }
}
