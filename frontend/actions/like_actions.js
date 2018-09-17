import * as LikeAPIUtil from '../util/like_api_util';


export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like: like
  };
};

export const removeLike = (like) => {
  return {
    type: REMOVE_LIKE,
    like: like
  };
};

export const createLike = (post_id) => {
  return (dispatch) => {
    return LikeAPIUtil.createLike(post_id).then(like => {
      return dispatch(receiveLike(like));
    });
  };
};

export const deleteLike = (post_id) => {
  return (dispatch) => {
    return LikeAPIUtil.destroyLike(post_id).then((like)=>{
      return dispatch(removeLike(like));
    });
  };
};
