import { OPEN_POST_DROPDOWN, CLOSE_POST_DROPDOWN, OPEN_COMMENT_DROPDOWN, CLOSE_COMMENT_DROPDOWN } from '../actions/modal_actions';

const defaultState = {
  post_dropdown_open: false,
  comment_dropdown: false
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case OPEN_POST_DROPDOWN:
      let newState = Object.assign({}, state, {post_dropdown_open: true});
      return newState;
    case CLOSE_POST_DROPDOWN:
      return defaultState;
    case OPEN_COMMENT_DROPDOWN:
      let newState2 = Object.assign({}, state, {comment_dropdown: true});
      return newState2;
    case CLOSE_COMMENT_DROPDOWN:
      return defaultState;
    default:
      return state;
  }
};

export default uiReducer;
