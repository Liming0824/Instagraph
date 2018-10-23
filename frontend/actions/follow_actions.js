import * as FollowAPIUtil from '../util/follow_api_util.js';


export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW  = "REMOVE_FOLLOW";

export const receiveFollow = (follow) => {
  return {
    type: RECEIVE_FOLLOW,
    follow: follow
  };
};


export const removeFollow = (follow) => {
  return {
    type: REMOVE_FOLLOW,
    follow: follow
  };
};

export const ListenFollow = (currentUser_id, receiveFollow, removeFollow) => {
  App['currentUser_id'] = App.cable.subscriptions.create(
    {channel: "RoomChannel", id: currentUser_id},
    {
      received: function(data){
        const message = data.message;
        if(message.action === 'follow'){
          receiveFollow(message.message);
        }else{
          removeFollow(message.message);
        }
      },
      follow: function(message) {
        return this.perform('follow', { message: message, action: 'follow' });
      },
      unfollow: function(message) {
        return this.perform('unfollow', {message: message, action: 'unfollow' });
      }

  }
);
};


export const createFollow = (followee_id) => {
  return (dispatch) => {
    return FollowAPIUtil.createFollow(followee_id).then(follow => {
      App['currentUser_id'].follow(follow);
      }
  );
  };
};

export const destroyFollow = (followee_id) => {
  return (dispatch) => {
    return FollowAPIUtil.destroyFollow(followee_id).then(follow => {
      App['currentUser_id'].unfollow(follow);
    }
  );
  };
};

export const updateFollow = (followee_id) => {
  return (dispatch) => {
    return FollowAPIUtil.updateFollow(followee_id).then(follow => {
      App['currentUser_id'].follow(follow);
    });
  };
};
