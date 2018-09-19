import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

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
    case RECEIVE_COMMENT:
      let newState5 = Object.assign({},state);
      newState5[action.comment.post_id].comments.push(action.comment);
      return newState5;
    case REMOVE_COMMENT:
      let newState6 = Object.assign({},state);
      let comments = newState6[action.comment.post_id].comments;
      let newComments = comments.filter((comment)=>{
        return(
          comment.id !== action.comment.id
        );
      });
      newState6[action.comment.post_id].comments = newComments;
      return newState6;
    case RECEIVE_LIKE:
      let newState3 = Object.assign({},state);
      newState3[action.like.post_id].likes.push(action.like.liker_id);
      return newState3;
    case REMOVE_LIKE:
      let newState4 = Object.assign({},state);
      let likes = newState4[action.like.post_id].likes;
      const idx = likes.indexOf(action.like.liker_id);
      likes = likes.slice(0,idx).concat(likes.slice(idx+1));
      newState4[action.like.post_id].likes = likes;
      return newState4;
    default:
      return state;
  }
};
