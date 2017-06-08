/**
 * Created by kai.fantasy on 2017/4/8 0008.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import checklist from './modules/checklist';
import theme from './modules/theme';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    checklist,
    theme
  }
});
