import { connect } from 'react-redux';
import UserHomePage from './user_homepage';
import { createPost } from '../../actions/post_actions';
import { fetchPost, fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { createFollow, destroyFollow } from '../../actions/follow_actions';
// import { receiveFollow} from '../../actions/follow_actions';
import {withRouter} from 'react-router-dom';
import { openSettingDropdown, openPictureDropdown, openEditDropdown } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    loggedIn: !!state.session.currentUserId,
    pageOwner: state.entities.users[ownProps.match.params.userId],
    followed: state.entities.users[state.session.currentUserId].followings.map(user => user.id).includes(parseInt(ownProps.match.params.userId)),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPosts: ()=> dispatch(fetchPosts()),
  fetchPost: (id)=> dispatch(fetchPost(id)),
  createFollow: (followee_id) => dispatch(createFollow(followee_id)),
  // receiveFollow: (follow) => dispatch(receiveFollow(follow)),
  destroyFollow: (followee_id) => dispatch(destroyFollow(followee_id)),
  openSettingDropdown: () => dispatch(openSettingDropdown()),
  openPictureDropdown: (post) => dispatch(openPictureDropdown(post)),
  openEditDropdown: () => dispatch(openEditDropdown()),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserHomePage));
