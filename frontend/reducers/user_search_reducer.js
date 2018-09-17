import { SEARCH_USERS, CLEAR_SEARCH } from '../actions/user_actions';


export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case SEARCH_USERS:
      let newState = action.response;
      return newState;
    case CLEAR_SEARCH:
      return [];
    default:
      return state;
  }
};
