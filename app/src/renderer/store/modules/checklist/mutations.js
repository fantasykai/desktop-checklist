/**
 * Created by kai.fantasy on 2017/4/8 0008.
 */
import * as type from './mutations_types';
import * as func from '../../function';

export default {
  // 使用常量作为函数名(ES2015 风格)
  [type.ADDCHECKLIST](states, obj){
    states.count++;
    obj.items.id = states.count;
    states.event.unshift(obj.items);
    func.local.set(states);
  },
  [type.CHECKLISTDONE](states, obj){
    for (let i = 0; i < states.event.length; i++) {
      if (states.event[i].id === obj.id) {
        states.event[i].type = 2;
        states.event[i].time = func.getDate();
        var item = states.event[i];
        states.event.splice(i, 1);
        break;
      }
    }
    states.event.unshift(item);
    func.local.set(states);
  },
  [type.CHECKLISTTODO](states, obj){
    for (let i = 0; i < states.event.length; i++) {
      if (states.event[i].id === obj.id) {
        states.event[i].type = 1;
        var item = states.event[i];
        states.event.splice(i, 1);
        break;
      }
    }
    states.event.unshift(item);
    func.local.set(states);
  },
  [type.CHECKLISTCANCEL](states, obj){
    for (let i = 0; i < states.event.length; i++) {
      if (states.event[i].id === obj.id) {
        states.event[i].type = 3;
        var item = states.event[i];
        states.event.splice(i, 1);
        break;
      }
    }
    states.event.unshift(item);
    func.local.set(states);
  },
  [type.CLEARCHECKLIST](states){
    states.event = [];
    func.local.clear();
  },
  [type.DELCHECKLIST](states, info){
    if (states.event[info.index].id === info.id) {
      states.event.splice(info.index, 1);
    } else {
      states.event.filter(function (d, i) {
        if (d.id == info.id) {
          states.event.splice(i, 1);
        }
      })
    }
    func.local.set(states);
  },
  [type.EDITCHECKLIST](states, info){
    if (states.event[info.index].id === info.id) {
      states.event[info.index].content = info.content;
    } else {
      states.event.filter(function (d) {
        if (d.id == info.id) {
          d.content = info.content;
        }
      })
    }
    func.local.set(states);
  }
}
