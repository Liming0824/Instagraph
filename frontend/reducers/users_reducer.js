import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_USER, RECEIVE_USERS, SEARCH_USERS } from '../actions/user_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POSTS:
      return action.users;
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_POST:
      let newState7 = merge({}, state);
      newState7[action.post.posterId].posts.push(action.post);
      return newState7;
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_FOLLOW:
      let newState2 = merge({}, state);
      const follower_user = state[action.follow.follower_id];
      let idx2 = newState2[action.follow.followee_id].followers.map(rec => rec.id).indexOf(follower_user);
      if( idx2 === -1){
        newState2[action.follow.followee_id].followers.push(follower_user);
      }else{
        newState2[action.follow.followee_id].followers[idx2] = follower_user;
      }

      let follower_records_arr = newState2[action.follow.followee_id].follower_records.map(rec => rec.follower_id);

      let idx3 = follower_records_arr.indexOf(action.follow.follower_id);
      if(idx3 === -1){
        newState2[action.follow.followee_id].follower_records.push({noticed: action.follow.noticed, follower_id: action.follow.follower_id});
      }else{
        newState2[action.follow.followee_id].follower_records[idx3] = {noticed: action.follow.noticed, follower_id: action.follow.follower_id};
      }
      if(newState2[action.follow.follower_id]){
        const followee_user = state[action.follow.followee_id];
        newState2[action.follow.follower_id].followings.push(followee_user);
      }
      return newState2;
    case REMOVE_FOLLOW:
      let newState3 = merge({}, state);
      let follower_arr = newState3[action.follow.followee_id].followers;
      let follower_idx = follower_arr.map(user => user.id).indexOf(action.follow.follower_id);
      while(follower_idx !== -1){
        follower_arr = follower_arr.slice(0, follower_idx).concat(follower_arr.slice(follower_idx+1));
        follower_idx = follower_arr.map(user => user.id).indexOf(action.follow.follower_id);
      }
      newState3[action.follow.followee_id].followers = follower_arr;
      let idx = newState3[action.follow.followee_id].follower_records.map(rec => rec.follower_id).indexOf(action.follow.follower_id);
      while(idx !== -1){
        newState3[action.follow.followee_id].follower_records = newState3[action.follow.followee_id].follower_records.slice(0, idx).concat(newState3[action.follow.followee_id].follower_records.slice(idx+1));
        idx = newState3[action.follow.followee_id].follower_records.map(rec => rec.follower_id).indexOf(action.follow.follower_id);
      }
      let following_arr = newState3[action.follow.follower_id].followings;
      let following_idx = following_arr.map(user => user.id).indexOf(action.follow.followee_id);
      while(following_idx !== -1){
        following_arr = following_arr.slice(0, following_idx).concat(following_arr.slice(following_idx+1));
        following_idx = following_arr.map(user => user.id).indexOf(action.follow.followee_id);
      }
      newState3[action.follow.follower_id].followings = following_arr;
      return newState3;
      case RECEIVE_LIKE:
        let newState6 = Object.assign({},state);
        let userposts = newState6[action.like.post_author.id].posts;
        for(let i = 0; i < userposts.length; i++){
          if(userposts[i].id === action.like.post_id){
            userposts[i].likes.push(action.like.liker_id);
          }
        }
        newState6[action.like.post_author.id].posts = userposts;
        return newState6;
      case REMOVE_LIKE:
        let newState5 = Object.assign({},state);
        let user_posts2 = newState5[action.like.post_author.id].posts;
        for(let i = 0; i < user_posts2.length; i++){
          if(user_posts2[i].id === action.like.post_id){
            let user_likes = user_posts2[i].likes;
            const idx = user_likes.indexOf(action.like.liker_id);
            user_likes = user_likes.slice(0, idx).concat(user_likes.slice(idx+1));
            user_posts2[i].likes = user_likes;
          }
        }
        newState5[action.like.post_author.id].posts = user_posts2;
        return newState5;
    case RECEIVE_COMMENT:
      let newState4 = merge({}, state);
      let user_posts = newState4[action.comment.post_author_id].posts;
      for(let i = 0; i < user_posts.length; i++) {
        if(user_posts[i].id === action.comment.post_id){
          user_posts[i].comments.push(action.comment);
        }
      }
      newState4[action.comment.post_author_id].posts = user_posts;
      return newState4;
    default:
      return state;

  }
};
