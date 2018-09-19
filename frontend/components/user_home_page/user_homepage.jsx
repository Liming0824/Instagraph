import React from 'react';
import { Redirect } from 'react-router-dom';




class UserHomePage extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts();
  }


render(){
  const button = (
      <div>
        <h1>{this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )

    let ownerPosts;
    let items;
    if(this.props.pageOwner && (this.props.match.params.username === this.props.pageOwner.username)){
      ownerPosts = Object.values(this.props.pageOwner.posts)
      items = ownerPosts.map((post, idx) => {
        return(
          <li className="feed-post" key={idx}>
            <img src={post.photo_image_url}/>
          </li>
        )
      });

      return(
          <div className="user-homepage">
            <div className="user-homepage-title">
              <div className="photo">
                <img src={this.props.pageOwner.photo_image_url}/>
              </div>
              <div className='settings'>
                <div className="follow-status">
                  <span>{this.props.match.params.username}</span>
                  <button>Edit Profile</button>
                  <a className="setting-button"><img src={window.settingImg}/></a>
                </div>
                <div className="status">
                  <li className="post-number">{ownerPosts.length} posts</li>
                  <li className="follower-number">number of followers</li>
                  <li className="following-number">number of followings</li>
                </div>
                <div className="user-bio">
                  <li>{this.props.pageOwner.bio}</li>
                </div>
              </div>
            </div>
            <div className="post-feed">
              {items}
            </div>
             {button}
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
