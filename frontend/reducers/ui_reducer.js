import {
  UPDATE_POST_SELECTED,
  OPEN_NOTICE_SELECTED,
  OPEN_SEARCH_SELECTED,
  OPEN_SETTING_SELECTED,
  CHANGE_PROFILE_SELECTED,
  CLOSE_TABS
} from '../actions/ui_actions';

import {
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const defaultState = {
  update_post_selected: false,
  open_notice_selected: false,
  open_search_selected: false,
  open_setting_selected: false,
  change_profile_selected: false
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case UPDATE_POST_SELECTED:
      Object.assign(newState, {update_post_selected: true});
      return newState;
    case OPEN_NOTICE_SELECTED:
      Object.assign(newState, {open_notice_selected: true});
      return newState;
    case OPEN_SEARCH_SELECTED:
      Object.assign(newState, {open_search_selected: true});
      return newState;
    case OPEN_SETTING_SELECTED:
      Object.assign(newState, {open_setting_selected: true});
      return newState;
    case CHANGE_PROFILE_SELECTED:
      Object.assign(newState, {change_profile_selected: true});
      return newState;
    case CLOSE_TABS:
      return defaultState;
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
};

export default uiReducer;
