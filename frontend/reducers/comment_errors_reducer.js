import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COMMENT_ERRORS:
       return action.errors;
    case RECEIVE_CURRENT_USER:
       return [];
    case 'REMOVE_ERROR':
       return [];
    default:
       return state;
  }
};
