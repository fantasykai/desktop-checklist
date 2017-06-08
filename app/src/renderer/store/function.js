/**
 * Created by kai.fantasy on 2017/4/8 0008.
 */
const localCheckList = function (item) {
  this.get = function () {
    return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';
  }
  this.set = function (obj) {
    localStorage.setItem(item, JSON.stringify(obj));
  }
  this.clear = function () {
    localStorage.removeItem(item);
  }
}

export const local = new localCheckList('checklist');
export const theme_local = new localCheckList('checklist_theme');
//获取当天日期
export const getDate = () => {
  const date = new Date(),
    mouth = parseInt(date.getMonth()) + 1;
  return date.getFullYear() + '-' + mouth + '-' + date.getDate();
}
