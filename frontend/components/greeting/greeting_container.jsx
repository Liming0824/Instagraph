import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, login } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    loggedIn: !!state.session.currentUserId,
    errors: state.errors.session
  };
};


const mapDispatchToProps = ( dispatch ) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  remove_error: ()=> dispatch({type: `REMOVE_ERROR`})
});



export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
