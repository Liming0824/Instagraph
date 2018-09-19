import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class SideBar extends React.Component{

  handleClick(){
    this.props.history.push(`/homepage/${this.props.currentUser.username}/${this.props.currentUser.id}`);
  }


  render(){
    return (
      //side bar box should have margin left 30-50px
      <div className='side-bar-box'>
        <div className='current-user-top'>
          <img src={this.props.currentUser.photo_image_url} onClick={this.handleClick.bind(this)}/>
          <span>{this.props.currentUser.username}</span>
        </div>
        <div className='stories-and-watch-all'>
          <span>Stories</span>
          <span>watch all</span>
        </div>
        <div className='friends-stories'>
          //for now just display friends name, pic, after implement, this list should depends on who has new story
          // going to be list of friends, overflow: scroll
        </div>
        <footer>
          <div>
            About Us * Support * Press * Api * Jobs * Privacy *
            Terms * Directory * Profiles * Hashtags * Language
          </div>
          <div>
            @2018 INSTAGRAPH
          </div>
        </footer>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId]
  }
}

export default withRouter(connect(mapStateToProps)(SideBar));
