import { connect } from 'react-redux';
import UserHomePage from './user_homepage';
import { logout } from '../../actions/session_actions';
import { createPost } from '../../actions/post_actions';
import { fetchPost, fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
// import {withRouter} from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    loggedIn: !!state.session.currentUserId,
    pageOwner: state.entities.users[ownProps.match.params.userId],
    // ownerPosts: Object.values(state.entities.users[ownProps.match.params.userId].posts)
    // followed:  check if the user.friends included this homeUser
  };
};


const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  logout: () => dispatch(logout()),
  fetchPosts: ()=> dispatch(fetchPosts())
  // follow: if currentUser haven't follow this homeuser, could call this function,
  // unfollow: if currentUser already followed this homeuser, could call this function ton unfollow
  // if homeUser id === currentUserId, then the user should have setting toggle, could logout

});


export default connect(mapStateToProps, mapDispatchToProps)(UserHomePage);
