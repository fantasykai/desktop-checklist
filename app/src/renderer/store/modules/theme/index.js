/**
 * Created by kai.fantasy on 2017/4/8 0008.
 */
import * as func from '../../function';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = func.theme_local.get() || {
    theme: 'cyan'
  }

export default {
  state,
  actions,
  mutations,
  getters
}
