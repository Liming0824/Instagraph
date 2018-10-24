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
  App.room = App.cable.subscriptions.create(
    {channel: "RoomChannel", room: 'SocketRoom'},
    {
      received: function(data){
        const message = data.message;
        if(message.action === 'follow'){
          receiveFollow(message.message);
        }else{
          removeFollow(message.message);
        }
      },
      follow: function(id) {
        return this.perform('follow', { message: id, action: 'follow' });
      },
      unfollow: function(id) {
        return this.perform('unfollow', {message: id, action: 'unfollow' });
      }

  }
);
};



export const createFollow = (followee_id) => {
  return (dispatch) => {
    return FollowAPIUtil.createFollow(followee_id).then(follow => {
      App.room.follow(follow);
      }
  );
  };
};

export const destroyFollow = (followee_id) => {
  return (dispatch) => {
    return FollowAPIUtil.destroyFollow(followee_id).then(follow => {
      App.room.unfollow(follow);
    }
  );
  };
};

export const updateFollow = (followee_id) => {
  return (dispatch) => {
    return FollowAPIUtil.updateFollow(followee_id).then(follow => {
      App.room.follow(follow);
    });
  };
};
