/**
 * Created by kai.fantasy on 2017/4/8 0008.
 */
export default {
  addchecklist: ({commit}, param) => commit('ADDCHECKLIST', {items: param}),
  checklistdone: ({commit}, param) => commit('CHECKLISTDONE', {id: param}),
  checklisttodo: ({commit}, param) => commit('CHECKLISTTODO', {id: param}),
  checklistcancel: ({commit}, param) => commit('CHECKLISTCANCEL', {id: param}),
  clearchecklist: ({commit}) => commit('CLEARCHECKLIST'),
  delchecklist: ({commit}, param) => commit('DELCHECKLIST', param),
  editchecklist: ({commit}, param) => commit('EDITCHECKLIST', param)
}
