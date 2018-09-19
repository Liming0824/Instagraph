import * as CommentAPIUtil from '../util/comment_api_util.js';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment: comment
  };
};



export const removeComment = (comment) => {
  return {
    type: REMOVE_COMMENT,
    comment: comment
  };
};


export const createComment = (comment) => {
  return (dispatch) => {
    return CommentAPIUtil.createComment(comment).then((comment) => {
      return dispatch(receiveComment(comment));
    },
    errors => {
      return dispatch({type: RECEIVE_COMMENT_ERRORS, errors: errors.responseJSON });
    }
  );
  };
};


export const deleteComment = (id) => {
  return (dispatch) => {
    return CommentAPIUtil.destroyComment(id).then(comment => {
      return dispatch(removeComment(comment));
    },
    errors => {
      return dispatch({type: RECEIVE_COMMENT_ERRORS, errors: errors.responseJSON });
    }
  );
  };
};
