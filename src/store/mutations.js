import {increment,decrement} from './mutation-types.js'
export default {
  // [increment](state, detail) {
  //   state.shopDetail = detail;
  // },
  [increment]: (state,n) => state.count+=n,
  [decrement]: (state,playload) => state.count-=playload.count
}
