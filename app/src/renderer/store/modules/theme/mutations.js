/**
 * Created by kai.fantasy on 2017/4/8 0008.
 */
import * as func from '../../function';

export default {
  SWITCHTHEME(states, obj){
    states.theme = obj.theme;
    func.theme_local.set(states);
  }
}
