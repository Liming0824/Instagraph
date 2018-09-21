import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_USER, SEARCH_USERS } from '../actions/user_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POSTS:
      return action.users;
    case RECEIVE_POST:
      let newState7 = merge({}, state);
      newState7[action.post.posterId].posts.push(action.post)
      return newState7;
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_FOLLOW:
      let newState2 = merge({}, state);
      const follower_user = state[action.follow.follower_id];
      newState2[action.follow.followee_id].followers.push(follower_user);
      const followee_user = state[action.follow.followee_id];
      newState2[action.follow.follower_id].followings.push(followee_user);
      return newState2;
    case REMOVE_FOLLOW:
      let newState3 = merge({}, state);
      let follower_arr = newState3[action.follow.followee_id].followers;
      const follower_idx = follower_arr.map(user => user.id).indexOf(action.follow.follower_id);
      follower_arr = follower_arr.slice(0, follower_idx).concat(follower_arr.slice(follower_idx+1));
      newState3[action.follow.followee_id].followers = follower_arr;

      let following_arr = newState3[action.follow.follower_id].followings;
      const following_idx = following_arr.map(user => user.id).indexOf(action.follow.followee_id);
      following_arr = following_arr.slice(0, following_idx).concat(following_arr.slice(following_idx+1));
      newState3[action.follow.follower_id].followings = following_arr;
      return newState3;
      case RECEIVE_LIKE:
        let newState6 = Object.assign({},state);
        let userposts = newState6[action.like.post_author.id].posts;
        userposts = userposts.forEach(post => {
          if(post.id === action.like.post_id){
            post.likes.push(action.like.liker_id);
          }
        });
        newState6[action.like.post_author.id].posts = userposts;
        return newState6;
      case REMOVE_LIKE:
        let newState5 = Object.assign({},state);
        let likes = newState5[action.like.post_author.id].posts[action.like.post_id].likes;
        const idx = likes.indexOf(action.like.liker_id);
        likes = likes.slice(0,idx).concat(likes.slice(idx+1));
        newState5[action.like.post_author.id].posts[action.like.post_id].likes = likes;
        return newState5;
    case RECEIVE_COMMENT:
      let newState4 = merge({}, state);
      newState4.posts[action.comment.post_id].comments.push({id: action.comment.id, body: action.comment.body, author_name: action.comment.author_name});
      return newState4;
    default:
      return state;
  }
};
