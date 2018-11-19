import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { searchUsersByIds } from '../../actions/user_actions';

export class SideBar extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const arr = this.props.followings.map(user => user.id);
    this.props.searchUsersByIds(arr);
  }

  getDateDiff(data) {
      if(!data) return false;
      let timePublish = new Date(data);
      let timeNow = new Date();
      let minute = 1000 * 60;
      let hour = minute * 60;
      let day = hour * 24;
      let month = day * 30;
      let diffValue = timeNow - timePublish;
      let diffMonth = diffValue / month;
      let diffWeek = diffValue / (7 * day);
      let diffDay = diffValue / day;
      let diffHour = diffValue / hour;
      let diffMinute = diffValue / minute;
      let result;
      if (diffValue < 0) {
          alert("WRONG TIME");
      }
      else if (diffMonth > 3) {
          result = timePublish.getFullYear() + "-";
          result += timePublish.getMonth() + "-";
          result += timePublish.getDate();
          alert(result);
      }
      else if (diffMonth > 1) {
          result = parseInt(diffMonth) + "  MONTHS AGO";
      }
      else if (diffWeek > 1) {
          result = parseInt(diffWeek) + "  WEEKS AGO";
      }
      else if (diffDay > 1) {
          result = parseInt(diffDay) + "  DAYS AGO";
      }
      else if (diffHour > 1) {
          result = parseInt(diffHour) + "  HOURS AGO";
      }
      else if (diffMinute > 1) {
          result = parseInt(diffMinute) + "  MINUTES AGO";
      }
      else {
          result = "JUST NOW";
      }
      return result;
  }

  handleClick(){
    this.props.history.push(`/homepage/${this.props.currentUser.username}/${this.props.currentUser.id}`);
  }


  handleFriendClick(friend){
    this.props.history.push(`/homepage/${friend.username}/${friend.id}`);
  }

  render(){
    const friends = this.props.followings;
    let items = friends.map((friend, idx) => {
        let time;
        if(friend.posts.length > 0){
          time = this.getDateDiff.bind(this, friend.posts[friend.posts.length-1].created_at)();
        }

        return(
          <li className="friend-item" onClick={this.handleFriendClick.bind(this,friend)} key={idx}>
            <div className='for-rainbow'>
              <div className="item-box">
                <img src={friend.photo_image_url}/>
              </div>
            </div>
            <div className="info-div">
              <span>{friend.username}</span>
              <strong>{time ? time : ''}</strong>
            </div>
          </li>
        )
      })


    return (
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
          {items}
        </div>
        <footer>

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
    users: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.currentUserId],
    followings: state.entities.users[state.session.currentUserId].followings,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    searchUsersByIds: (arr) => dispatch(searchUsersByIds(arr))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar));

// add into footer, before @2018
// <div>
//   About Us * Support * Press * Api * Jobs * Privacy *
//   Terms * Directory * Profiles * Hashtags * Language
// </div>
