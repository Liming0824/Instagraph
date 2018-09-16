import { combineReducers } from 'redux';
import sessionErrors from './session_errors_reducer';
import postFormErrors from './post_form_errors_reducer';

export default combineReducers({
  session: sessionErrors,
  postForm: postFormErrors
});
