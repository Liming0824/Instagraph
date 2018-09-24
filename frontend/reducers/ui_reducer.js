import { OPEN_POST_DROPDOWN,
         CLOSE_POST_DROPDOWN,
         OPEN_COMMENT_DROPDOWN,
         CLOSE_COMMENT_DROPDOWN,
         OPEN_SETTING_DROPDOWN,
         CLOSE_SETTING_DROPDOWN,
         OPEN_PICTURE_DROPDOWN,
         CLOSE_PICTURE_DROPDOWN,
         OPEN_EDIT_DROPDOWN,
         CLOSE_EDIT_DROPDOWN,
         NOTICE_DROPDOWN,
       } from '../actions/modal_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const defaultState = {
  post_dropdown_open: false,
  comment_dropdown: false,
  setting_dropdown: false,
  picture_dropdown: false,
  edit_dropdown: false,
  notice_dropdown: false,
  post: null
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case NOTICE_DROPDOWN:
      let newState7 = Object.assign({}, state);
      newState7['notice_dropdown'] = !newState7['notice_dropdown'];
      return newState7;
    case OPEN_EDIT_DROPDOWN:
      let newState6 = Object.assign({}, state, {edit_dropdown: true});
      return newState6;
    case CLOSE_EDIT_DROPDOWN:
      return defaultState;
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
    case OPEN_SETTING_DROPDOWN:
      return Object.assign({}, state, {setting_dropdown: true});
    case CLOSE_SETTING_DROPDOWN:
      return defaultState;
    case OPEN_PICTURE_DROPDOWN:
      return Object.assign({}, state, {picture_dropdown: true, post: action.post});
    // case RECEIVE_LIKE:
    //   let newState3 = Object.assign({}, state);
    //   newState3.post.likes.push(action.like.liker_id);
    //   return newState3;
    // case REMOVE_LIKE:
    //   let newState4 = Object.assign({}, state);
    //   const idx = newState4.post.likes.indexOf(action.like.liker_id);
    //   let likes_arr = newState4.post.likes;
    //   const new_likes_arr = likes_arr.slice(0,idx).concat(likes_arr.slice(idx+1))
    //   newState4.post.likes = new_likes_arr;
    //   return newState4;
    // case RECEIVE_COMMENT:
    //   let newState5 = Object.assign({}, state);
    //   newState5 = newState5.post.comments.push({id: action.comment.id,body: action.comment.body,author_name: action.comment.author_name});
    //   return newState5;
    case CLOSE_PICTURE_DROPDOWN:
      return defaultState;
    default:
      return state;
  }
};

export default uiReducer;
