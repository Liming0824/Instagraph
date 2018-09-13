import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class NavBar extends React.Component {

  render(){
    let button;
    if (this.props.loggedIn) {
      button = (
        <div>
          <h1>{this.props.currentUser.username}</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
      return (
        <section className='nav_bar'>
          {button}
        </section>
      );
    }else{
      return (
        <div>
          {button}
        </div>
      )
    }
  }


};

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  loggedIn: !!state.session.currentUserId
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
