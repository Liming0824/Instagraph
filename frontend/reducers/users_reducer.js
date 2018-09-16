import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_POSTS } from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POSTS:
      return action.users;
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};
