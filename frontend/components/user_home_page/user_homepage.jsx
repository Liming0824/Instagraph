import React from 'react';
import { Redirect } from 'react-router-dom';
import SettingDropdownContainer from './setting_dropdown';
import PictureDropdownContainer from '../post_dropdown/picture_dropdown';
import EditDropdownContainer from '../post_dropdown/edit_dropdown';
import { fetchPost } from '../../actions/post_actions';

class UserHomePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      likes_arr: []
    };
  }

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchUser(this.props.match.params.userId);
  }


  componentDidUpdate(preProps){
    if(preProps.match.params.userId !== this.props.match.params.userId){
      this.props.fetchUser(this.props.match.params.userId);
      this.setState({
        likes_arr: this.props.pageOwner.posts.map(post => post.likes.length)
      });
    }
  }


  handleUnfollow(){
    this.props.destroyFollow(this.props.pageOwner.id);
  }


  handleFollow(){
    this.props.createFollow(this.props.pageOwner.id);
    // this.props.receiveFollow({followee_id: this.props.pageOwner.id, follower_id: this.props.currentUser.id});
  }


  handleEdit(){
    this.props.openEditDropdown();
  }

  handleZoomPost(post){
    this.props.openPictureDropdown(post);
  }


  render(){
    let ownerPosts;
    let items;
    if(this.props.pageOwner && (this.props.match.params.username === this.props.pageOwner.username)){
      ownerPosts = this.props.pageOwner.posts.sort((a,b)=>(new Date(a.created_at) - new Date(b.created_at)));
      items = ownerPosts.map((post, idx) => {
        return(
          <li className="feed-post-container" key={idx} onClick={this.handleZoomPost.bind(this, post)}>
            <img src={post.photo_image_url}/>
            <span>&hearts; &nbsp; {post.likes.length} &nbsp;&nbsp;✐ {post.comments.length}</span>
          </li>
        )
      });
      items = items.reverse();
      let setting_buttons;
        if(this.props.currentUser.id === this.props.pageOwner.id){
          setting_buttons = (
            <div className="follow-status">
              <span>{this.props.match.params.username}</span>
              <button onClick={this.handleEdit.bind(this)}>Edit Profile</button>
              <a className="setting-button" onClick={this.props.openSettingDropdown}><img src={window.settingImg}/></a>
            </div>
          )
        }else{
          setting_buttons = (
            <div className="follow_button_open">
              <span>{this.props.match.params.username}</span>
              {
                this.props.followed ?
                <button className='button' onClick={this.handleUnfollow.bind(this)}>Following</button> :
                <button className='button blue-button' onClick={this.handleFollow.bind(this)}>Follow</button>
              }
            </div>
          )
        }

      return(
          <div className="user-homepage">
            <div className="user-homepage-title">
              <div className="photo">
                <img src={this.props.pageOwner.photo_image_url}/>
              </div>
              <div className='settings'>
                {setting_buttons}
                <div className="status">
                  <li className="post-number">{ownerPosts.length} posts</li>
                  <li className="follower-number">{this.props.pageOwner.followers.length} followers</li>
                  <li className="following-number">{this.props.pageOwner.followings.length} following</li>
                </div>
                <div className="user-bio">
                  <li>bio: &nbsp; &nbsp;{this.props.pageOwner.bio}</li>
                </div>
              </div>
            </div>
            <SettingDropdownContainer />
            <PictureDropdownContainer author={this.props.pageOwner}/>
            <EditDropdownContainer />
            <div className="post-feed">
              {items}
            </div>
          </div>
        )

    }else{
      return (
        <div>
          <h1>loading or double check the path</h1>
        </div>
      )
    }
  }

}




export default UserHomePage;
