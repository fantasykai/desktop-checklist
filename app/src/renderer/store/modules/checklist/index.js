/**
 * Created by kai.fantasy on 2017/4/8 0008.
 */
import * as func from '../../function';
import actions from './actions';
import mutations from './mutations.js';
import getters from './getters.js';
const state = func.local.get() || {
    event: [],
    count: 0
  }

export default {
  state,
  getters,
  actions,
  mutations
}



