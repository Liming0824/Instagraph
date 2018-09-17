import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import usersReducer from './users_reducer';
import userSearchReducer from './user_search_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  userSearch: userSearchReducer,
});

export default entitiesReducer;
