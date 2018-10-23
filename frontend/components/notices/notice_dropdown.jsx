import React from 'react';
import { connect } from 'react-redux';
import { createFollow, destroyFollow, updateFollow } from '../../actions/follow_actions';



class NoticeDropdown extends React.Component {


  handleUnfollow(id){
    this.props.destroyFollow(id);
    this.props.updateFollow(id);
  }
  handleFollow(id){
    this.props.createFollow(id);
    this.props.updateFollow(id);
  }

  handleDelete(id){
    this.props.updateFollow(id);
  }

  handleClick(follower){
    this.props.history.push(`/homepage/${follower.username}/${follower.id}`);
  }


  render(){
    // let records;
    let items;
    if(this.props.currentUser){
      // records = this.props.currentUser.follower_records.filter(rec => rec.noticed === false);
      if(this.props.records.length === 0){
        items =  (
          <div className='no-new-notice'>
            <span>No new notice</span>
          </div>
        )
      }else{
        const currentUser = this.props.currentUser
        items = currentUser.followers.map((follower,idx) => {
          if(this.props.records.map(rec => rec.follower_id).includes(follower.id)){
            return (
              <li key={idx}>
                <img src={follower.photo_image_url} onClick={this.handleClick.bind(this, follower)}/>
                <span>{follower.username} started following you</span>
                <button className='delete-button'onClick={this.handleDelete.bind(this, follower.id)} >Delete</button>
                {
                  currentUser.followings.map(user => user.id).includes(follower.id) ?
                  <button className='button' onClick={this.handleUnfollow.bind(this, follower.id)}>Following</button> :
                  <button className='button blue-button' onClick={this.handleFollow.bind(this, follower.id)}>Follow</button>
                }
              </li>
            )
        }
      })
    }
  }
    let status = this.props.status ? '' : 'hidden'
    return(
        <div className={`notice-dropdown ${status}`}>
          {items}
        </div>
      )
    }
}


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    status: state.ui.notice_dropdown,
    records: state.entities.users[state.session.currentUserId].follower_records ? state.entities.users[state.session.currentUserId].follower_records.filter(rec => rec.noticed === false) : []
  };
};


const mapDispatchToProps = (dispatch) => {
  return{
    destroyFollow: (followee_id) => dispatch(destroyFollow(followee_id)),
    createFollow: (followee_id) => dispatch(createFollow(followee_id)),
    updateFollow: (followee_id) => dispatch(updateFollow(followee_id)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoticeDropdown);
