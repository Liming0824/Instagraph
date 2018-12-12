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
      // receive whatever RoomChannel broadcasted
      received: function(data){
        const message = data.message;
        if(message.action === 'follow'){
          receiveFollow(message.message);
        }else{
          removeFollow(message.message);
        }
      },
      // goes to the RoomChannel file, find follow/unfollow function
      // perform "follow/unfollow" function means the function RoomChannel
      // and what we have in the object will be the argunment that passed in
      follow: function(id) {
        return this.perform('follow', { message: id, action: 'follow' });
      },
      // goes to the RoomChannel file, find follow/unfollow function
      unfollow: function(id) {
        return this.perform('unfollow', {message: id, action: 'unfollow' });
      }

  }
);
};



export const createFollow = (followee_id) => {
  return (dispatch) => {
    return FollowAPIUtil.createFollow(followee_id).then(follow => {
    // goes to the "App.cable.subscriptions.create" follow
      App.room.follow(follow);
      }
  );
  };
};

export const destroyFollow = (followee_id) => {
  return (dispatch) => {
    return FollowAPIUtil.destroyFollow(followee_id).then(follow => {
    // goes to the "App.cable.subscriptions.create" unfollow
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
