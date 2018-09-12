import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

export const login = user => {
  return dispatch => {
    return APIUtil.login(user).then(user => {
       return dispatch({type: RECEIVE_CURRENT_USER, user: user});
    },
    errors => {
       return dispatch({type: RECEIVE_SESSION_ERRORS, errors: errors});
    }
  );
  };
};

export const signup = user => {
  return dispatch => {
    return APIUtil.signup(user).then(user => {
      return dispatch({type: RECEIVE_CURRENT_USER, user: user});
    },
    errors => {
      return dispatch({type: RECEIVE_SESSION_ERRORS, errors: errors});
    }
  );
  };
};


export const logout = () => {
  return dispatch => {
    return APIUtil.logout().then(() => {
      return dispatch({type: LOGOUT_CURRENT_USER});
    },
    errors => {
      return dispatch({type: RECEIVE_SESSION_ERRORS, errors: errors});
    }
  );
  };
};
