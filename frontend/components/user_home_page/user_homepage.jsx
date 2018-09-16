import React from 'react';
import { Redirect } from 'react-router-dom';




class UserHomePage extends React.Component {

render(){
  const button = (
      <div>
        <h1>{this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )

  return(
      <div>
        <h3>this is the home page of user: {this.props.pageOwner.username}</h3>
        {button}
      </div>
    )
  }

}




export default UserHomePage;
