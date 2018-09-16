import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';


export default (state = {}, action) => {
  switch(action.type){
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      let newState = Object.assign({}, state);
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      let newState2 = Object.assign({},state);
      delete newState2[action.id];
      return newState2;
    default:
      return state;
  }
};
