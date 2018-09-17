import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';


export const receivePosts = ({posts, users}) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts,
    users: users
  };
};



export const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post: post
  };
};

export const removePost = (id) => {
  return {
    type: REMOVE_POST,
    id: id
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    return PostAPIUtil.fetchPosts().then(posts => {
      return dispatch(receivePosts(posts));
    },
    errors => {
      return dispatch({type: RECEIVE_POST_ERRORS, errors: errors.responseJSON });
    }
  );
  };
};

export const fetchPost = (id) => {
  return (dispatch) => {
    return PostAPIUtil.fetchPost(id).then(post => {
      return dispatch(receivePost(post));
    },
    errors => {
      return dispatch({type: RECEIVE_POST_ERRORS, errors: errors.responseJSON });
    }
  );
  };
};

export const createPost = (post) => {
  return (dispatch) => {
    return PostAPIUtil.createPost(post).then(post => {
      return dispatch(receivePost(post));
    },
    errors => {
      return dispatch({type: RECEIVE_POST_ERRORS, errors: errors.responseJSON });
    }
  );
  };
};


export const deletePost = (id) => {
  return (dispatch) => {
    return PostAPIUtil.deletePost(id).then(() => {
      return dispatch(removePost(id));
    },
    errors => {
      return dispatch({type: RECEIVE_POST_ERRORS, errors: errors.responseJSON });
    }
  );
  };
};
