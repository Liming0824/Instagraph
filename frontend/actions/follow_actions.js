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


export const createFollow = (followee_id) => {
  return (dispatch) => {
    return FollowAPIUtil.createFollow(followee_id).then(follow => {

      return dispatch(receiveFollow(follow));
    });
  };
};

export const destroyFollow = (followee_id) => {
  return (dispatch) => {
    return FollowAPIUtil.destroyFollow(followee_id).then(follow => {
      return dispatch(removeFollow(follow));
    });
  };
};

export const updateFollow = (followee_id) => {
  return (dispatch) => {
    return FollowAPIUtil.updateFollow(followee_id).then(follow => {
      return dispatch(receiveFollow(follow))
    })
  }
}
