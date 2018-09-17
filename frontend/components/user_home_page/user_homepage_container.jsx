import { connect } from 'react-redux';
import UserHomePage from './user_homepage';
import { logout } from '../../actions/session_actions';
import { createPost } from '../../actions/post_actions';
// import {withRouter} from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    loggedIn: !!state.session.currentUserId,
    pageOwner: state.entities.users[ownProps.match.params.userId]
  };
};


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),

});


export default connect(mapStateToProps, mapDispatchToProps)(UserHomePage);
